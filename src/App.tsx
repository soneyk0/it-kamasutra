import React from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";

function App ()  {
    const title_1: string = 'What to learn'
    const tasks_1: Array<TaskType> = [
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "CSS", isDone: true},
        {id: 3, title: "JS/TS", isDone: false},
    ]
    const tasks_2: Array<TaskType> = [
        {id: 1, title: "MEAT", isDone: true},
        {id: 2, title: "CHEEPS", isDone: true},
        {id: 3, title: "BEER", isDone: true},
    ]

    return (
        <div className="App">
            <TodoList title={title_1} tasks={tasks_1}/>
            <TodoList title={title_1} tasks={tasks_2}/>
        </div>
    );
}


export default App;
