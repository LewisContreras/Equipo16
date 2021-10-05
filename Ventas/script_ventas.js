var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["idventa"] = document.getElementById("idventa").value;
    formData["empCode"] = document.getElementById("empCode").value;
    formData["Ncliente"] = document.getElementById("Ncliente").value;
    formData["Dproducto"] = document.getElementById("Dproducto").value;
	formData["valorU"] = document.getElementById("valorU").value;
	formData["cantidad"] = document.getElementById("cantidad").value;
	formData["total"] = document.getElementById("total").value;
	formData["vendedor"] = document.getElementById("vendedor").value;
	formData["estado"] = document.getElementById("estado").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.idventa;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empCode;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Ncliente;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Dproducto;
	cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.valorU;
	cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.cantidad;
	cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.total;
	cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.vendedor;
	cell9 = newRow.insertCell(8);
    cell9.innerHTML = data.estado;
    cel20 = newRow.insertCell(9);
    cel20.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;

	window.alert("El registro ha sido creado con éxito");
	

}

function resetForm() {
    document.getElementById("idventa").value = "";
    document.getElementById("empCode").value = "";
    document.getElementById("Ncliente").value = "";
    document.getElementById("Dproducto").value = "";
	document.getElementById("valorU").value = "";
	document.getElementById("cantidad").value = "";
	document.getElementById("total").value = "";
	document.getElementById("vendedor").value = "";
	document.getElementById("estado").value = "";
	
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("idventa").value = selectedRow.cells[0].innerHTML;
    document.getElementById("empCode").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Ncliente").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Dproducto").value = selectedRow.cells[3].innerHTML;
    document.getElementById("valorU").value = selectedRow.cells[4].innerHTML;
	document.getElementById("cantidad").value = selectedRow.cells[5].innerHTML;
	document.getElementById("total").value = selectedRow.cells[6].innerHTML;
	document.getElementById("vendedor").value = selectedRow.cells[7].innerHTML;
	document.getElementById("estado").value = selectedRow.cells[7].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.idventa;
    selectedRow.cells[1].innerHTML = formData.empCode;
    selectedRow.cells[2].innerHTML = formData.Ncliente;
    selectedRow.cells[3].innerHTML = formData.Dproducto;
	selectedRow.cells[4].innerHTML = formData.valorU;
	selectedRow.cells[5].innerHTML = formData.cantidad;
	selectedRow.cells[6].innerHTML = formData.total;
	selectedRow.cells[7].innerHTML = formData.vendedor;
	selectedRow.cells[8].innerHTML = formData.estado;
	
	
}

function onDelete(td) {
    if (confirm('¿Está seguro que desea eliminar el registro?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("idventa").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}