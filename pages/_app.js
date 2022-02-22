import GlobalStyle from '../src/theme/GlobalStyle';
import Footer from '../src/components/patterns/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
