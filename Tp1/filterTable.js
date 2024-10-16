function filterTable() {
    const filter = document.getElementById('mySelect').value;
    const rows = document.querySelectorAll('#taskTableBody tr');

    rows.forEach(row => {
        const status = row.getAttribute('data-status');
        if (filter === 'all' || filter === status) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}   

// Ensure the function is accessible globally
window.filterTable = filterTable;