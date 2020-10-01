import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { db } from "./firebase";
import Profile from "./components/Profile/";
import Projects from "./components/Projects/";
import Skills from "./components/Skills/";
import Work from "./components/Work/";
import Education from "./components/Education/";

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
      .collection("profile")
      .doc("main")
      .get()
      .then((docRef) => {
        this.setState({ profile: docRef.data() });
      })
      .catch((error) => {});

    // PROJECTS
    await db
      .collection("projects")
      .where("projectType", "==", "client")
      .onSnapshot((snapshot) => {
        const clientProjects = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        this.setState({ projects_client: clientProjects, loaded: true });
      });

    await db
      .collection("projects")
      .where("projectType", "==", "personal")
      .onSnapshot((snapshot) => {
        const personalProjects = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.setState({ projects_personal: personalProjects, loaded: true });
      });

    // WORK EXPERIENCE
    await db.collection("work").onSnapshot((snapshot) => {
      const work = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      this.setState({ work: work, loaded: true });
    });
    // EDUCATION
    await db.collection("education").onSnapshot((snapshot) => {
      const education = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      this.setState({ education: education, loaded: true });
    });

    // SKILLS
    await db
      .collection("skills")
      .where("type", "==", "cms")
      .onSnapshot((snapshot) => {
        const skills = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.setState({ skill_cms: skills, loaded: true });
      });
    await db
      .collection("skills")
      .where("type", "==", "database")
      .onSnapshot((snapshot) => {
        const skills = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.setState({ skill_database: skills, loaded: true });
      });
    await db
      .collection("skills")
      .where("type", "==", "design")
      .onSnapshot((snapshot) => {
        const skills = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.setState({ skill_design: skills, loaded: true });
      });
    await db
      .collection("skills")
      .where("type", "==", "essential")
      .onSnapshot((snapshot) => {
        const skills = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.setState({ skill_essential: skills, loaded: true });
      });
    await db
      .collection("skills")
      .where("type", "==", "framework")
      .onSnapshot((snapshot) => {
        const skills = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.setState({ skill_framework: skills, loaded: true });
      });
    await db
      .collection("skills")
      .where("type", "==", "library")
      .onSnapshot((snapshot) => {
        const skills = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.setState({ skill_library: skills, loaded: true });
      });
    await db
      .collection("skills")
      .where("type", "==", "os")
      .onSnapshot((snapshot) => {
        const skills = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.setState({ skill_os: skills, loaded: true });
      });
    await db
      .collection("skills")
      .where("type", "==", "technical")
      .onSnapshot((snapshot) => {
        const skills = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.setState({ skill_technical: skills, loaded: true });
      });

    await db
      .collection("skills")
      .where("type", "==", "tools")
      .onSnapshot((snapshot) => {
        const skills = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.setState({ skill_tools: skills, loaded: true });
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
      { title: "Essentials", data: skill_essential },
      { title: "Technical", data: skill_technical },
      { title: "Frameworks", data: skill_framework },
      { title: "Libraries", data: skill_library },
      { title: "Database", data: skill_database },
      { title: "Content Management Systems", data: skill_cms },
      { title: "Operating Systems", data: skill_os },
      { title: "Tools", data: skill_tools },
      { title: "Design", data: skill_design },
    ];

    if (loaded) {
      return (
        <div className="App">
          <Profile data={profile} />
          <Projects
            title="Client Projects"
            subtitle="insert subtitle here"
            data={projects_client}
          />
          <Projects
            title="Personal Projects"
            subtitle="insert second subtitle here"
            data={projects_personal}
          />
          {skillArray &&
            skillArray.map(({ title, data }, index) => {
              return <Skills key={index} title={title} data={data} />;
            })}
          <Work data={work} />
          <Education data={education} />
        </div>
      );
    } else {
      return <h1>Loading</h1>;
    }
  }
}

export default App;
