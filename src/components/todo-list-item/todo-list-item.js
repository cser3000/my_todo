import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {

    render() {

        const { label, onDeleted,
            onToggleImportant,
            important } = this.props;

        let classNames = 'todoListItem';

        if (important) {
            classNames += ' important';
        }

        return (
            <div className={classNames}>
                <span
                    className="todoListItemText">
                  {label}
                </span>

                <button type="button"
                        className="buttonImportant"
                        onClick={onToggleImportant}>
                    выделить
                </button>

                <button type="button"
                        className="buttonDelete"
                        onClick={onDeleted}>
                  удалить
                </button>
            </div>
        );
    };
}