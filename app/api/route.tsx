import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(to bottom right, #1E40AF, #7E22CE)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <div style={{ 
          fontSize: 128, 
          fontWeight: 'bold',
          background: 'linear-gradient(to right, #60A5FA, #C084FC)',
          backgroundClip: 'text',
          color: 'transparent',
        }}>
          KhyAI
        </div>
        <div style={{ 
          fontSize: 48, 
          opacity: 0.8,
          marginTop: 24,
        }}>
          Advanced AI Solutions
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}
