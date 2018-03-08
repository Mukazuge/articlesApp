import './article-card.css';
import {Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap';
import ArticleModal from "../article-modal/article-modal";
import {faCircle} from '@fortawesome/fontawesome-free-solid';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';

class ArticleCard extends Component {
    constructor(props) {
        super(props);

        this.changeValues = this.changeValues.bind(this);
        this.removeArticleFromList = this.removeArticleFromList.bind(this);
    }

    changeValues(event) {
        this.props.updateAppData({...event});
    }

    removeArticleFromList(event) {
        this.props.onDeleteItem({id: event.id});
    }

    render () {
        const status = this.props.stock > 0 ? this.props.stock > 50 ? 'success' : 'warning' : 'danger';
        return (
            <div className="small-card">
                <Card className="m-2 card-shadow">
                    <CardImg
                        src={this.props.img}
                        alt="Card image cap"/>
                    <CardBody>
                        <CardTitle className="d-flex align-items-center justify-content-between">
                            {this.props.title}
                            <ArticleModal type="edit"
                              onArticleDelete={this.removeArticleFromList} onSaveValue={this.changeValues} {...this.props}/>
                        </CardTitle>
                        <CardText>
                            <FontAwesomeIcon className={'mr-1 text-' + status } icon={faCircle}/>
                            {this.props.stock > 0 ? this.props.stock + ' in stock' : 'Out of stock'}
                        </CardText>
                        <CardText className="description-break">{this.props.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default ArticleCard;
