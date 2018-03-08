import './edit-form.css';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import React, { Component } from 'react';

class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.description,
            img: props.img,
            title: props.title,
            stock: props.stock
        };
    }

    checkFormValues = () => {
        const description = this.state.description.trim() !== '';
        const img = this.state.img !== 'Select image';
        const title = this.state.title.trim() !== '';
        const stock = this.state.stock > -1;

        return description && img && title && stock;
    };

    handleSubmit = (event) => {
        let article = null;
        if (this.props.isEditing === true) {
            article = {
                id: this.props.id,
                ...this.state
            };

            this.props.onEditArticle({...article});
        } else {
            article = {
                id: this.props.id,
                ...this.state
            };

            this.props.onCreateArticle({...article});
        }

        event.preventDefault();
    };

    handleInputChange = (event) => {

        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    };

    onDelete = () => {
        this.props.notifyDelete({id: this.props.id});
    };

    shouldClose = () => {
        this.props.shouldClose();
    };

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
                        <option defaultValue>Select image</option>
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
                    <Button type="button" color="danger" onClick={this.onDelete}>Delete</Button>
                    <Button disabled={!this.checkFormValues()} color="success">Save</Button>
                </div>
            </Form>
        );
    }
}

export default EditForm;

