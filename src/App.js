import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.scss";
import { db } from "./firebase";
import Profile from "./components/Profile/";
import Projects from "./components/Projects/";
import Skills from "./components/Skills/";
import Work from "./components/Work/";
import Education from "./components/Education/";
import { CircularProgress } from "@material-ui/core/";
import {
  COLLECTION_PROFILE,
  COLLECTION_PROJECT,
  COLLECTION_WORK,
  COLLECTION_EDUCATION,
  COLLECTION_SKILLS,
} from "./constants/collections";
import {
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
    await db
      .collection(COLLECTION_PROJECT)
      .where("projectType", "==", "client")
      .onSnapshot((snapshot) => {
        const clientProjects = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        this.setState({ projects_client: clientProjects });
      });

    await db
      .collection(COLLECTION_PROJECT)
      .where("projectType", "==", "personal")
      .onSnapshot((snapshot) => {
        const personalProjects = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.setState({ projects_personal: personalProjects, loaded: true });
      });
    // WORK EXPERIENCE
    await db.collection(COLLECTION_WORK).onSnapshot((snapshot) => {
      const work = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      this.setState({ work: work });
    });
    // EDUCATION
    await db.collection(COLLECTION_EDUCATION).onSnapshot((snapshot) => {
      const education = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      this.setState({ education: education });
    });

    // SKILLS
    await db
      .collection(COLLECTION_SKILLS)
      .where("type", "==", "cms")
      .onSnapshot((snapshot) => {
        const skills = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.setState({ skill_cms: skills });
      });
    await db
      .collection(COLLECTION_SKILLS)
      .where("type", "==", "database")
      .onSnapshot((snapshot) => {
        const skills = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.setState({ skill_database: skills });
      });
    await db
      .collection(COLLECTION_SKILLS)
      .where("type", "==", "design")
      .onSnapshot((snapshot) => {
        const skills = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.setState({ skill_design: skills });
      });
    await db
      .collection(COLLECTION_SKILLS)
      .where("type", "==", "essential")
      .onSnapshot((snapshot) => {
        const skills = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.setState({ skill_essential: skills });
      });
    await db
      .collection(COLLECTION_SKILLS)
      .where("type", "==", "framework")
      .onSnapshot((snapshot) => {
        const skills = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.setState({ skill_framework: skills });
      });
    await db
      .collection(COLLECTION_SKILLS)
      .where("type", "==", "library")
      .onSnapshot((snapshot) => {
        const skills = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.setState({ skill_library: skills });
      });
    await db
      .collection(COLLECTION_SKILLS)
      .where("type", "==", "os")
      .onSnapshot((snapshot) => {
        const skills = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.setState({ skill_os: skills });
      });
    await db
      .collection(COLLECTION_SKILLS)
      .where("type", "==", "technical")
      .onSnapshot((snapshot) => {
        const skills = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.setState({ skill_technical: skills });
      });

    await db
      .collection(COLLECTION_SKILLS)
      .where("type", "==", "tools")
      .onSnapshot((snapshot) => {
        const skills = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.setState({ skill_tools: skills });
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

    if (loaded) {
      return (
        <div className="App">
          <Profile data={profile} />
          <Projects
            title={PROJECT_CLIENT_TITLE}
            subtitle={PROJECT_CLIENT_SUBTITLE}
            data={projects_client}
            getType="client"
          />
          <Projects
            title={PROJECT_PERSONAL_TITLE}
            subtitle={PROJECT_PERSONAL_SUBTITLE}
            data={projects_personal}
            getType="personal"
          />
          <Skills skillData={skillArray} />
          <Work data={work} />
          <Education data={education} />
        </div>
      );
    } else {
      return (
        <div className="loadscreen">
          <CircularProgress /> <h2>Loading</h2>
        </div>
      );
    }
  }
}

export default App;
