import React, { Component } from 'react';
import EditForm from '../edit-form/edit-form'
import {Button, Modal} from "reactstrap";
import {faPencilAlt} from '@fortawesome/fontawesome-free-solid';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class EditModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shouldOpen: false
        };

        this.toggle = this.toggle.bind(this);
        this.updateCardContainer = this.updateCardContainer.bind(this);
    }

    updateCardContainer(event) {
        this.props.onSaveValue({...event});
        this.toggle();
    }

    toggle() {
        this.setState(oldState => ({
            shouldOpen: !oldState.shouldOpen
        }));
    }

    render() {
        return (
            <div>
                <Button color="link" onClick={this.toggle}>
                    <FontAwesomeIcon className="pencil-style" icon={faPencilAlt}/>
                </Button>
                <Modal isOpen={this.state.shouldOpen} toggle={this.toggle}>
                    <EditForm onSubmitForm={this.updateCardContainer} shouldClose={this.toggle} {...this.props}/>
                </Modal>
            </div>
        );
    }
}

export default EditModal;