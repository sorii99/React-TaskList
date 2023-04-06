import React, { useEffect, useState } from 'react';
import { TaskForm } from "../forms/taskForm";
import { Task } from "../../models/modelTask";
import { LEVELS } from '../../models/modelLevel';
import { TaskComponent } from "./task";

export const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', true, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example2', 'Default description', false, LEVELS.URGENT);
    const defaultTask3 = new Task('Example3', 'Default description', false, LEVELS.BLOCKING);

    const [tasks, setTasks] = useState([defaultTask, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000)
        return () => {
            console.log('TaskList component is going to unmount')
        }
    }, [tasks])

    const completeTask = (task) => {
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask[index].completed = !tempTask[index].completed;
        setTasks(tempTask);
    }

    const deleteTask = (task) => {
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask.splice(index, 1);
        setTasks(tempTask);
    }

    const addTask = (task) => {
        const tempTask = [...tasks];
        tempTask.push(task);
        setTasks(tempTask)
    }

    const Table = () => {
        return (
            <div className='card-body' data-mdb-perfect-scrollbar="true" style={{ position: 'relative', height: '400px' }}>
                <table>
                    <thead>
                        <tr>
                            <th scope='col'>Title:</th>
                            <th scope='col'>Description:</th>
                            <th scope='col'>Priority:</th>
                            <th scope='col'>Actions:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task, index) => {
                            return (
                                <TaskComponent
                                    key={index}
                                    task={task}
                                    complete={completeTask}
                                    deleted={deleteTask}
                                />
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }

    let tasksTable;
    if (tasks.length > 0) {
        tasksTable = <Table></Table>
    } else {
        tasksTable =
            <div>
                <h3>There are no tasks to show.</h3>
                <h4>You can add one below!</h4>
            </div>
    }

    const loadingStyle = {
        color: 'green',
        fontSize: '30px',
        fontWeight: 'bold'
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>Your Tasks:</h5>
                    </div>
                    {/* TODO: Add spinner */}
                    {loading ? (<p style={loadingStyle}>Loading tasks...</p>) : tasksTable}
                </div>
                <TaskForm add={addTask} length={tasks.length} />
            </div>
        </div>
    )
}

