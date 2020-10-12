import React, { Component } from "react";
import "./App.scss";
import { db } from "./firebase";
import Projects from "./components/Projects2/";
import Main from "./components/Main/";
import Header from "./components/Header/";
import Skills from "./components/Skills2/";
import Work from "./components/Work2/";
import Footer from "./components/Footer/";
import Education from "./components/Education2/";
import Contact from "./components/Contact/";
// import { CircularProgress } from "@material-ui/core/";
import {
  COLLECTION_PROFILE,
  COLLECTION_PROJECT,
  COLLECTION_WORK,
  COLLECTION_EDUCATION,
  COLLECTION_SKILLS,
} from "./constants/collections";
import {
  TYPE_CLIENT,
  TYPE_PERSONAL,
  TYPE_ESSENTIAL,
  TYPE_CMS,
  TYPE_OS,
  TYPE_TOOL,
  TYPE_DB,
  TYPE_DESIGN,
  TYPE_FRAMEWORK,
  TYPE_LIBRARY,
  TYPE_TECHNICAL,
} from "./constants/types";
import {
  PROFILE_LOADING,
  PROJECT_CLIENT_TITLE,
  PROJECT_CLIENT_SUBTITLE,
  PROJECT_PERSONAL_TITLE,
  PROJECT_PERSONAL_SUBTITLE,
  SKILL_ESSENTIAL,
  SKILL_TECHNICAL,
  SKILL_FRAMEWORKS,
  SKILL_LIBRARIES,
  SKILL_DATABASES,
  SKILL_CMS,
  SKILL_OS,
  SKILL_TOOLS,
  SKILL_DESIGN,
} from "./constants/lang";

class App extends Component {
  constructor() {
    super();
    this.state = {
      profile: null,
      projects_client: null,
      projects_personal: null,
      work: null,
      education: null,
      skill_cms: null,
      skill_essential: null,
      skill_framework: null,
      skill_database: null,
      skill_design: null,
      skill_library: null,
      skill_os: null,
      skill_technical: null,
      skill_tools: null,
      loaded: false,
    };
  }
  async componentDidMount() {
    // PROFILE
    await db
      .collection(COLLECTION_PROFILE)
      .doc("main")
      .get()
      .then((docRef) => {
        this.setState({ profile: docRef.data() });
      })
      .catch((error) => {});

    // PROJECTS
    let clientProjects = [];
    let personalProjects = [];
    await db
      .collection(COLLECTION_PROJECT)
      .orderBy("order", "asc")
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          if (doc.data().projectType === TYPE_CLIENT) {
            clientProjects.push({
              id: doc.id,
              ...doc.data(),
            });
          } else if (doc.data().projectType === TYPE_PERSONAL) {
            personalProjects.push({
              id: doc.id,
              ...doc.data(),
            });
          }
          return null;
        });

        this.setState({
          projects_client: clientProjects,
          projects_personal: personalProjects,
          loaded: true,
        });
      });

    // WORK EXPERIENCE
    await db
      .collection(COLLECTION_WORK)
      .orderBy("startDate", "desc")
      .onSnapshot((snapshot) => {
        const work = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        this.setState({ work: work });
      });

    // EDUCATION
    await db
      .collection(COLLECTION_EDUCATION)
      .orderBy("endYear", "desc")
      .onSnapshot((snapshot) => {
        const education = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.setState({ education: education });
      });

    // SKILLS
    let essentialSkills = [];
    let cmsSkills = [];
    let osSkills = [];
    let toolSkills = [];
    let databaseSkills = [];
    let designSkills = [];
    let frameworkSkills = [];
    let librarySkills = [];
    let technicalSkills = [];

    await db
      .collection(COLLECTION_SKILLS)
      .orderBy("name", "asc")
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          if (doc.data().type === TYPE_ESSENTIAL) {
            essentialSkills.push({
              id: doc.id,
              ...doc.data(),
            });
          } else if (doc.data().type === TYPE_CMS) {
            cmsSkills.push({
              id: doc.id,
              ...doc.data(),
            });
          } else if (doc.data().type === TYPE_OS) {
            osSkills.push({
              id: doc.id,
              ...doc.data(),
            });
          } else if (doc.data().type === TYPE_TOOL) {
            toolSkills.push({
              id: doc.id,
              ...doc.data(),
            });
          } else if (doc.data().type === TYPE_DB) {
            databaseSkills.push({
              id: doc.id,
              ...doc.data(),
            });
          } else if (doc.data().type === TYPE_DESIGN) {
            designSkills.push({
              id: doc.id,
              ...doc.data(),
            });
          } else if (doc.data().type === TYPE_FRAMEWORK) {
            frameworkSkills.push({
              id: doc.id,
              ...doc.data(),
            });
          } else if (doc.data().type === TYPE_LIBRARY) {
            librarySkills.push({
              id: doc.id,
              ...doc.data(),
            });
          } else if (doc.data().type === TYPE_TECHNICAL) {
            technicalSkills.push({
              id: doc.id,
              ...doc.data(),
            });
          }
          return null;
        });

        this.setState({
          skill_essential: essentialSkills,
          skill_cms: cmsSkills,
          skill_database: databaseSkills,
          skill_design: designSkills,
          skill_framework: frameworkSkills,
          skill_library: librarySkills,
          skill_os: osSkills,
          skill_technical: technicalSkills,
          skill_tools: toolSkills,
          loaded: true,
        });
      });
  }
  render() {
    const {
      work,
      education,
      profile,
      loaded,
      projects_client,
      projects_personal,
      skill_cms,
      skill_essential,
      skill_framework,
      skill_database,
      skill_design,
      skill_library,
      skill_os,
      skill_technical,
      skill_tools,
    } = this.state;

    const skillArray = [
      { title: SKILL_ESSENTIAL, data: skill_essential },
      { title: SKILL_TECHNICAL, data: skill_technical },
      { title: SKILL_FRAMEWORKS, data: skill_framework },
      { title: SKILL_LIBRARIES, data: skill_library },
      { title: SKILL_DATABASES, data: skill_database },
      { title: SKILL_CMS, data: skill_cms },
      { title: SKILL_OS, data: skill_os },
      { title: SKILL_TOOLS, data: skill_tools },
      { title: SKILL_DESIGN, data: skill_design },
    ];

    // RENDER
    if (loaded) {
      return (
        <div className="App">
          <Header />
          <Main data={profile} />
          <section id="portfolio">
            <Projects
              title={PROJECT_CLIENT_TITLE}
              subtitle={PROJECT_CLIENT_SUBTITLE}
              data={projects_client}
              getType={TYPE_CLIENT}
            />
            <Projects
              title={PROJECT_PERSONAL_TITLE}
              subtitle={PROJECT_PERSONAL_SUBTITLE}
              data={projects_personal}
              getType={TYPE_PERSONAL}
            />
          </section>
          <Skills skillData={skillArray} />
          <Work data={work} />
          <Education data={education} />
          <Contact data={profile} />
          <Footer data={profile} />
        </div>
      );
    } else {
      return (
        <div className="loadscreen">
          <h2>{PROFILE_LOADING}</h2>
        </div>
      );
    }
  }
}

export default App;
