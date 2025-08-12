export const theme = {
    extend: {
        colors: {
            blue: {
                200: 'hsl(193, 38%, 86%)',
                600: 'hsl(217, 19%, 38%)',
                900: 'hsl(217, 19%, 24%)',
                950: 'hsl(218, 23%, 16%)',
            },
            green: {
                300: 'hsl(150, 100%, 66%)',
                200: 'hsl(150, 100%, 80%)',
                100: 'hsl(150, 100%, 90%)',
            },
            dropShadow: {
                'green-200': '0 4px 6px hsl(150, 100%, 80%)', // green-200 with opacity
                'green-300': '0 4px 6px hsl(150, 100%, 66%)', // green-300 with opacity},
            },
        },
        fontFamily: {
            manrope: ['Manrope', 'sans-serif'],
        },
        fontSize: {
            quote: '28px',
        },
        screens: {
            mobile: '375px',
            desktop: '1440px',
        },
        fontWeight: {
            extrabold: 800,
        },
    },
};