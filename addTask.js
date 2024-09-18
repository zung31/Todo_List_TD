function addTask() {
    const inputField = document.getElementById('inputField');
    const taskList = window.taskList || [];
    const inputValue = inputField.value;
    if (inputValue) {
        taskList.push(inputValue);
        console.log('Task added:', inputValue); //check
        console.log('Current task list:', taskList); //check

        const tbody = document.getElementById('taskTableBody');
        if (tbody) {
            const row = document.createElement('tr');
            const cellIndex = document.createElement('td');
            cellIndex.textContent = tbody.rows.length + 1; // dont use taskList.length =))
            
            const cellCompleted = document.createElement('td');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.addEventListener('change', function() {
                if (checkbox.checked) {
                    cellTask.style.textDecoration = 'line-through';
                } else {
                    cellTask.style.textDecoration = 'none';
                }
            });
            cellCompleted.appendChild(checkbox);

            const cellTask = document.createElement('td');
            cellTask.textContent = inputValue;
            row.appendChild(cellIndex);
            row.appendChild(cellCompleted);
            row.appendChild(cellTask);
            tbody.appendChild(row);
        }
        else{
            console.log('No <tbody> found in the document.');
        }

        inputField.value = '';
    } else {
        alert('Veuillez entrer une tâche.');
    }
}