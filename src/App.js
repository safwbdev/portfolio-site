import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { db } from "./firebase";

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
    const { work, loaded } = this.state;

    if (loaded) {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            {work &&
              work.map((data, index) => {
                return <li key={index}>{data.name}</li>;
              })}
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      );
    } else {
      return <h1>LOading</h1>;
    }
  }
}

export default App;
