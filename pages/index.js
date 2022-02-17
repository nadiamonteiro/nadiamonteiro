import Head from 'next/head';
import styles from '../styles/Home.module.css'
import HoverBox from "../components/HoverBox";
import NavBar from "../components/NavBar/NavBar";

export default function Home() {
  return (
      <div>
        <Head>
          <title>NADIA</title>
        </Head>
        <main>
          <NavBar/>
          <div className="container">
            <div>
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                  SKILLS
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                  LANGUAGES
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                  FRAMEWORKS
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                  TOOLS
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                  DESIGN
                </div>
              </div>
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4"/>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                  JavaScript
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                  ReactJs
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                  Git
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                  Prototyping
                </div>
              </div>
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4"/>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                  HTML
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                  NextJs
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                  GitHub
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                  Wireframing
                </div>
              </div>
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4"/>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                  CSS
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2"/>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                  BitBucket
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                  User Testing
                </div>
              </div>
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4"/>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                  SQL
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2"/>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                  Chrome DevTools
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                  Figma
                </div>
              </div>
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4"/>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2"/>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2"/>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2"/>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                  Adobe XD
                </div>
              </div>
            </div>
            <div>
              <div className="row">
                <HoverBox img="/Logo.PNG"/>
              </div>
            </div>
          </div>


        </main>
      </div>
  )
}
