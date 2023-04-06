import React, { useEffect } from 'react';
import '../../styles/task.scss';
import { Task } from "../../models/modelTask";
import { LEVELS } from '../../models/modelLevel';
import PropTypes from 'prop-types';

export const TaskComponent = ({ task, complete, deleted }) => {

    useEffect(() => {
        console.log('Task: Created')

        return () => {
            console.log(`Task: ${task.name} Unmounted`)
        }
    }, [task])

    const taskLevelBadge = () => {
        switch (task.level) {
            case LEVELS.NORMAL:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>{task.level}</span>
                    </h6>
                )
            case LEVELS.URGENT:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>{task.level}</span>
                    </h6>
                )
            case LEVELS.BLOCKING:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>{task.level}</span>
                    </h6>
                )
            default:
                break;
        }
    }

    const taskStatus = () => {
        if (task.completed) {
            return (<i onClick={() => complete(task)} className='bi-toggle-on task-action' style={{ color: 'green' }}></i>)
        } else {
            return (<i onClick={() => complete(task)} className='bi-toggle-off task-action' style={{ color: 'grey' }}></i>)
        }
    }

    const completedStyle = {
        color: 'gray',
        fontWeight: 'bold',
        textDecoration: 'line-through'
    }
    const pendingStyle = {
        color: 'red',
        fontWeight: 'bold'
    }

    return (
        <tr className='fw-normal' style={task.completed ? completedStyle : pendingStyle}>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span>{task.description}</span>
            </td>
            <td className='align-middle'>
                <span>{taskLevelBadge()}</span>
            </td>
            <td className='align-middle'>
                {taskStatus()}
                <i onClick={() => deleted(task)} className='bi-trash task-action' style={{ color: 'red' }}></i>
            </td>
        </tr>
    )
}

Task.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired
}

