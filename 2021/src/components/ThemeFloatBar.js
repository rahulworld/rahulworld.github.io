import React, { useRef, useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  Header,
  Segment,
  Icon,
  Grid,
  Flag,
  Label,
  Button,
  List,
  Sticky,
  Ref,
} from "semantic-ui-react";
import { THEMES } from "../../src/constants/rahulworld";

// const style = (
//   <style>
//     {`
//     @keyframes back-to-docs {
//         0% { transform: translateY(0); }
//         50% { transform: translateY(0.35em); }
//         100% { transform: translateY(0); }
//     }
//   `}
//   </style>
// );

// const FloatBar = ({ theme, setTheme = () => { } }) => (
//   <>
//     {style}
//     {theme !== THEMES[0] && (
//       <Link href="/">
//         <Button
//           icon="left arrow"
//           content="Theme 1"
//           target="_blank"
//         />
//       </Link>
//     )}
//     {theme !== THEMES[1] && (
//       <Link href="/theme2">
//         <Button
//           to='/theme2'
//           color="red"
//           icon="left arrow"
//           content="Theme 2"
//         />
//       </Link>
//     )}
//     {theme !== THEMES[2] && (
//       <Link href="/theme3">
//         <Button
//           to='/theme3'
//           icon="left arrow"
//           color="teal"
//           content="Theme 3"
//           target="_blank"
//         />
//       </Link>
//     )}
//   </>
// );

const FloatBar = ({ theme, setTheme = () => { } }) => (
  <div style={{zIndex: 100}}>
    <Button
      // icon="left arrow"
      content="Contact Me"
      color="red"
      target="_blank"
    />

    <Button
      // as={Link}
      to='/theme2'
      // onClick={() => setTheme(THEMES[1])}
      // color="teal"
      color="teal"
      // icon="left arrow"
      // content="Download Resume"
      content="Download"
    />
    {/* {theme !== THEMES[2] && (
      <Link href="/theme3">
        <Button
          // as={Link}
          to='/theme3'
          // onClick={() => setTheme(THEMES[2])}
          // icon="travel"
          icon="left arrow"
          color="teal"
          content="Theme 3"
          // secondary
          target="_blank"
        />
      </Link>
    )} */}
  </div>
);

export default FloatBar;