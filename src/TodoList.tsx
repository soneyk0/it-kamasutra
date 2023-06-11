import React, {FC, useRef} from 'react';
import TodoListHeader from "./TodoListHeader";
import AddTaskForm from "./AddTaskForm";
import TasksList from "./TasksList";
import {FilterValueType} from "./App";
import {Simulate} from "react-dom/test-utils";
import addTaskForm from "./AddTaskForm";


type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask:(taskId:string)=>void
    changeFilter: (nextFilerValue: FilterValueType)=> void
    addTask:(title:string)=>void
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
const TodoList: FC<TodoListPropsType> = (props) => {



    return (
        <div className={'todoList'}>
            <TodoListHeader title={props.title}/>
            <AddTaskForm  addTask={props.addTask}/>
            <TasksList tasks={props.tasks} removeTask={props.removeTask} changeFilter={props.changeFilter}/>

        </div>


    )
        ;
};

export default TodoList;