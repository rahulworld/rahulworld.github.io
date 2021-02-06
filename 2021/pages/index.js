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
import { VictoryPie } from "victory-pie";
import { VictoryLabel, VictoryContainer } from "victory-core";
import BackgroundSlideshow from 'react-background-slideshow';
import styles from "../styles/Home.module.css";
import { RESUME_DATA, WEB_SCHEMA, COMMON } from "../src/constants/rahulworld";
import { IMAGES } from "../src/constants/images";
// import {isMobile} from '../src/utility';
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
  top: 0,
  right: 0,
  animation: "back-to-docs 1.5s ease-in-out infinite",
  zIndex: 20,
};

const style = (
  <style>
    {`
    @keyframes back-to-docs {
        0% { transform: translateY(0); }
        50% { transform: translateY(0.35em); }
        100% { transform: translateY(0); }
    }
  `}
  </style>
);

export default function Home(props) {
  const { isMobile, theme, setTheme, screenWidth, screenHeight } = props;

  const FloatBar = () => (
    <>
      {theme.selectedTheme !== THEMES[1] && (
        <Button
          // as={Link}
          // to='/layouts'
          onClick={() => setTheme(THEMES[1])}
          // color="teal"
          color="red"
          icon="left arrow"
          content="Theme 2"
        />
      )}
      {theme.selectedTheme !== THEMES[0] && (
        <Button
          // as={Link}
          // to='/layouts'
          onClick={() => setTheme(THEMES[0])}
          // icon="github"
          icon="left arrow"
          content="Theme 1"
          // secondary
          target="_blank"
        />
      )}
      {theme.selectedTheme !== THEMES[2] && (
        <Button
          // as={Link}
          // to='/layouts'
          onClick={() => setTheme(THEMES[2])}
          // icon="travel"
          icon="left arrow"
          color="teal"
          content="Theme 3"
          // secondary
          target="_blank"
        />
      )}
    </>
  );

  const SimpleTheme = () => (
    <>
      <div className="ui small circular image">
        {/* <Image
          src={RESUME_DATA.profile_image_url}
          alt={RESUME_DATA.name}
          width={500}
          height={500}
        /> */}
      </div>
      <h1 className={styles.title}>
        {RESUME_DATA.first_name}{" "}
        <a href={WEB_SCHEMA.common_links.main}>{RESUME_DATA.family_name}</a>
      </h1>
      {/* <p className={styles.description}>
          {RESUME_DATA.bio}
        </p> */}
      {/* <h2 className="ui header"><img src="/images/icons/school.png" className="ui image"/><div className="content">{RESUME_DATA.email}</div></h2> */}
      {/* <div className="ui header tiny"><i aria-hidden="true" className="mail icon"></i><div className="content">{RESUME_DATA.email}</div></div> */}
      {/* <div className="ui header tiny"><i aria-hidden="true" className="phone icon"></i><div className="content">{RESUME_DATA.mobile_no}</div></div> */}
      {/* <div className="ui header tiny">
          <Link href={RESUME_DATA.social_media_profiles.email.url}>
            <a><i aria-hidden="true" className="mail icon"></i></a>
          </Link>
        </div> */}
      <div className="ui header centered">
        <Label as="a" tag>
          Full Stack Developer
        </Label>
        <Label as="a" color="red" tag>
          Data Scientist
        </Label>
        <Label as="a" color="teal" tag>
          Citizen Scientist
        </Label>
      </div>
      <div className="ui header large centered">
        {/* <p className={styles.description}>
            <Flag name='in' className="ui large"/>{' '}{RESUME_DATA.bio}
          </p> */}
        <Link href={RESUME_DATA.social_media_profiles.email.url}>
          <a>
            <i aria-hidden="true" className="mail icon" />
          </a>
        </Link>
        <Link href={RESUME_DATA.social_media_profiles.github.url}>
          <a>
            <i aria-hidden="true" className="github icon" />
          </a>
        </Link>
        <Link href={RESUME_DATA.social_media_profiles.linked_in.url}>
          <a>
            <i aria-hidden="true" className="linkedin icon" />
          </a>
        </Link>
        <Link href={RESUME_DATA.social_media_profiles.behance.url}>
          <a>
            <i aria-hidden="true" className="behance square icon" />
          </a>
        </Link>
        <Link href={RESUME_DATA.social_media_profiles.twitter.url}>
          <a>
            <i aria-hidden="true" className="twitter square icon" />
          </a>
        </Link>
        <Link href={RESUME_DATA.social_media_profiles.stack_over_flow.url}>
          <a>
            <i aria-hidden="true" className="stack overflow icon" />
          </a>
        </Link>
        <Link href={RESUME_DATA.social_media_profiles.facebook.url}>
          <a>
            <i aria-hidden="true" className="facebook square icon" />
          </a>
        </Link>
        <Link href={RESUME_DATA.social_media_profiles.instagram.url}>
          <a>
            <i aria-hidden="true" className="instagram icon" />
          </a>
        </Link>
        <p>
          <Link href={RESUME_DATA.social_media_profiles.email.url}>
            <a>
              {/* <Label as='a' size="big" content='rahulnitsxr@gmail.com' icon='mail' /> */}
              {/* <Label size="medium" color="">
                <Icon name='mail' /> rahulnitsxr@gmail.com
              </Label> */}
              {/* <Button as='div' labelPosition='right'>
                <Button basic color='blue'>
                  <Icon name='mail' />
                </Button>
                <Label size="medium" as='a' basic color='blue' pointing='left'>
                  rahulnitsxr@gmail.com
                </Label>
              </Button> */}
            </a>
          </Link>
        </p>
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

      <div className={styles.grid}>
        <Link href="/about">
          <a className={styles.segments_margin_bottom}>
            <Segment raised className={styles.card}>
              <Label as="a" size="big" color="red" ribbon>
                {COMMON.about.title}
              </Label>
              <br />
              <br />
              <div className={styles.discription_bottom_margin_16}>
                {RESUME_DATA.machine_bio1}
              </div>
              <div className={styles.discription_bottom_margin_16}>
                {RESUME_DATA.machine_bio2}
              </div>
              <Header textAlign="right" size="medium">
                {COMMON.about.next} &rarr;
              </Header>
            </Segment>
          </a>
        </Link>
        <Link href="/work">
          <a className={styles.segments_margin_bottom}>
            <Segment raised className={styles.card}>
              <Label as="a" size="big" color="teal" ribbon="right">
                {COMMON.work.title}
              </Label>
              <Header textAlign="right" size="medium">
                {COMMON.work.period}
              </Header>
              <Header textAlign="right" size="large">
                {COMMON.work.designation}
              </Header>
              <div className={styles.discription_bottom_margin_16}>
                {COMMON.work.description}
              </div>
              <Header className="right floated" size="medium">
                {COMMON.work.next} &rarr;
              </Header>
              <div style={{ marginBottom: 50, width: "100%" }} />
            </Segment>
          </a>
        </Link>
        <Link href="/skills">
          <a className={styles.segments_margin_bottom}>
            <Segment raised className={styles.card}>
              <Label as="a" size="big" color="red" ribbon>
                {COMMON.skills.title}
              </Label>
              {/* <VictoryPie
                  standalone={false}
                  // width={400}
                  height={200}
                  data={[
                    { x: 1, y: 120 }, { x: 2, y: 150 }, { x: 3, y: 75 }
                  ]}
                  innerRadius={0} labelRadius={100}
                  style={{ labels: { fontSize: 20, fill: "white" } }}
                />
                <VictoryLabel
                  textAnchor="middle"
                  style={{ fontSize: 20 }}
                  x={100} y={100}
                  text="Pie!"
                /> */}
              {/* <svg viewBox="0 0 400 400"> */}
              {/* <svg height={450}> */}
              <div style={{ width: isMobile ? "100%" : 400 }}>
                <VictoryPie
                  // width={180}
                  height={isMobile ? 350 : 250}
                  // standalone={false}
                  // animate={{
                  //   duration: 2000
                  // }}
                  startAngle={90}
                  endAngle={450}
                  colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
                  data={[
                    { x: "React Native", y: 40 },
                    { x: "React", y: 30 },
                    { x: "Ruby on rails", y: 30 },
                    { x: "Python", y: 20 },
                  ]}
                  style={{ labels: { fontSize: isMobile ? 20 : 10 } }}
                  labelComponent={<VictoryLabel angle={-20} />}
                />
              </div>
              {/* </svg> */}
              <Header textAlign="right" size="medium">
                {COMMON.skills.next} &rarr;
              </Header>
            </Segment>
          </a>
        </Link>
        <Link href="/educations">
          <a className={styles.segments_margin_bottom}>
            <Segment raised className={styles.card}>
              <Label as="a" size="big" color="teal" ribbon="right">
                {COMMON.education.title}
              </Label>
              <br />
              <Header textAlign="right" size="medium">
                {COMMON.education.period}
              </Header>
              <Header textAlign="right" size="large">
                {COMMON.education.designation}
              </Header>
              <Header textAlign="right" size="medium">
                {COMMON.education.description}
              </Header>
              {/* <div className={styles.discription_bottom_margin_16}>{COMMON.education.description}</div> */}
              <Header textAlign="right" size="medium">
                {COMMON.education.next} &rarr;
              </Header>
            </Segment>
          </a>
        </Link>
        <Link href="/projects">
          <a className={styles.segments_margin_bottom}>
            <Segment raised className={styles.card}>
              <Label as="a" size="big" color="red" ribbon>
                {COMMON.projects.title}
              </Label>
              <br />
              <br />
              <List animated>
                <List.Item>
                  <List.Icon
                    name="github"
                    size="large"
                    verticalAlign="middle"
                  />
                  <List.Content>
                    <List.Header as="a">Semantic-Org/Semantic-UI</List.Header>
                    <List.Description as="a">
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
              <Header textAlign="right" size="medium">
                {COMMON.projects.next} &rarr;
              </Header>
            </Segment>
          </a>
        </Link>
        <Link href="/hobbies">
          <a className={styles.segments_margin_bottom}>
            <Segment raised className={styles.card}>
              <Label as="a" size="big" color="teal" ribbon="right">
                {COMMON.hobbies.title}
              </Label>
              <div style={{ height: 120, marginTop: 15 }}>
                <List animated verticalAlign="middle" floated="right">
                  {RESUME_DATA.hobbies.map((hobby) => (
                    <List.Item key={hobby}>
                      <List.Icon
                        name="travel"
                        size="large"
                        verticalAlign="middle"
                      />
                      <List.Content>
                        <List.Header>{hobby}</List.Header>
                      </List.Content>
                    </List.Item>
                  ))}
                </List>
              </div>
              <Header textAlign="right" size="medium">
                {COMMON.hobbies.next} &rarr;
              </Header>
            </Segment>
          </a>
        </Link>
      </div>
      <div style={isMobile ? docsButtonStyle : topFloatStyle}>
        <FloatBar />
      </div>
    </>
  );

  const ImageTheme = () => {
    return (
      <>
        <BackgroundSlideshow
          images={RESUME_DATA.profile_background}
          animationDelay={1500}
        />
        <div
          style={
            !isMobile
              ? {
                  zIndex: 10,
                  justifyContent: 'center',
                  overflowY: 'auto',
                  width: '100%',
                }
              : {
                  zIndex: 10,
                  justifyContent: 'center',
                  overflowY: 'auto',
                }
          }
        >
          <div
            className="ui small circular image"
            // style={!isMobile ? { display: 'flex', justifyContent: 'center', width: '100%' } : { display: 'flex', justifyContent: 'center' }}
            style={{display: 'flex', justifyContent: 'center', width: '100%'}}
          >
            {/* <Image
              src={RESUME_DATA.profile_image_url}
              alt={RESUME_DATA.name}
              width={150}
              height={150}
            /> */}
          </div>
          <h1 className={styles.title}>
            {RESUME_DATA.first_name}{" "}
            <a href={WEB_SCHEMA.common_links.main}>{RESUME_DATA.family_name}</a>
          </h1>
          {/* <p className={styles.description}>
          {RESUME_DATA.bio}
        </p> */}
          {/* <h2 className="ui header"><img src="/images/icons/school.png" className="ui image"/><div className="content">{RESUME_DATA.email}</div></h2> */}
          {/* <div className="ui header tiny"><i aria-hidden="true" className="mail icon"></i><div className="content">{RESUME_DATA.email}</div></div> */}
          {/* <div className="ui header tiny"><i aria-hidden="true" className="phone icon"></i><div className="content">{RESUME_DATA.mobile_no}</div></div> */}
          {/* <div className="ui header tiny">
          <Link href={RESUME_DATA.social_media_profiles.email.url}>
            <a><i aria-hidden="true" className="mail icon"></i></a>
          </Link>
        </div> */}
          <div className="ui header centered">
            <Label as="a" tag>
              Full Stack Developer
            </Label>
            <Label as="a" color="red" tag>
              Data Scientist
            </Label>
            <Label as="a" color="teal" tag>
              Citizen Scientist
            </Label>
          </div>
          <div className="ui header large centered">
            {/* <p className={styles.description}>
            <Flag name='in' className="ui large"/>{' '}{RESUME_DATA.bio}
          </p> */}
            <Link href={RESUME_DATA.social_media_profiles.email.url}>
              <a>
                <i aria-hidden="true" className="mail icon" />
              </a>
            </Link>
            <Link href={RESUME_DATA.social_media_profiles.github.url}>
              <a>
                <i aria-hidden="true" className="github icon" />
              </a>
            </Link>
            <Link href={RESUME_DATA.social_media_profiles.linked_in.url}>
              <a>
                <i aria-hidden="true" className="linkedin icon" />
              </a>
            </Link>
            <Link href={RESUME_DATA.social_media_profiles.behance.url}>
              <a>
                <i aria-hidden="true" className="behance square icon" />
              </a>
            </Link>
            <Link href={RESUME_DATA.social_media_profiles.twitter.url}>
              <a>
                <i aria-hidden="true" className="twitter square icon" />
              </a>
            </Link>
            <Link href={RESUME_DATA.social_media_profiles.stack_over_flow.url}>
              <a>
                <i aria-hidden="true" className="stack overflow icon" />
              </a>
            </Link>
            <Link href={RESUME_DATA.social_media_profiles.facebook.url}>
              <a>
                <i aria-hidden="true" className="facebook square icon" />
              </a>
            </Link>
            <Link href={RESUME_DATA.social_media_profiles.instagram.url}>
              <a>
                <i aria-hidden="true" className="instagram icon" />
              </a>
            </Link>
            <p>
              <Link href={RESUME_DATA.social_media_profiles.email.url}>
                <a>
                  {/* <Label as='a' size="big" content='rahulnitsxr@gmail.com' icon='mail' /> */}
                  {/* <Label size="medium" color="">
                <Icon name='mail' /> rahulnitsxr@gmail.com
              </Label> */}
                  {/* <Button as='div' labelPosition='right'>
                <Button basic color='blue'>
                  <Icon name='mail' />
                </Button>
                <Label size="medium" as='a' basic color='blue' pointing='left'>
                  rahulnitsxr@gmail.com
                </Label>
              </Button> */}
                </a>
              </Link>
            </p>
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

          <div
            className={styles.grid}
            style={
              !isMobile
                ? { display: 'flex', marginLeft: 'auto', marginRight: 'auto' }
                : { marginLeft: '5%' }
            }
          >
            <Link href="/about">
              <a className={styles.segments_margin_bottom}>
                <Segment raised className={styles.card}>
                  <Label as="a" size="big" color="red" ribbon>
                    {COMMON.about.title}
                  </Label>
                  <br />
                  <br />
                  <div className={styles.discription_bottom_margin_16}>
                    {RESUME_DATA.machine_bio1}
                  </div>
                  <div className={styles.discription_bottom_margin_16}>
                    {RESUME_DATA.machine_bio2}
                  </div>
                  <Header textAlign="right" size="medium">
                    {COMMON.about.next} &rarr;
                  </Header>
                </Segment>
              </a>
            </Link>
            <Link href="/work">
              <a className={styles.segments_margin_bottom}>
                <Segment raised className={styles.card}>
                  <Label as="a" size="big" color="teal" ribbon="right">
                    {COMMON.work.title}
                  </Label>
                  <Header textAlign="right" size="medium">
                    {COMMON.work.period}
                  </Header>
                  <Header textAlign="right" size="large">
                    {COMMON.work.designation}
                  </Header>
                  <div className={styles.discription_bottom_margin_16}>
                    {COMMON.work.description}
                  </div>
                  <Header className="right floated" size="medium">
                    {COMMON.work.next} &rarr;
                  </Header>
                  <div style={{ marginBottom: 50, width: "100%" }} />
                </Segment>
              </a>
            </Link>
            <Link href="/skills">
              <a className={styles.segments_margin_bottom}>
                <Segment raised className={styles.card}>
                  <Label as="a" size="big" color="red" ribbon>
                    {COMMON.skills.title}
                  </Label>
                  {/* <VictoryPie
                  standalone={false}
                  // width={400}
                  height={200}
                  data={[
                    { x: 1, y: 120 }, { x: 2, y: 150 }, { x: 3, y: 75 }
                  ]}
                  innerRadius={0} labelRadius={100}
                  style={{ labels: { fontSize: 20, fill: "white" } }}
                />
                <VictoryLabel
                  textAnchor="middle"
                  style={{ fontSize: 20 }}
                  x={100} y={100}
                  text="Pie!"
                /> */}
                  {/* <svg viewBox="0 0 400 400"> */}
                  {/* <svg height={450}> */}
                  <div style={{ width: isMobile ? "100%" : 400 }}>
                    <VictoryPie
                      // width={180}
                      height={isMobile ? 350 : 250}
                      // standalone={false}
                      // animate={{
                      //   duration: 2000
                      // }}
                      startAngle={90}
                      endAngle={450}
                      colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy']}
                      data={[
                        { x: "React Native", y: 40 },
                        { x: "React", y: 30 },
                        { x: "Ruby on rails", y: 30 },
                        { x: "Python", y: 20 },
                      ]}
                      style={{ labels: { fontSize: isMobile ? 20 : 10 } }}
                      labelComponent={<VictoryLabel angle={-20} />}
                    />
                  </div>
                  {/* </svg> */}
                  <Header textAlign="right" size="medium">
                    {COMMON.skills.next} &rarr;
                  </Header>
                </Segment>
              </a>
            </Link>
            <Link href="/educations">
              <a className={styles.segments_margin_bottom}>
                <Segment raised className={styles.card}>
                  <Label as="a" size="big" color="teal" ribbon="right">
                    {COMMON.education.title}
                  </Label>
                  <br />
                  <Header textAlign="right" size="medium">
                    {COMMON.education.period}
                  </Header>
                  <Header textAlign="right" size="large">
                    {COMMON.education.designation}
                  </Header>
                  <Header textAlign="right" size="medium">
                    {COMMON.education.description}
                  </Header>
                  {/* <div className={styles.discription_bottom_margin_16}>{COMMON.education.description}</div> */}
                  <Header textAlign="right" size="medium">
                    {COMMON.education.next} &rarr;
                  </Header>
                </Segment>
              </a>
            </Link>
            <Link href="/projects">
              <a className={styles.segments_margin_bottom}>
                <Segment raised className={styles.card}>
                  <Label as="a" size="big" color="red" ribbon>
                    {COMMON.projects.title}
                  </Label>
                  <br />
                  <br />
                  <List animated>
                    <List.Item>
                      <List.Icon
                        name="github"
                        size="large"
                        verticalAlign="middle"
                      />
                      <List.Content>
                        <List.Header as="a">
                          Semantic-Org/Semantic-UI
                        </List.Header>
                        <List.Description as="a">
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
                  <Header textAlign="right" size="medium">
                    {COMMON.projects.next} &rarr;
                  </Header>
                </Segment>
              </a>
            </Link>
            <Link href="/hobbies">
              <a className={styles.segments_margin_bottom}>
                <Segment raised className={styles.card}>
                  <Label as="a" size="big" color="teal" ribbon="right">
                    {COMMON.hobbies.title}
                  </Label>
                  <div style={{ height: 120, marginTop: 15 }}>
                    <List animated verticalAlign="middle" floated="right">
                      {RESUME_DATA.hobbies.map((hobby) => (
                        <List.Item key={hobby}>
                          <List.Icon
                            name="travel"
                            size="large"
                            verticalAlign="middle"
                          />
                          <List.Content>
                            <List.Header>{hobby}</List.Header>
                          </List.Content>
                        </List.Item>
                      ))}
                    </List>
                  </div>
                  <Header textAlign="right" size="medium">
                    {COMMON.hobbies.next} &rarr;
                  </Header>
                </Segment>
              </a>
            </Link>
          </div>
        </div>
        <div style={isMobile ? docsButtonStyle : topFloatStyle}>
          <FloatBar />
        </div>
      </>
    );
  };

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
        {/* <main className={styles.main}> */}
        {style}
        {theme.selectedTheme === THEMES[0] && <SimpleTheme />}
        {theme.selectedTheme === THEMES[1] && <ImageTheme />}
        {theme.selectedTheme === THEMES[2] && <SimpleTheme />}
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  );
}
