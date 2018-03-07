import React from 'react';
import './card-container.css';
import {Button, Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap';
import {faPencilAlt, faCircle} from '@fortawesome/fontawesome-free-solid';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const ArticleCard = (props) => {
    return (
        <div className="small-card">
            <Card className="m-2 card-shadow">
                <CardImg
                    src={props.img}
                    alt="Card image cap"/>
                <CardBody>
                    <CardTitle className="d-flex align-items-center justify-content-between">
                        {props.title}
                        <Button color="link">
                            <FontAwesomeIcon className="pencil-style" icon={faPencilAlt}/>
                        </Button>
                    </CardTitle>
                    <CardText>
                        <FontAwesomeIcon className={'mr-1 text-' + props.status} icon={faCircle}/>
                        {props.statusText}
                    </CardText>
                    <CardText>{props.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
};

export default ArticleCard;
