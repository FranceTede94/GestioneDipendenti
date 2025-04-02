// Funzione per aggiungere un dipendente
document.getElementById("addEmployeeForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const birthdate = document.getElementById("birthdate").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const position = document.getElementById("position").value;

    const table = document.getElementById("employeeTable").getElementsByTagName("tbody")[0];
    const newRow = table.insertRow(table.rows.length);

    newRow.innerHTML = `
        <td>${name}</td>
        <td>${birthdate}</td>
        <td>${address}</td>
        <td>${phone}</td>
        <td>${email}</td>
        <td>${position}</td>
        <td>
            <button class="editButton" onclick="editRow(this)">Modifica</button>
            <button class="deleteButton" onclick="deleteRow(this)">Elimina</button>
        </td>
    `;

    // Reset del form dopo aver aggiunto il dipendente
    document.getElementById("addEmployeeForm").reset();
});

// Funzione per eliminare una riga
function deleteRow(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}

// Funzione per modificare una riga
function editRow(button) {
    const row = button.parentElement.parentElement;
    const cells = row.getElementsByTagName("td");

    document.getElementById("name").value = cells[0].innerText;
    document.getElementById("birthdate").value = cells[1].innerText;
    document.getElementById("address").value = cells[2].innerText;
    document.getElementById("phone").value = cells[3].innerText;
    document.getElementById("email").value = cells[4].innerText;
    document.getElementById("position").value = cells[5].innerText;

    // Cambiamo il testo del bottone per salvare le modifiche
    const formButton = document.querySelector("form button");
    formButton.innerText = "Salva modifiche";

    // Modifica la funzione del bottone per salvare le modifiche
    formButton.onclick = function() {
        cells[0].innerText = document.getElementById("name").value;
        cells[1].innerText = document.getElementById("birthdate").value;
        cells[2].innerText = document.getElementById("address").value;
        cells[3].innerText = document.getElementById("phone").value;
        cells[4].innerText = document.getElementById("email").value;
        cells[5].innerText = document.getElementById("position").value;

        // Ripristina il testo del bottone a "Aggiungi Dipendente"
        formButton.innerText = "Aggiungi Dipendente";

        // Resetta la funzione del bottone per aggiungere un nuovo dipendente
        formButton.onclick = function() {
            document.getElementById("addEmployeeForm").submit();
        };

        document.getElementById("addEmployeeForm").reset();
    };
}
