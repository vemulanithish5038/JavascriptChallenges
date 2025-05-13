document.getElementById('todo-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const input = document.getElementById('todo-input');
    const taskText = input.value.trim();
    
    if (taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" class="complete-task">
            <span>${taskText}</span>
            <button class="delete-btn">Delete</button>
        `;
        
        document.getElementById('todo-list').appendChild(li);
        
        input.value = '';
        
        li.querySelector('.delete-btn').addEventListener('click', function() {
            li.remove();
        });
        
        li.querySelector('.complete-task').addEventListener('change', function() {
            li.classList.toggle('completed');
        });
    }
});

const allButton = document.getElementById('all-btn');
const completedButton = document.getElementById('completed-btn');
const pendingButton = document.getElementById('pending-btn');

allButton.addEventListener('click', () => {
    filterTasks('all');
    setActiveButton(allButton);
});

completedButton.addEventListener('click', () => {
    filterTasks('completed');
    setActiveButton(completedButton);
});

pendingButton.addEventListener('click', () => {
    filterTasks('pending');
    setActiveButton(pendingButton);
});

function filterTasks(status) {
    const tasks = document.querySelectorAll('#todo-list li');
    tasks.forEach(task => {
        switch (status) {
            case 'all':
                task.style.display = 'flex';
                break;
            case 'completed':
                task.style.display = task.classList.contains('completed') ? 'flex' : 'none';
                break;
            case 'pending':
                task.style.display = !task.classList.contains('completed') ? 'flex' : 'none';
                break;
        }
    });
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll('.filters button');
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}
