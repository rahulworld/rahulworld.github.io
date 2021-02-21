import Head from 'next/head'
import styles from '../styles/work.module.css';
import { Button, Card, Image } from 'semantic-ui-react';

export default function Work() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Work||rahulworld</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.card_title}>
          Hey, My Name is Rahul Chauhan.
        </h2>

        <p className={styles.card_title_text}>
          I started my journey by designing marrige invitation cards in <strong>CoralDraw</strong> in my hometown. I have overall 6 Year experiences in Development with learning New Edge Technology (Citizen Science, Data Science, Blockchain and cloud) and 12 Years in Graphics Design.
        </p>
        <code className={styles.code}>
          while (true) :<br/>
          &nbsp;&nbsp;if life === true :<br />
          &nbsp;&nbsp;&nbsp;&nbsp;code()<br />
          &nbsp;&nbsp;&nbsp;&nbsp;desing()<br />
          &nbsp;&nbsp;&nbsp;&nbsp;travelling()<br />
          &nbsp;&nbsp;&nbsp;&nbsp;opensource()<br />
          &nbsp;&nbsp;else :<br />
          &nbsp;&nbsp;&nbsp;&nbsp;break<br />
        </code>
        <h3 className={styles.card_title}>Profession Experiences</h3>
        <Card fluid>
          <Card.Content>
            <Image
              floated='left'
              size='mini'
              src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
            />
            <Card.Header>Software Engineer @ Ideaboard</Card.Header>
            <Card.Meta>June 2018 - Feb 2020</Card.Meta>
            <Card.Description>
              Developed dynamic survey builder, SS0(single sign on) in Ruby on rails.
            </Card.Description>
            <Card.Description>
              Developed React Native/Redux mobile application having real time personalised students performance and statistics reports, search tool, sync and push-notification using FCM.
            </Card.Description>
            <Card.Description>
              Developed ReactJS app having personalised student performance dashboard, teacher-classroom dashboard, automated assignments creation tool, dynamic survey builder, single sign on.
            </Card.Description>
            <Card.Description>
              <strong>Tech:</strong> Data Analysis, Computer Vision, Ruby on Rails, React Native / Redux, ReactJS, PostgreSQL, Sidekiq.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
              <div className="link_flash">
                For more Info
              </div>
            </Card.Content>
        </Card>
        <h3 className={styles.card_title}>Open Source Mentorship</h3>
        <Card fluid>
          <Card.Content>
            <Image
              floated='left'
              size='mini'
              src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
            />
            {/* <Card.Header floated='right'>Friends of Elliot</Card.Header> */}
            <Card.Header>Google Summer of Code 2020 Admin @ OSGeo</Card.Header>
            <Card.Meta>Feb 2020 - August 2020</Card.Meta>
            <Card.Description>
                The primarily resposibility is to connect open source community(students) and organisation mentors.
              </Card.Description>
            {/* <Card.Description>
              <strong>Used:</strong> Tornado(Python web framework and asynchronous networking library), PostgreSQL, Pint, postgresql-unit.
            </Card.Description> */}
          </Card.Content>
          <Card.Content extra>
              <div className="link_flash">
                For more Info
              </div>
            </Card.Content>
        </Card>
        <h3 className={styles.card_title}>Open Source Contribution and Internships</h3>
        <Card fluid>
          <Card.Content>
            <Image
              floated='left'
              size='mini'
              src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
            />
            {/* <Card.Header floated='right'>Friends of Elliot</Card.Header> */}
            <Card.Header>Google Summer of Code 2018 Student Developer Intern @ istSOS3(OSGeo)</Card.Header>
            <Card.Meta>May 2018 - August 2018</Card.Meta>
            <Card.Description>
              <strong>Support of Unit Of Measure conversion in istSOS3:</strong> The aim of my project primarily is to add plugins in istSOS3 for unit of measure conversion. The user can convert unit in another specified unit using plugins. For Unit of measure conversion in istSOS3 we added postgresql-unit and pint libraries which has a powerful feature of unit conversion along with many unit conversion specified functions instantly and all types operations supports to istsos3 data like add, subtraction, multiplication and division with magnitude and units.
              </Card.Description>
            <Card.Description>
              <strong>Tools:</strong> Tornado(Python web framework and asynchronous networking library), PostgreSQL, Pint, postgresql-unit.
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
            <Image
              floated='left'
              size='mini'
              src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
            />
            <Card.Header>Google Summer of Code 2017 Student Developer Intern @ istSOS(OSGeo)</Card.Header>
            <Card.Meta>May 2018 - August 2018</Card.Meta>
            <Card.Description>
                <strong>Data analysis and statastical tool suit:</strong> istsos2 provides easily manage your sensor network and distribute your data in a standard way. which is be used to automate the creation of statisticate documents using OAT(Observation analysis tool) and harvesting the data from an istSOS server.
              </Card.Description>
              <Card.Description>
                <strong>Tools:</strong> ExtJS, Dygraph.js, D3.js, Data analysis, Python, PostgreSQL, Pandas, Numpy, Scipy.
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
            <Image
              floated='left'
              size='mini'
              src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
            />
            <Card.Header>Research Intern @ Indian Institute of Science, Banglore</Card.Header>
            <Card.Meta>Dec 2016 - Jan 2017</Card.Meta>
            <Card.Description>
                <strong>Data Fusion of hyperspectral and panachromatic images:</strong>  satellite sensors provide mainly two types of images: spatially high informative data and spectrally high informative data. pan sharpening is one kind of data fusion become very wide spread method which populate the spectral band information with the influence of high spatial information.
              </Card.Description>
              <Card.Description>
                <strong>Tools:</strong> Satellite images(Chandrayan), Fusion Algorithm, Java.
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
            <Image
              floated='left'
              size='mini'
              src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
            />
            <Card.Header>Software Engineer Intern @ Smokey (Startup), Banglore</Card.Header>
            <Card.Meta>Dec 2015 - Jan 2016</Card.Meta>
            <Card.Description>
            Worked on location based services application which provide services at any location near services provider and also made friend module.
              </Card.Description>
              <Card.Description>
                <strong>Tools:</strong> Android, Mysql, Google map.
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
