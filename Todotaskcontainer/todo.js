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
