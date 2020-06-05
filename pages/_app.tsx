import '../styles.css'
import { AppProps } from 'next/app'
import { store } from '../store/index'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>)
}

export default MyApp