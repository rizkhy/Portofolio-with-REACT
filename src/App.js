import React, { Component } from 'react';
import './App.css';
import { Layout, Drawer, Navigation, Content, Header } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">My Portofolio</Link>} scroll>
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/project">Project</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">My Portofolio</Link>}>
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/project">Project</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main/>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
