import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        });
    };

    render() {
        return (
            <form className="itemAddForm"
                  onSubmit={this.onSubmit}>

                <input type="text"
                       className="itemAddInput"
                       onChange={this.onLabelChange}
                       placeholder="What needs to be done"
                       value={this.state.label} />
                <button
                    className="buttonAdd">
                    Add Item
                </button>
            </form>
        );
    }
}