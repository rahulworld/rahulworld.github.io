import 'semantic-ui-css/semantic.min.css';
import '../styles/globals.css';
// import '../styles/Home.module.css';
import React, { useRef, useState, useEffect, Fragment, useMemo } from "react";
import { useRouter } from 'next/router';
import dynamic from "next/dynamic";
import { useMediaQuery } from '../src/utility/mediaQueries';
import { isMobileScreen } from '../src/utility';
import { THEMES } from '../src/constants/rahulworld';
import { Navbar, Sidebar, Content, Footer } from '../src/components/presentations';
import NavLinks from '../src/components/presentations/NavLinks';
import FooterLink from '../src/components/presentations/FooterLink';

let throttleTimeout = null;
let trottleWait = 500;

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [width, height] = useMediaQuery();
  const [hideOnScroll, setHideOnScroll] = useState(true)
  const rendersCount = useRef(0)
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
  const [prevY, setPrevY] = useState(0);

  const callBack = () => {
    const isShow = document.body.scrollTop < prevY;
    if (isShow !== hideOnScroll) setHideOnScroll(isShow)
    setPrevY(document.body.scrollTop)
    throttleTimeout = null
  }

  useEffect(() => {
    const handleScroll = () => {
      if (trottleWait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, trottleWait);
        }
      } else {
        callBack();
      }
    }
    document.body.addEventListener('scroll', handleScroll);
    return () => document.body.removeEventListener('scroll', handleScroll)
  })
  // return useMemo(
  //   () => (
  //     <Fragment>
  //       <Sidebar show={hideOnScroll}>
  //         <NavLinks />
  //       </Sidebar>
  //       <Content>
  //         <Component
  //           {...pageProps}
  //           isMobile={isMobile}
  //           theme={theme}
  //           setTheme={setSelectedTheme}
  //           screenWidth={width}
  //           screenHeight={height}
  //         />
  //       </Content>
  //       <Footer>
  //         {/* <b>RENDER COUNT: {++rendersCount.current}</b> */}
  //         <FooterLink />
  //       </Footer>
  //     </Fragment>
  //   ),
  //   [hideOnScroll, isMobile, setSelectedTheme])
  // return (
  //   <Fragment>
  //     <Sidebar show={hideOnScroll}>
  //       <NavLinks />
  //     </Sidebar>
  //     <Content>
  //       <Component
  //         {...pageProps}
  //         isMobile={isMobile}
  //         theme={theme}
  //         setTheme={setSelectedTheme}
  //         screenWidth={width}
  //         screenHeight={height}
  //       />
  //     </Content>
  //     <Footer>
  //       <b>RENDER COUNT: {++rendersCount.current}</b>
  //     </Footer>
  //   </Fragment>
  // )
  // console.log('router.pathname', router.pathname);
  // if (theme.selectedTheme === THEMES[0]) {
  if (router.pathname === "/") {
    return (<Component
      {...pageProps}
      isMobile={isMobile}
      theme={theme}
      setTheme={setSelectedTheme}
      screenWidth={width}
      screenHeight={height}
    />)
  }
  return (
    <Fragment>
      <Navbar show={hideOnScroll} >
        <NavLinks routeName={router.pathname} theme={theme} setSelectedTheme={setSelectedTheme} />
      </Navbar>
      <Content mt="45">
        <Component
          {...pageProps}
          isMobile={isMobile}
          theme={theme}
          setTheme={setSelectedTheme}
          screenWidth={width}
          screenHeight={height}
          routeName={router.pathname}
        />
      </Content>
      {/* <Footer>
        <b>RENDER COUNT: {++rendersCount.current}</b>
      </Footer> */}
    </Fragment>
  )
}

export default MyApp;
