import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './App.css';

const getLocalTasks = () => {
  const saved = localStorage.getItem('tasks');
  return saved ? JSON.parse(saved) : [];
};

function App() {
  const [tasks, setTasks] = useState(getLocalTasks());
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all');
  const [editingId, setEditingId] = useState(null);
  const [editInput, setEditInput] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAdd = () => {
    if (input.trim()) {
      const newTask = { id: Date.now().toString(), text: input, completed: false };
      setTasks([...tasks, newTask]);
      setInput('');
    }
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleToggle = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTasks(items);
  };

  const handleEdit = (id) => {
    const taskToEdit = tasks.find(task => task.id === id);
    setEditingId(id);
    setEditInput(taskToEdit.text);
  };

  const handleSaveEdit = (id) => {
    if (editInput.trim()) {
      setTasks(tasks.map(task =>
        task.id === id ? { ...task, text: editInput.trim() } : task
      ));
      setEditingId(null);
      setEditInput('');
    }
  };

  const handleKeyPress = (e, id) => {
    if (e.key === 'Enter') {
      handleSaveEdit(id);
    } else if (e.key === 'Escape') {
      setEditingId(null);
      setEditInput('');
    }
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    return filter === 'completed' ? task.completed : !task.completed;
  });

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <div className="input-section">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a task..."
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <div className="filter-buttons">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('pending')}>Pending</button>
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {filteredTasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={task.completed ? 'completed' : ''}
                    >
                      {editingId === task.id ? (
                        <input
                          type="text"
                          value={editInput}
                          onChange={(e) => setEditInput(e.target.value)}
                          onKeyDown={(e) => handleKeyPress(e, task.id)}
                          onBlur={() => handleSaveEdit(task.id)}
                          autoFocus
                        />
                      ) : (
                        <span onDoubleClick={() => handleEdit(task.id)}>
                          <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => handleToggle(task.id)}
                          />
                          {task.text}
                        </span>
                      )}
                      <div className="button-group">
                        {editingId !== task.id && (
                          <button onClick={() => handleEdit(task.id)} className="edit-btn">
                            Edit
                          </button>
                        )}
                        <button onClick={() => handleDelete(task.id)} className="delete-btn">
                          Delete
                        </button>
                      </div>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
