import type { AppProps } from 'next/app'

import { Provider } from 'react-redux'
import store from '../app/store'

import GlobalStyle from '../theme/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import theme from '../theme/theme'



function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </Provider>
    )
}

export default MyApp
