// =============================================
// TO-DO LIST APP — script.js
// =============================================

// --- State ---
let tasks = [];           // Array to hold all task objects
let currentFilter = 'all'; // Active filter: 'all' | 'active' | 'completed'

// --- DOM References ---
const taskInput  = document.getElementById('taskInput');
const addBtn     = document.getElementById('addBtn');
const taskList   = document.getElementById('taskList');
const taskCount  = document.getElementById('taskCount');
const clearBtn   = document.getElementById('clearBtn');
const filterBtns = document.querySelectorAll('.filter-btn');

// =============================================
// Add a new task
// =============================================
function addTask() {
  const text = taskInput.value.trim();

  // Prevent empty tasks from being added
  if (!text) {
    taskInput.focus();
    return;
  }

  // Create a new task object with a unique ID
  const newTask = {
    id: Date.now(),       // Use timestamp as unique identifier
    text: text,
    completed: false
  };

  tasks.push(newTask);    // Add to tasks array
  taskInput.value = '';   // Clear input field
  taskInput.focus();

  render(); // Re-render the list
}

// =============================================
// Toggle task completion status
// =============================================
function toggleTask(id) {
  // Find the task by ID and flip its completed status
  const task = tasks.find(t => t.id === id);
  if (task) task.completed = !task.completed;
  render();
}

// =============================================
// Delete a single task by ID
// =============================================
function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id); // Remove task from array
  render();
}

// =============================================
// Clear all completed tasks at once
// =============================================
function clearCompleted() {
  tasks = tasks.filter(t => !t.completed);
  render();
}

// =============================================
// Get filtered tasks based on current filter
// =============================================
function getFilteredTasks() {
  if (currentFilter === 'active')    return tasks.filter(t => !t.completed);
  if (currentFilter === 'completed') return tasks.filter(t => t.completed);
  return tasks; // 'all' — return everything
}

// =============================================
// Render the task list to the DOM
// =============================================
function render() {
  const filtered = getFilteredTasks();

  // Clear the current list
  taskList.innerHTML = '';

  // Show empty state if no tasks match the filter
  if (filtered.length === 0) {
    taskList.innerHTML = `<li class="empty-msg">No tasks here. ${currentFilter === 'all' ? 'Add one above!' : ''}</li>`;
  } else {
    // Build a list item for each task
    filtered.forEach(task => {
      const li = document.createElement('li');
      li.className = `task-item${task.completed ? ' done' : ''}`;

      li.innerHTML = `
        <input type="checkbox" ${task.completed ? 'checked' : ''} aria-label="Mark task complete" />
        <span class="task-text">${escapeHTML(task.text)}</span>
        <button class="delete-btn" aria-label="Delete task">✕</button>
      `;

      // Checkbox toggle event
      li.querySelector('input').addEventListener('change', () => toggleTask(task.id));

      // Delete button event
      li.querySelector('.delete-btn').addEventListener('click', () => deleteTask(task.id));

      taskList.appendChild(li);
    });
  }

  // Update the remaining active task count
  const activeCount = tasks.filter(t => !t.completed).length;
  taskCount.textContent = `${activeCount} task${activeCount !== 1 ? 's' : ''} left`;
}

// =============================================
// Escape HTML to prevent XSS injection
// =============================================
function escapeHTML(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// =============================================
// Event Listeners
// =============================================

// Add task on button click
addBtn.addEventListener('click', addTask);

// Add task on Enter key press
taskInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') addTask();
});

// Clear completed tasks
clearBtn.addEventListener('click', clearCompleted);

// Filter buttons — update active state and re-render
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    currentFilter = btn.dataset.filter; // Read filter from data attribute

    // Update active button styling
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    render();
  });
});

// =============================================
// Initial render (empty state)
// =============================================
render();