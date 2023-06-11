import React, {useState} from "react";
import {TaskType} from "./TodoList";
import {FilterValueType} from "./App";
import {faSquareXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type TasksListPropsType = {
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (nextFilerValue: FilterValueType)=> void
}



const TasksList = (props: TasksListPropsType) => {

    const tasks: Array<JSX.Element> = props.tasks.map((task: TaskType) => {
        const removeTask = () => props.removeTask(task.id)
        return (
            <li key={task.id} className={'tasks-list-item'}>
                <div className={'tasks-list-item'}>
                    <input type="checkbox" checked={task.isDone}/>
                    <span>{task.title}</span>
                </div>
                <button onClick={removeTask}><FontAwesomeIcon icon={faSquareXmark} /></button>
            </li>
        )
    })





    return (
        <div>
            <ul className={'tasks-list'}>
                {tasks}
            </ul>
            <div className={'btns-block'}>
                <button onClick={()=>props.changeFilter('all')}>All</button>
                <button onClick={()=>props.changeFilter('active')}>Active</button>
                <button onClick={()=>props.changeFilter('completed')}>Completed</button>
            </div>
        </div>
    )
}

export default TasksList;
