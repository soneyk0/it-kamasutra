import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";
import {v1} from 'uuid'

export type FilterValueType = 'all' | 'active' | 'completed'


function App() {
    const title: string = 'What to learn'
    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "HTML", isDone: true},
        {id: v1(), title: "CSS", isDone: true},
        {id: v1(), title: "JS/TS", isDone: false},

    ])

    const [filter, setFilter] = useState<FilterValueType>('all')

    const changeFilter = (nextFilerValue: FilterValueType)=>{
        setFilter(nextFilerValue)
    }


    const removeTask = (taskId: string) => {
        setTasks(
            tasks.filter((t: TaskType) => t.id !== taskId)
        )
    }

    const addTask =(title:string)=>{
        const newTask: TaskType = {
            id:v1(), title: title, isDone: false
        }
        const updateTasks = [newTask, ...tasks]
        setTasks(updateTasks)

        // setTasks(newTask, ...tasks)
    }


    const getFilteredTasks =
        (allTasks: Array<TaskType>, currentFilterValue: FilterValueType): Array<TaskType> => {
            switch (currentFilterValue) {
                case 'completed':
                    return allTasks.filter(t => t.isDone === true)
                case 'active':
                    return allTasks.filter(t => t.isDone === false)
                default:
                    return allTasks
            }
        }

    const filteredTasks: Array<TaskType> = getFilteredTasks(tasks, filter)

    return (
        <div className="App">
            <TodoList title={title} tasks={filteredTasks} removeTask={removeTask} changeFilter={changeFilter} addTask={addTask}/>
        </div>
    );
}


export default App;
