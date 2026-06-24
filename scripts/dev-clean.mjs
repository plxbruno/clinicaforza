// Mata processos "next dev" orfaos DESTE projeto antes de iniciar um novo.
// No Windows, fechar o terminal nao mata os workers-filho do Next; eles
// acumulam a cada `npm run dev` e travam a maquina. Este script limpa as
// sobras de forma segura: filtra pelo caminho do projeto + assinatura do
// Next, entao nao encosta em outros node.exe (Claude Code, VS Code, etc).

import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const projectDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..'
);
const self = process.pid;

if (process.platform !== 'win32') {
  try {
    execFileSync('pkill', ['-f', `${projectDir}.*next`], { stdio: 'ignore' });
  } catch {
    // pkill retorna != 0 quando nao acha nada; tudo bem
  }
  process.exit(0);
}

const proj = projectDir.replace(/'/g, "''");
const psScript = `
$proj = '${proj}'
$victims = Get-CimInstance Win32_Process -Filter "Name='node.exe'" | Where-Object {
  $_.ProcessId -ne ${self} -and
  $_.CommandLine -and
  $_.CommandLine.ToLower().Contains($proj.ToLower()) -and
  ($_.CommandLine -like '*next-server*' -or $_.CommandLine -like '*\\node_modules\\next\\dist\\*')
}
if ($victims) {
  foreach ($v in $victims) {
    Write-Host ("  encerrando node orfao PID " + $v.ProcessId)
    try { Stop-Process -Id $v.ProcessId -Force -ErrorAction Stop } catch {}
  }
} else {
  Write-Host "  nenhum processo next orfao encontrado"
}
`;

try {
  const out = execFileSync(
    'powershell',
    ['-NoProfile', '-NonInteractive', '-Command', psScript],
    { encoding: 'utf8' }
  );
  if (out.trim()) process.stdout.write(out);
} catch (err) {
  console.error('dev-clean: falha ao limpar processos:', err.message);
}
