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


const FooterLink = ({ theme, setTheme = () => { } }) => (
    <div style={{ width: '100%'}}>
        <Button.Group widths='3'>
            <Button inverted>Contact Me</Button>
            <div style={{ marginLeft: 10, marginRight: 10 }} />
            <Button inverted>Download Pdf</Button>
        </Button.Group>
    </div>
);

export default FooterLink;