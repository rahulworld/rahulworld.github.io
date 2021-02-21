import React, { Fragment } from 'react'
import Link from "next/link";
import { Menu } from 'semantic-ui-react';
import { THEMES } from "../../../src/constants/rahulworld";

// const NavLinks = () => (
//   <Fragment>
//     <Link href={`/`}>Theme 1</Link>
//     <div style={{border: '1px solid white', width: 30, marginTop: 10}} />
//     <Link href={`/theme2`}>Theme 2</Link>
//     <div style={{border: '1px solid white', width: 30, marginTop: 10}} />
//     <Link href={`/theme3`}>Theme 3</Link>
//     <div style={{border: '1px solid white', width: 30, marginTop: 10}} />
//     <Link href={`/theme4`}>Theme 4</Link>
//     <div style={{border: '1px solid white', width: 30, marginTop: 10}} />
//     <Link href={`/theme5`}>Theme 5</Link>
//   </Fragment>
// );

const NavLinks = ({ routeName, theme, setSelectedTheme }) => (
    <Fragment>
        {/* <Link href={`/`}><div style={{width: '50%', textAlign: 'center'}} onClick={() => setSelectedTheme(THEMES[0])}>Theme 1</div></Link> */}
        {/* <Link href={`/theme5`}><div style={{width: '50%', textAlign: 'center'}} onClick={() => setSelectedTheme(THEMES[5])}>Theme 2</div></Link> */}
        <Menu color={'teal'} inverted widths={5}>
            <Link href="/home">
                <Menu.Item
                    name='Home'
                    active={routeName === 'home'}
                    link={true}
                //   onClick={this.handleItemClick}
                />
            </Link>
            <Link href="/about">
                <Menu.Item
                    name='About Me'
                    active={routeName === 'about'}
                    to={"about"}
                    link={true}
                //   onClick={this.handleItemClick}
                />
            </Link>
            <Link href="/work">
                <Menu.Item
                    name='Work'
                    active={routeName === 'work'}
                //   onClick={this.handleItemClick}
                />
            </Link>
            <Link href="/projects">
                <Menu.Item
                    name='Projects'
                    active={routeName === 'projects'}
                //   onClick={this.handleItemClick}
                />
            </Link>
            <Link href="/gallery">
                <Menu.Item
                    name='Gallery'
                    active={routeName === 'gallery'}
                //   onClick={this.handleItemClick}
                />
            </Link>
        </Menu>
    </Fragment>
);
// const NavLinks = ({theme, setSelectedTheme}) => (
//   <Fragment>
//     {/* <Link href={`/`}><div style={{width: '50%', textAlign: 'center'}} onClick={() => setSelectedTheme(THEMES[0])}>Theme 1</div></Link> */}
//     {/* <Link href={`/theme5`}><div style={{width: '50%', textAlign: 'center'}} onClick={() => setSelectedTheme(THEMES[5])}>Theme 2</div></Link> */}
//     <Link href={`/home`}><div style={{width: '50%', textAlign: 'center'}} onClick={() => setSelectedTheme(THEMES[5])}>Home</div></Link>
//     <Link href={`/about`}><div style={{width: '50%', textAlign: 'center'}} onClick={() => setSelectedTheme(THEMES[5])}>About Me</div></Link>
//     <Link href={`/work`}><div style={{width: '50%', textAlign: 'center'}} onClick={() => setSelectedTheme(THEMES[5])}>Work</div></Link>
//     <Link href={`/projects`}><div style={{width: '50%', textAlign: 'center'}} onClick={() => setSelectedTheme(THEMES[5])}>My Projects</div></Link>
//     <Link href={`/gallery`}><div style={{width: '50%', textAlign: 'center'}} onClick={() => setSelectedTheme(THEMES[5])}>My Gallery</div></Link>
//   </Fragment>
// );

export default NavLinks;
