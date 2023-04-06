import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../models/modelLevel';
import { Task } from '../../models/modelTask';

export const TaskForm = ({ add, length }) => {

    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);

    const addTask = (e) => {
        e.preventDefault();
        const NewTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        )
        add(NewTask);
    }

    return (
        <form className='d-flex justify-content-center align-items-center mb-4' onSubmit={addTask}>
            <div className='form-outline flex-fill'>
                <input placeholder='Task name' id='inputName' ref={nameRef} type='text' className='form-control form-control-lg' required autoFocus />
                <input placeholder='Task description' id='inputDescription' ref={descriptionRef} type='text' className='form-control form-control-lg' required />

                <label htmlFor='selectLevel' className='sr-only'> Priority: </label>
                <select className='form-control form-control-lg' id='selectLevel' ref={levelRef} defaultValue={LEVELS.NORMAL}>
                    <option value={LEVELS.NORMAL}>
                        Normal
                    </option>
                    <option value={LEVELS.URGENT}>
                        Urgent
                    </option>
                    <option value={LEVELS.BLOCKING}>
                        Blocking
                    </option>
                </select>
                <button type='submit' className='btn btn-success btn-lg ms-2'>
                    {length > 0 ? 'Add New Task' : 'Create your First Task'}
                </button>
            </div>
        </form>
    )
}

TaskForm.propTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}