'use client'

import React, { useState, useEffect } from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState('');

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos'));
        if (storedTodos) {
            setTodos(storedTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleAddTodo = () => {
        if (task.trim() !== '') {
            setTodos([...todos, { task: task, completed: false }]);
            setTask('');
        }
    };

    const handleRemoveTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    const handleToggleComplete = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    return (
        <div className="w-full">
            <h1 className="text-3xl font-bold pb-4">Todo List</h1>
            <div className="flex lg:flex-row flex-col gap-1 mb-6">
                <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Add a new task"
                    maxLength={100}
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none" onClick={handleAddTodo}>Add</button>
            </div>
            <table className="table-auto w-full text-sm text-left rtl:text-right text-gray-500">
                <tbody>
                    {todos.map((todo, index) => (
                        <tr key={index} className="odd:bg-white even:bg-gray-50 border-b pl-6 py-4">
                            <td className="flex justify-between items-center">
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => handleToggleComplete(index)}
                                />
                                <span className={`mr-auto px-4 ${todo.completed ? 'line-through' : ''}`} style={{ wordBreak: 'break-all' }}>{todo.task}</span>
                                <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5" onClick={() => handleRemoveTodo(index)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TodoList;