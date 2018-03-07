import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ArticleCard from "./components/card-component/card-container";

const ipsum = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.`;
class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <ArticleCard
                    title="Woman T-Shirt"
                    description={ipsum}
                    status="danger"
                    statusText="Out of stock"/>
            </div>
        );
    }
}

export default App;
