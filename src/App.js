import './App.css';
import ArticleCard from "./components/card-component/card-container";
import logo from './logo.svg';
import mockArray from './mocks/mock-api-response'
import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <body className="container-fluid">
                    <section className=" d-flex flex-wrap justify-content-center body-content">
                        { mockArray.map(response => {
                            return (
                                <ArticleCard
                                    key={response.id}
                                    img={response.img}
                                    title={response.title}
                                    description={response.description}
                                    status={response.status}
                                    statusText={response.statusText}/>
                            )}
                        )}
                    </section>
                </body>
            </div>
        );
    }
}

export default App;
