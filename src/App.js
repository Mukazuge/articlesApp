import './App.css';
import ArticleCard from "./components/card-component/article-card";
import logo from './logo.svg';
import mockArray from './mocks/mock-api-response'
import React, { Component } from 'react';
import ArticlesNavBar from "./components/navbar/articles-navbar";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: mockArray,
        };

        this.deleteArticle = this.deleteArticle.bind(this);
        this.onAddItem = this.onAddItem.bind(this);
        this.searchItem = (this.searchItem.bind(this));
        this.updateValues = this.updateValues.bind(this);
    }

    deleteArticle(event) {
        this.setState(oldState => ({
            articles: oldState.articles.filter(article => article.id !== event.id)
        }));
    }

    onAddItem(event) {
        const tempArray = this.state.articles;
        tempArray.unshift(event);

        this.setState({
            articles: tempArray
        });
    }

    searchItem(event) {
        const searchParam = event.param.trim().toLowerCase();
        // debounce search 300 ml
        setTimeout(() => {
            // reseting array
            this.setState({
                articles: mockArray
            });

            if (searchParam !== '') {
                this.setState(oldState => ({
                    articles: oldState.articles.filter(article => {
                        const title = article.title.toLowerCase();

                        return title.indexOf(searchParam) > -1;
                    })
                }));
            }
        }, 300);
    }

    updateValues(event) {
        const tempArray = this.state.articles;
        tempArray.forEach(item => {
            if (item.id === event.id) {
                item.description = event.description;
                item.img = event.img;
                item.title = event.title;
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
                    <h1 className="App-title">Articles App</h1>
                </header>
                <ArticlesNavBar searchArticle={this.searchItem} collection={this.state.articles} addItem={this.onAddItem}/>
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
                                    onDeleteItem={this.deleteArticle}
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
