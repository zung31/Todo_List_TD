// chercher premier <table>
const firstTable = document.querySelector('table');
if (firstTable) {
    console.log('First <table> found:', firstTable);
} else {
    console.log('No <table> found in the document.');
}

// créer <td>
const newTd = document.createElement('td');

// définir `width` à 10 pixels pour <td>
newTd.setAttribute('width', '10px');

// ajouter <td> créée à la fin de <table>
if (firstTable) {
    firstTable.appendChild(newTd);
}