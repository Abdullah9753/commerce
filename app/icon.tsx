import { ImageResponse } from 'next/og';

export const size = {
    width: 32,
    height: 32
};
export const contentType = 'image/png';

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'black',
                    color: 'white',
                    borderRadius: '20%'
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    style={{
                        width: '20px',
                        height: '20px',
                        fill: 'white'
                    }}
                >
                    <path d="M4 4V28H28V20H12V4H4Z" />
                </svg>
            </div>
        ),
        { ...size }
    );
}
