import './App.css';
import ArticleCard from "./components/card-component/card-container";
import logo from './logo.svg';
import mockArray from './mocks/mock-api-response'
import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: mockArray
        };

        this.updateValues = this.updateValues.bind(this);
    }

    updateValues(event) {
        console.log('updating values: ', event);
        const tempArray = this.state.articles;
        tempArray.forEach(item => {
            if (item.id === event.id) {
                item.img = event.img;
                item.title = event.title;
                item.description = event.description;
                item.stock = event.stock;
            }
        });

        this.setState({...tempArray});
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div className="container-fluid">
                    <section className=" d-flex flex-wrap justify-content-center body-content">
                        { this.state.articles.map(article => {
                            return (
                                <ArticleCard
                                    key={article.id}
                                    id={article.id}
                                    img={article.img}
                                    title={article.title}
                                    description={article.description}
                                    stock={article.stock}
                                    collection={this.state.articles}
                                    updateAppData={this.updateValues}
                                />
                            )}
                        )}
                    </section>
                </div>
            </div>
        );
    }
}

export default App;
