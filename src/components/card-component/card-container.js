import React, { Component } from 'react';
import './card-container.css';
import {Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap';
import {faCircle} from '@fortawesome/fontawesome-free-solid';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import EditModal from "../edit-modal/edit-modal";

class ArticleCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shouldOpenModal: false
            // should trigger modal and send form data to modal
        };

        this.changeValues = this.changeValues.bind(this);
    }

    changeValues(event) {
        this.props.updateAppData({...event});
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
                            <EditModal onSaveValue={this.changeValues} {...this.props}/>
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
