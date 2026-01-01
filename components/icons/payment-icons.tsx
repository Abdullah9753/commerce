export function VisaIcon(props: React.ComponentProps<'svg'>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32px" height="32px" {...props}>
            <path fill="#1565C0" d="M45 35c0 2.209-1.791 4-4 4H7c-2.209 0-4-1.791-4-4V13c0-2.209 1.791-4 4-4h34c2.209 0 4 1.791 4 4V35z" />
            <path fill="#FFF" d="M15.186 19l-2.192 13.534-.04.266h3.486l2.191-13.8L15.186 19zM27.276 27.674h-4.606l2.94-8.674h4.481l4.033 13.8h-3.692l-.659-2.924L27.276 27.674zM32.062 19h-1.996l-3.35 6.007L29.351 19H32.062zM36.331 16.963c-1.397-.565-3.048-.731-4.72-.451l.859 2.508c1.672-.28 3.323-.114 4.72.451L36.331 16.963zM10.835 19H7.135l3.257 11.238 2.05-9.395L10.835 19zM19.165 19l-1.636 9.805-4.135-9.805H8.855l6.305 13.8h4.634L25.305 19H19.165z" />
        </svg>
    );
}

export function MastercardIcon(props: React.ComponentProps<'svg'>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32px" height="32px" {...props}>
            <path fill="#FF5F00" d="M14.9 12c0-1.57-.49-3.03-1.33-4.22-1.35-1.92-3.57-3.18-6.07-3.18-4.14 0-7.5 3.36-7.5 7.5s3.36 7.5 7.5 7.5c2.47 0 4.67-1.24 6.03-3.13.86-1.2 1.37-2.68 1.37-4.27z" />
            <path fill="#EB001B" d="M23.5 12c0 4.14-3.36 7.5-7.5 7.5-2.28 0-4.32-1.03-5.72-2.65 1.15-1.36 1.84-3.11 1.84-5.04 0-1.9-.68-3.63-1.81-4.99 1.39-1.63 3.44-2.67 5.74-2.67 4.14 0 7.5 3.36 7.5 7.5z" />
            <path fill="#F79E1B" d="M9.18 12c0 1.93.69 3.68 1.84 5.04.87-1.23 1.38-2.73 1.38-4.34 0-1.59-.5-3.08-1.35-4.31-1.13 1.36-1.87 3.09-1.87 4.99z" />
        </svg>
    );
}

export function ApplePayIcon(props: React.ComponentProps<'svg'>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 24" width="38px" height="24px" {...props}>
            <path fill="currentColor" d="M12.152 14.542c-.066 3.167 2.766 4.223 2.793 4.238-1.52.748-2.126.398-4.045 2.126-1.637-.215-3.023-1.854-3.023-1.854s0 .002.003-.004c.834-.997 1.4-2.385 1.4-3.873 0-3.047-2.72-4.636-2.72-4.636s2.175-1.83 4.162-1.83c1.176 0 2.083.473 2.793.473.708 0 1.896-.537 3.193-.537 1.137 0 3.23.47 4.31 2.073-3.674 1.258-3.05 6.012.133 7.824zM8.38 8.84c.613-.733 1.025-1.742 1.025-2.82 0-.142-.016-.282-.045-.418-1.03.04-2.227.68-2.95 1.543-.564.664-.972 1.634-.972 2.62 0 .15.02.296.052.438.905.07 2.227-.552 2.89-1.363zM21.218 8.826h1.968v8.68h3.968v1.652h-5.936v-10.332zM28.468 13.99c0-1.765 1.546-2.616 4.102-2.742l1.625-.084v-.626c0-1.186-.996-1.52-2.196-1.52-1.222 0-2.26.418-2.26 1.652h-1.874c0-2.3 2.062-3.15 4.198-3.15 2.876 0 4.086 1.418 4.086 3.55v4.992c0 .646.062 1.146.292 1.604v.104h-2.022a2.38 2.38 0 0 1-.166-.894 3.09 3.09 0 0 1-2.458 1.102c-1.832 0-3.326-1.062-3.326-2.992zm5.728-.854l-1.418.084c-1.396.084-2.084.584-2.084 1.48 0 .96.938 1.44 2.022 1.44 1.48 0 2.272-1 2.272-2.064v-.94zM16.51 19.344l-2.604-7.792h2.084l1.46 5.126 1.562-5.126h1.94l-3.876 10.144h-1.96l4.272-10.144h-2.878z" />
        </svg>
    );
}

export function MadaIcon(props: React.ComponentProps<'svg'>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 16" width="50" height="16" {...props}>
            {/* A simple placeholder for Mada or text representation if preferred, using a generic "card" rect for now as precise simple paths are rare. Let's make a styled text label-like icon for Mada to be safe or a generic card. */}
            {/* Actually, user asked for "high-quality", I should try to make it look like Mada logo text which is basically 'mada' */}
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="12" fontWeight="bold" fill="currentColor">mada</text>
            <rect x="0.5" y="0.5" width="49" height="15" rx="2" stroke="currentColor" fill="none" />
        </svg>
    )
}
