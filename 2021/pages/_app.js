import 'semantic-ui-css/semantic.min.css';
import '../styles/globals.css';
import '../styles/Home.module.css'
import { useState } from 'react';
import { useMediaQuery } from '../src/utility/mediaQueries';
import { isMobileScreen } from '../src/utility';
import { THEMES } from '../src/constants/rahulworld';

function MyApp({ Component, pageProps }) {
  const [width, height] = useMediaQuery();
  const isMobile = isMobileScreen(width);
  const [theme, setTheme] = useState({
    selectedTheme: THEMES[0],
    themes: THEMES,
  });
  const setSelectedTheme = (theme) => {
    setTheme({
      selectedTheme: theme,
      themes: THEMES,
    });
  };
  // return width < 769 ? <h1>Loading</h1> : <Component {...pageProps} />
  return (
    <Component
      {...pageProps}
      isMobile={isMobile}
      theme={theme}
      setTheme={setSelectedTheme}
      screenWidth={width}
      screenHeight={height}
    />
  );
}

export default MyApp;
