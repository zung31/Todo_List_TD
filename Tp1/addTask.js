function addTask() {
    const inputField = document.getElementById('inputField');
    const taskList = window.taskList || [];
    const inputValue = inputField.value;
    if (inputValue) {
        taskList.push(inputValue);
        console.log('Task added:', inputValue); //check
        //console.log('Current task list:', taskList); //check

        const tbody = document.getElementById('taskTableBody');
        if (tbody) {
            const row = document.createElement('tr');
            row.setAttribute('data-status', 'non-ter'); // set the status of the task to non-ter
            const cellIndex = document.createElement('td');
            cellIndex.textContent = tbody.rows.length + 1; // dont use taskList.length =))
            
            const cellCompleted = document.createElement('td');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            let wasChecked = false;
            checkbox.addEventListener('change', function() {
                var row = cellTask.parentElement;
                var rowInfo = Array.from(row.cells).map(cell => cell.textContent).join(', ');
                if (checkbox.checked) {
                    cellTask.style.textDecoration = 'line-through';
                    row.setAttribute('data-status', 'ter'); // set the status of the task to ter
                    // console log information about the task checked
                    console.log('Task completed:', rowInfo);
                    wasChecked = true;
                } else {
                    cellTask.style.textDecoration = 'none';
                    row.setAttribute('data-status', 'non-ter'); // set the status of the task to non-ter
                    if(wasChecked){
                        // console log information about the task unchecked
                        console.log('Task unchecked:', rowInfo);
                    }
                }
            });
            cellCompleted.appendChild(checkbox);

            // button delete
            const cellDelete = document.createElement('td');
            const deleteButton = document.createElement('button');
            deleteButton.className = 'button-danger';
            deleteButton.textContent = 'Supprimer';
            deleteButton.addEventListener('click', function() {
                taskTableBody.removeChild(row);
            });
            cellDelete.appendChild(deleteButton);

            const cellTask = document.createElement('td');
            cellTask.textContent = inputValue;
            row.appendChild(cellIndex);
            row.appendChild(cellCompleted);
            row.appendChild(cellTask);
            row.appendChild(cellDelete);
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