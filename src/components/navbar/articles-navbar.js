import './articles-nav.css';
import ArticleModal from '../article-modal/article-modal';
import {faSearch} from '@fortawesome/fontawesome-free-solid';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {Input, InputGroup, InputGroupAddon, Nav, Navbar} from "reactstrap";
import React, {Component} from 'react';

class ArticlesNavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            param: ''
        };

        this.addNewArticle = this.addNewArticle.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    addNewArticle(event) {
        this.props.addItem({...event});
    }

    onSearch(event) {
        this.setState({
            param: event.target.value
        }, () => {
            this.props.searchArticle({...this.state});
        });
    }


    render() {
        const newArticle = {
            id: 'random_id_n', // TODO suppose to be auto generated from api
            description: '',
            img: '',
            title: '',
            stock: 0,
            collection: this.props.collection
        };

        return (
            <Navbar color="faded" light expand="md">
                <Nav navbar className="w-100">
                    <ArticleModal type="create" {...newArticle} createCard={this.addNewArticle}/>
                    <InputGroup className="ml-2">
                        <InputGroupAddon
                            className="input-icon p-1 d-flex justify-content-center align-items-center"
                            addonType="prepend">
                            <FontAwesomeIcon icon={faSearch}/>
                        </InputGroupAddon>
                        <Input type="Text" placeholder="Search..." value={this.state.param} onChange={this.onSearch}/>
                    </InputGroup>
                </Nav>
            </Navbar>
        );
    }
}

export default ArticlesNavBar;