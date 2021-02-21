import Head from 'next/head';
import styles from '../styles/projects.module.css';
import { Button, Card, Image } from 'semantic-ui-react';

export default function Projects() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projects||rahulworld</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.card_title}>
          Hey, My Name is Rahul Chauhan.
        </h2>

        <p className={styles.card_title_text}>
        I have done Web and Android Development in the past. As a matter of fact I am efficient in languages like Java, Python, JavaScript and C/C++. Along with these, I have also worked on the frameworks like Flask, EXTJS, Node.JS, Angular,js.
          {/* I started my journey by designing marrige invitation cards in <strong>CoralDraw</strong> in my hometown. I have overall 6 Year experiences in Development with learning New Edge Technology (Citizen Science, Data Science, Blockchain and cloud) and 12 Years in Graphics Design. */}
        </p>
        {/* <code className={styles.code}>
          while (true) :<br/>
          &nbsp;&nbsp;if life === true :<br />
          &nbsp;&nbsp;&nbsp;&nbsp;code()<br />
          &nbsp;&nbsp;&nbsp;&nbsp;desing()<br />
          &nbsp;&nbsp;&nbsp;&nbsp;travelling()<br />
          &nbsp;&nbsp;&nbsp;&nbsp;opensource()<br />
          &nbsp;&nbsp;else :<br />
          &nbsp;&nbsp;&nbsp;&nbsp;break<br />
        </code> */}
        <h3 className={styles.card_title}>Projects</h3>
        <Card fluid>
          <Card.Content>
            <Card.Header>Digisign</Card.Header>
            <Card.Meta>June 2018 - Feb 2020</Card.Meta>
            <Card.Description>
            This is an app to digitize smart contracts. An Idea to use blockchain to create smart contracts.
            </Card.Description>
            <Card.Description>
              <strong>Tech:</strong> Blockchain, Flask, javascript.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
              <div className="link_flash">
                For more Info
              </div>
            </Card.Content>
        </Card>
        <Card fluid>
          <Card.Content>
            <Card.Header>Url-Shorter</Card.Header>
            <Card.Meta>June 2018 - Feb 2020</Card.Meta>
            <Card.Description>
              A Chrome extension tool to set URL shorter and aliases.
            </Card.Description>
            <Card.Description>
              <strong>Tech:</strong> Javascript.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
              <div className="link_flash">
                For more Info
              </div>
            </Card.Content>
        </Card>
        <Card fluid>
          <Card.Content>
            <Card.Header>Voice Calculator</Card.Header>
            <Card.Meta>June 2018 - Feb 2020</Card.Meta>
            <Card.Description>
              It is an android application in which user can compute calculation by user’s voice.
            </Card.Description>
            <Card.Description>
              <strong>Tech:</strong> Android.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
              <div className="link_flash">
                For more Info
              </div>
            </Card.Content>
        </Card>
        <Card fluid>
          <Card.Content>
            <Card.Header>Hadoop Prototype</Card.Header>
            <Card.Meta>June 2018 - Feb 2020</Card.Meta>
            <Card.Description>
              Initial empty hadoop prototype for eclipse.
            </Card.Description>
            <Card.Description>
              <strong>Tech:</strong> Java, Hadoop Libraries.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
              <div className="link_flash">
                For more Info
              </div>
            </Card.Content>
        </Card>
        <Card fluid>
          <Card.Content>
            <Card.Header>Result Portal and Document Sharing</Card.Header>
            <Card.Meta>June 2018 - Feb 2020</Card.Meta>
            <Card.Description>
              Created android app result can upload using CSV file.
            </Card.Description>
            <Card.Description>
              <strong>Tech:</strong> Android, PHP.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
              <div className="link_flash">
                For more Info
              </div>
            </Card.Content>
        </Card>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  )
}
