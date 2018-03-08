import {Button, Modal} from "reactstrap";
import EditForm from '../edit-form/edit-form'
import {faPlus, faPencilAlt} from '@fortawesome/fontawesome-free-solid';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';

class ArticleModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shouldOpen: false
        };

        this.callDelete = this.callDelete.bind(this);
        this.onAddNewCard = this.onAddNewCard.bind(this);
        this.toggle = this.toggle.bind(this);
        this.updateCardContainer = this.updateCardContainer.bind(this);
    }

    callDelete(event) {
        this.props.onArticleDelete({id: event.id});
        this.toggle();
    }

    onAddNewCard(event) {
        this.props.createCard({...event});
        this.toggle();
    }

    toggle() {
        this.setState(oldState => ({
            shouldOpen: !oldState.shouldOpen
        }));
    }

    updateCardContainer(event) {
        this.props.onSaveValue({...event});
        this.toggle();
    }

    render() {
        let openButton = null;
        let isEditing = this.props.type !== 'create';
        switch (this.props.type) {
            case 'create':
                openButton = <Button color="primary" onClick={this.toggle}>
                                <FontAwesomeIcon className="mr-1" icon={faPlus}/>
                                New
                            </Button>;
                break;
            default:
                openButton = <Button color="link" onClick={this.toggle}>
                                <FontAwesomeIcon className="pencil-style" icon={faPencilAlt}/>
                            </Button>;
                break;
        }
        return (
            <div>
                {openButton}
                <Modal isOpen={this.state.shouldOpen} toggle={this.toggle}>
                    <EditForm notifyDelete={this.callDelete}
                      onEditArticle={this.updateCardContainer}
                      onCreateArticle={this.onAddNewCard}
                      isEditing={isEditing}
                      shouldClose={this.toggle} {...this.props}/>
                </Modal>
            </div>
        );
    }
}

export default ArticleModal;