import { ImageResponse } from 'next/og'
import { brl, clinic, pricing } from '@/lib/clinic'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = `${clinic.name} — emagrecimento em ${clinic.address.city}: consulta por R$ ${brl(pricing.consultation.price)} e plano a partir de R$ ${brl(pricing.plan.from)} por mês`

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0D1B2A',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              color: '#C9A55A',
              fontSize: 24,
              letterSpacing: 6,
              textTransform: 'uppercase',
            }}
          >
            {`${clinic.name} · ${clinic.address.district}`}
          </div>
          <div
            style={{
              color: '#FFFFFF',
              fontSize: 68,
              fontWeight: 600,
              lineHeight: 1.1,
              marginTop: 28,
              maxWidth: 900,
            }}
          >
            {`Emagrecimento em ${clinic.address.city}, com acompanhamento médico.`}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ color: '#C9A55A', fontSize: 28 }}>
              Consulta com avaliação completa
            </div>
            <div
              style={{
                color: '#FFFFFF',
                fontSize: 128,
                fontWeight: 700,
                lineHeight: 1,
                marginTop: 8,
              }}
            >
              {`R$ ${brl(pricing.consultation.price)}`}
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              color: 'rgba(255,255,255,0.65)',
              fontSize: 26,
            }}
          >
            <div>{clinic.doctor.name}</div>
            <div style={{ marginTop: 10 }}>
              {`Plano a partir de R$ ${brl(pricing.plan.from)}/mês`}
            </div>
          </div>
        </div>
      </div>
    ),
    size
  )
}
