import './edit-form.css';
import React, { Component } from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: props.img,
            title: props.title,
            description: props.description,
            stock: props.stock
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.shouldClose = this.shouldClose.bind(this);
    }

    handleSubmit(event) {
        const article = {
            id: this.props.id,
            ...this.state
        };

        this.props.onSubmitForm({...article});
        event.preventDefault();
    }

    shouldClose() {
        this.props.shouldClose();
    }

    handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit} className="p-3">
                <FormGroup>
                    <Label>Title</Label>
                    <Input type="text" name="title" value={this.state.title} placeholder="Set title" onChange={this.handleInputChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>Select</Label>
                    <Input type="select" name="img" value={this.state.img} id="imgSelect" onChange={this.handleInputChange}>
                        {this.props.collection.map(item => {
                            return (
                                <option key={item.id}>
                                    {item.img}
                                </option>
                            );
                        })}
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label>Stock</Label>
                    <Input type="number" name="stock" value={this.state.stock} placeholder="set Stock" onChange={this.handleInputChange}/>
                </FormGroup>
                <FormGroup>
                    <textarea className="fill-area" name="description" placeholder="set Description" value={this.state.description} onChange={this.handleInputChange}/>
                </FormGroup>
                <div className="d-flex justify-content-between p-3">
                    <Button type="button" color="secondary" onClick={this.shouldClose}>Close</Button>
                    <Button color="success">Save</Button>
                </div>
            </Form>
        );
    }
}

export default EditForm;

