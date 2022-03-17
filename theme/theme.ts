// Sizing guide is based on greek alphabet
// From largest unit to smallest:

// alpha
// beta
// gamma
// delta
// epsilon
// zeta
// eta
// theta
// iota
// kappa
// omega = different from others, opposite of psi
// psi = different from others, opposite of omega

const theme = {
    font: {
        size: {
            alpha: '1.5em',
            beta: '1.25em',
            gamma: '1em',
            delta: '0.75em',
        },
        weight: {
            alpha: '600',
            beta: '400',
        },
        color: {
            // from black to white
            alpha: '#000000',
            beta: '#212529',
            gamma: '#343A40',
            delta: '#495057',
            epsilon: '#6C757D',
            zeta: '#ADB5BD',
            eta: '#CED4DA',
            theta: '#E9ECEF',
            iota: '#F8F9FA',
            kappa: '#FFFFFF',

        },
        breakpoint: {
            alpha: '1920px',
            beta: '1440px',
            gamma: '1200px',
            delta: '1024px',
            epsilon: '768px ',
            zeta: '600px',
            eta: '480px',
        },
    }
}



declare module 'styled-components' {
    type Theme = typeof theme;
    export interface DefaultTheme extends Theme {}
}

export default theme;
