import React, { Component } from "react";
//import Card from "./components/Card";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Layout from "./components/Layout";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Layout />
      </Wrapper>
    );
  }
}



export default App;