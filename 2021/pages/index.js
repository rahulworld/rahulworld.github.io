import styles from "../styles/Home.module.css";
import React, { useRef, useState, useEffect, Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Typist from 'react-typist';
import { Parallax, ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import {Button, List} from "semantic-ui-react";
import { VictoryPie } from "victory-pie";
import { VictoryLabel, VictoryContainer } from "victory-core";
import { RESUME_DATA, WEB_SCHEMA, COMMON } from "../src/constants/rahulworld";
import { IMAGES } from "../src/constants/images";
import { THEMES } from "../src/constants/rahulworld";

const docsButtonStyle = {
  position: "fixed",
  margin: "2em",
  bottom: 0,
  right: 0,
  animation: "back-to-docs 1.5s ease-in-out infinite",
  zIndex: 20,
};
const topFloatStyle = {
  position: "fixed",
  margin: "2em",
  bottom: 0,
  right: 0,
  animation: "back-to-docs 1.5s ease-in-out infinite",
  zIndex: 20,
};

let interval = null;

const redirectLink = "/home";

export default function Home(props) {
  const { isMobile, theme, setTheme, screenWidth, screenHeight } = props;
  const [renderMsg, setRenderMsg] = useState(false);
  const [renderCount, setRenderCount] = useState(0);
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }
  useEffect(() => {
    setTheme(THEMES[0])
    interval = setInterval(() => {
      if (!renderCount && document.body.offsetHeight + document.body.scrollTop !== document.body.scrollHeight) {
        scrollToBottom();
      }
    }, 1000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [])
  useEffect(() => {
    if (renderCount) {
      clearInterval(interval);
    }
  }, [renderCount]);
  return (
    <div className={styles.container}>
      <Head>
        <title>{WEB_SCHEMA.pages.home.title}</title>
        <link rel="icon" href={IMAGES.favicon} />
      </Head>
      <main
        className={styles.main}
        style={
          theme.selectedTheme === THEMES[1] && !isMobile
            ? { width: '100%' }
            : {}
        }
      >
        <Fragment>
          <div className="TypistExample">
            <Typist
              className="TypistExample-header"
              avgTypingDelay={120}
              startDelay={2000}
              cursor={{ hideWhenDone: true }}
              onTypingDone={() => { setRenderMsg(true) }}
            >
              <span style={{ fontSize: 18 }}>Hey, My Name is</span>
              <Typist.Delay ms={300} />
              <br />
              <span>Rahulworld</span>
              <Typist.Backspace count={5} delay={300} />
              {" "}Chauhan
              <Typist.Delay ms={300} />
            </Typist>
            <div className="TypistExample-content">
              {renderMsg ? (
                <Typist
                  className="TypistExample-message"
                  cursor={{ hideWhenDone: true }}
                  startDelay={2000}
                  onTypingDone={() => {
                    setRenderCount(1);
                  }}
                >
                  Full Stack Dev<Typist.Delay ms={500} />loper<Typist.Backspace count={5} delay={1000} />eloper,<Typist.Delay ms={1250} /><br/>  Citizen(Data) Science Enthusiast,
                  <Typist.Delay ms={1250} /><br/>  Open S<Typist.Delay ms={500} />orce
                  <Typist.Backspace count={4} delay={1000} />
                  <Typist.Delay ms={750} />ource Contributor
                  <Typist.Delay ms={1250} />
                  <br />
                  <span style={{color: "#22BAD9"}}><i aria-hidden="true" className="map marker alternate icon" style={{ color: "#22BAD9", marginRight: 10 }} />India</span>
                  <br />
                  <span><i aria-hidden="true" className="mail icon" style={{ color: "#22BAD9", marginRight: 10 }} /><a href={RESUME_DATA.social_media_profiles.email.url} className="flash">rahulnitsxr@gmail.com</a></span>
                  <br />
                  <span><i aria-hidden="true" className="download icon" style={{ color: "#22BAD9", marginRight: 10 }} /><a href={RESUME_DATA.social_media_profiles.email.url} className="flash">Resume</a></span>
                  <br />
                  <br />
                  <span style={{ fontSize: 16 }}>
                    <span style={{ fontSize: 16, marginRight: 10 }}>Find me at: </span>
                    <br />
                    <Typist.Delay ms={200} />
                    <Link href={RESUME_DATA.social_media_profiles.email.url}>
                      <a>
                        <i aria-hidden="true" className="mail large icon" style={{ color: "#22BAD9" }} />
                      </a>
                    </Link>
                    <Typist.Delay ms={200} />
                    <Link href={RESUME_DATA.social_media_profiles.github.url}>
                      <a>
                        <i aria-hidden="true" className="github large icon" style={{ color: "#22BAD9" }} />
                      </a>
                    </Link>
                    <Typist.Delay ms={200} />
                    <Link href={RESUME_DATA.social_media_profiles.linked_in.url}>
                      <a>
                        <i aria-hidden="true" className="linkedin large icon" style={{ color: "#22BAD9" }} />
                      </a>
                    </Link>
                    <Typist.Delay ms={200} />
                    <Link href={RESUME_DATA.social_media_profiles.behance.url}>
                      <a>
                        <i aria-hidden="true" className="behance square large icon" style={{ color: "#22BAD9" }} />
                      </a>
                    </Link>
                    <Typist.Delay ms={200} />
                    <Link href={RESUME_DATA.social_media_profiles.twitter.url}>
                      <a>
                        <i aria-hidden="true" className="twitter square large icon" style={{ color: "#22BAD9" }} />
                      </a>
                    </Link>
                    <Typist.Delay ms={200} />
                    <Link href={RESUME_DATA.social_media_profiles.stack_over_flow.url}>
                      <a>
                        <i aria-hidden="true" className="stack overflow large icon" style={{ color: "#22BAD9" }} />
                      </a>
                    </Link>
                    <Typist.Delay ms={200} />
                    <Link href={RESUME_DATA.social_media_profiles.facebook.url}>
                      <a>
                        <i aria-hidden="true" className="facebook square large icon" style={{ color: "#22BAD9" }} />
                      </a>
                    </Link>
                    <Typist.Delay ms={200} />
                    <Link href={RESUME_DATA.social_media_profiles.instagram.url}>
                      <a>
                        <i aria-hidden="true" className="instagram large icon" style={{ color: "#22BAD9" }} />
                      </a>
                    </Link>
                  </span>
                  <br />
                  <Typist.Delay ms={200} />
                  <br />
                  <span className={styles.card_title}>{COMMON.about.title}</span>
                  <br />
                  <span>{RESUME_DATA.machine_bio1}</span>
                  <br />
                  <br />
                  <span>{RESUME_DATA.machine_bio2}</span>
                  <br />
                  <div className={styles.card_link}><a href={redirectLink} className="link-flash">{COMMON.work.next}</a><i aria-hidden="true" className="chevron right icon" style={{ color: "#22BAD9", marginLeft: 10 }} /></div>
                  <Typist.Delay ms={200} />
                  <br />
                  <span className={styles.card_title}>{COMMON.work.title}</span>
                  <br />
                  <span>{COMMON.work.period}</span>
                  <br />
                  <span>{COMMON.work.designation}</span>
                  <br />
                  <span>{COMMON.work.description}</span>
                  <br />
                  <div className={styles.card_link}><a href={redirectLink} className="link-flash">{COMMON.work.next}</a><i aria-hidden="true" className="chevron right icon" style={{ color: "#22BAD9", marginLeft: 10 }} /></div>
                  <Typist.Delay ms={200} />
                  <br />
                  <span className={styles.card_title}>{COMMON.skills.title}</span>
                  <br />
                  <div style={{ width: isMobile ? "100%" : 400 }}>
                    <VictoryPie
                      height={isMobile ? 350 : 250}
                      startAngle={90}
                      endAngle={450}
                      colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
                      data={[
                        { x: "React Native", y: 40 },
                        { x: "React", y: 30 },
                        { x: "Ruby on rails", y: 30 },
                        { x: "Python", y: 20 },
                      ]}
                      style={{ labels: { fontSize: isMobile ? 20 : 10, fill: 'hotpink' } }}
                      labelComponent={<VictoryLabel angle={-20} />}
                    />
                  </div>
                  <br />
                  <div className={styles.card_link}><a href={redirectLink} className="link-flash">{COMMON.skills.next}</a><i aria-hidden="true" className="chevron right icon" style={{ color: "#22BAD9", marginLeft: 10 }} /></div>
                  <Typist.Delay ms={200} />
                  <br />
                  <span className={styles.card_title}>{COMMON.education.title}</span>
                  <br />
                  <span>{COMMON.education.period}</span>
                  <br />
                  <span>{COMMON.education.designation}</span>
                  <br />
                  <div className={styles.card_link}><a href={redirectLink} className="link-flash">{COMMON.education.next}</a><i aria-hidden="true" className="chevron right icon" style={{ color: "#22BAD9", marginLeft: 10 }} /></div>
                  <Typist.Delay ms={200} />
                  <br />
                  <span className={styles.card_title}>{COMMON.hobbies.title}</span>
                  <List animated verticalAlign="middle">
                    {RESUME_DATA.hobbies.map((hobby) => (
                      <List.Item key={hobby} color="hotpink">
                        <List.Icon
                          name="travel"
                          size="large"
                          inverted
                          verticalAlign="middle"
                        />
                        <List.Content color="hotpink">
                          <div className={styles.card_description}>
                            {hobby}
                          </div>
                          {/* <List.Header color="hotpink">{hobby}</List.Header> */}
                        </List.Content>
                      </List.Item>
                    ))}
                  </List>
                  <div className={styles.card_link}><a href={redirectLink} className="link-flash">{COMMON.hobbies.next}</a><i aria-hidden="true" className="chevron right icon" style={{ color: "#22BAD9", marginLeft: 10 }} /></div>
                </Typist>
              ) : null}
            </div>

          </div>
          {/* <List >
          <List.Item icon='marker' content='Mumbai, India' />
          <List.Item
            icon='mail'
            content={<a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>}
          />
        </List> */}
          {/* <div className={styles.contact_description}>
          <i className="icons"><i aria-hidden="true" className="circle notch big loading icon"></i><i aria-hidden="true" className="mail icon"></i></i>
          {RESUME_DATA.email}
        </div> */}
          {/* <Grid columns={1} width={16} centered>
          <Grid.Row>
            <i className="icons"><i aria-hidden="true" className="circle notch big loading icon"></i><i aria-hidden="true" className="mail icon"></i></i>
              <div className="content">{RESUME_DATA.email}</div>
          </Grid.Row>
          <Grid.Row>
            <i className="icons"><i aria-hidden="true" className="circle notch big loading icon"></i><i aria-hidden="true" className="mail icon"></i></i>
              <div className="content">{RESUME_DATA.email}</div>
          </Grid.Row>
        </Grid> */}

          {/* <code className={styles.code}>{RESUME_DATA.machine_bio}</code> */}
          {/* <ParallaxProvider> */}
          {/* <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
          <Image src={RESUME_DATA.profile_background[0]} width={500} height={500} />
        </Parallax> */}
          {/* <ParallaxBanner
          className="your-class"
          layers={[
            {
              image: RESUME_DATA.profile_background[0],
              amount: 0.1,
            },
            {
              image: RESUME_DATA.profile_background[3],
              amount: 0.2,
            },
          ]}
          style={{
            height: '500px',
          }}
        >
          <h1>Banner Children</h1>
        </ParallaxBanner> */}
          {/* </ParallaxProvider> */}
          <div className={styles.grid}>

            {/* <Link href="/projects">
              <div className={styles.segments_margin_bottom}>
                <div className={styles.card_border}>
                  <div className={styles.card_title}>{COMMON.projects.title}</div>
                  <List animated>
                    <List.Item>
                      <List.Icon
                        name="github"
                        size="large"
                        verticalAlign="middle"
                      />
                      <List.Content>
                      <div className={styles.card_description}>Semantic-Org/Semantic-UI</div>
                        <List.Description as="a" color="white">
                          Updated 10 mins ago
                    </List.Description>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon
                        name="github"
                        size="large"
                        verticalAlign="middle"
                      />
                      <List.Content>
                        <List.Header as="a">
                          Semantic-Org/Semantic-UI-Docs
                    </List.Header>
                        <List.Description as="a">
                          Updated 22 mins ago
                    </List.Description>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon
                        name="github"
                        size="large"
                        verticalAlign="middle"
                      />
                      <List.Content>
                        <List.Header as="a">
                          Semantic-Org/Semantic-UI-Meteor
                    </List.Header>
                        <List.Description as="a">
                          Updated 34 mins ago
                    </List.Description>
                      </List.Content>
                    </List.Item>
                  </List>
                  <div className={styles.card_link}><a href={RESUME_DATA.social_media_profiles.email.url} className="link-flash">{COMMON.projects.next}</a><i aria-hidden="true" className="chevron right icon" style={{ color: "#22BAD9", marginLeft: 10 }} /></div>
                </div>
              </div>
            </Link> */}

          </div>
          <div style={isMobile ? docsButtonStyle : topFloatStyle}>
            {!renderCount ?
              (<Link href={redirectLink}>
                <Button
                  content="Skip"
                  color="red"
                  target="_blank"
                />
              </Link>) :
              (<Link href={redirectLink}>
                <Button
                  color="teal"
                  content="Next"
                />
              </Link>)
            }
            {/* <FloatBar theme={THEMES[0]} setTheme={setTheme} /> */}
          </div>
          <div ref={messagesEndRef} style={{ float: "left", clear: "both" }} />
        </Fragment>
      </main>
    </div>
  );
}
