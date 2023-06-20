import React, { Component } from 'react';

import AppHeader from '../app-header';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('first item')
        ]
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newArray
            };
        });
    };

    addItem = (text) => {
        const newItem = this.createTodoItem(text);

        this.setState(({ todoData }) => {
            const newArr = [
                ...todoData,
                newItem
            ];

            return {
                todoData: newArr
            };
        });

    };

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);

        const oldItem = arr[idx];
        const newItem = {...oldItem,
            [propName]: !oldItem[propName]};

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    }

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        });
    };

    render() {

        const { todoData } = this.state;

        return (
            <div className="appMain">
                <AppHeader />

                <TodoList
                    todos={todoData}
                    onDeleted={ this.deleteItem }
                    onToggleImportant={this.onToggleImportant}
                />

                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        );
    }
};