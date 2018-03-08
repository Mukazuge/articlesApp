import './App.css';
import ArticleCard from "./components/card-component/article-card";
import ArticlesNavBar from "./components/navbar/articles-navbar";
import logo from './logo.svg';
import mockArray from './mocks/mock-api-response'
import React, { Component } from 'react';
import {ToastContainer, toast} from "react-toastify";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { articles: mockArray };
    }

    deleteArticle = (event) => {
        this.setState(oldState => ({
            articles: oldState.articles.filter(article => article.id !== event.id)
        }), () => {
            toast.error("Article Delete Success", {
                position: toast.POSITION.TOP_RIGHT
            });
        });

    };

    onAddItem = (event) => {
        const tempArray = this.state.articles;
        tempArray.unshift(event);

        this.setState({...tempArray}, () => {
            toast.success("New Article Added", {
                position: toast.POSITION.TOP_RIGHT
            });
        });
    };

    searchItem = (event) => {
        const searchParam = event.param.trim().toLowerCase();
        // debounce search 300 ms
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
    };

    updateValues = (event) => {
        const tempArray = this.state.articles;
        tempArray.forEach(item => {
            if (item.id === event.id) {
                item.description = event.description;
                item.img = event.img;
                item.title = event.title;
                item.stock = event.stock;
            }
        });

        this.setState({...tempArray}, () => {
            toast.success("Article Update Success", {
                position: toast.POSITION.TOP_RIGHT
            });
        });
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Articles App</h1>
                </header>
                <ToastContainer autoClose={2000} />
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
