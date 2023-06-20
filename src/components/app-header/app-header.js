import React from 'react';
import './app-header.css';

const AppHeader = ({toDo, done}) => {
    return (
        <div className="myHeader">
            <h1>Todo List</h1>
        </div>
    );
};

export default AppHeader;