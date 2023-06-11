import React, {ChangeEvent, useRef, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSquarePlus} from "@fortawesome/free-solid-svg-icons";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {faDeleteLeft} from "@fortawesome/free-solid-svg-icons";
import {faSquareXmark} from "@fortawesome/free-solid-svg-icons";


type AddTaskFormPropsType = {
    addTask: (title: string) => void
}
const AddTaskForm = (props: AddTaskFormPropsType) => {

    // const addTaskInputRef = useRef<HTMLInputElement>(null)
    // const addTask =()=>{
    //     if(addTaskInputRef.current){
    //
    //         props.addTask(addTaskInputRef.current.value)
    //         addTaskInputRef.current.value=''
    //     }
    // }

    const [title, setTitle] = useState('')

    const addTask = () => {
        props.addTask(title)
        setTitle('')
    }

    const maxTaxTitleLength = 15
    const isTaskTitleLengthToLong = title.length > maxTaxTitleLength
    const isAddTaskBtnDisadled = !title || isTaskTitleLengthToLong
    const changeTaskTitle = (e: ChangeEvent<HTMLInputElement>) => {
        if (!isTaskTitleLengthToLong) {
            setTitle(e.currentTarget.value)
        }
    }

    return (<div>
            <input
                value={title}
                onChange={changeTaskTitle}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        addTask()
                    } else if (e.key === 'Backspace') {
                        setTitle(e.currentTarget.value)
                    }
                }}
            />
            <button
                disabled={!title}
                onClick={addTask} > <FontAwesomeIcon icon={faSquarePlus} />
            </button>
            <button disabled={!title} onClick={() => setTitle(title.slice(0,-1))}><FontAwesomeIcon icon={faDeleteLeft} /></button>
            <button disabled={!title} onClick={() => setTitle('')}><FontAwesomeIcon icon={faTrashCan} /></button>
            {isTaskTitleLengthToLong && <div>You title is so long</div>}

        </div>
    )
}
export default AddTaskForm;
