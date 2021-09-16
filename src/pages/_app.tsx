import React from 'react';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Component {...pageProps} />
      <style jsx global>{`
        body { font-family: 'Montserrat', sans-serif; }
      `}</style>
    </React.Fragment>
  );
}

export default MyApp;
