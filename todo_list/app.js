window.onload = () => {
    const form1 = document.querySelector("#addForm");
 
    let items = document.getElementById("items");
    let submit = document.getElementById("submit");
 
    let editItem = null;
 
    form1.addEventListener("submit", agregarItem);
    items.addEventListener("click", eliminarItem);
};

function agregarItem(e) {
    e.preventDefault();
 
    if (submit.value != "Submit") {
        console.log("Hola");
 
        editItem.target.parentNode.childNodes[0].data
            = document.getElementById("item").value;
 
        submit.value = "Submit";
        document.getElementById("item").value = "";
 
        document.getElementById("lblsuccess").innerHTML
            = "Texto editado exitosamente";
 
        document.getElementById("lblsuccess").style.display = "block";
 
        setTimeout(function() {
            document.getElementById("lblsuccess").style.display = "none";
        }, 3000);
 
        return false;
    }
 
    let newItem = document.getElementById("item").value;
    if (newItem.trim() == "" || newItem.trim() == null)
        return false;
    else
        document.getElementById("item").value = "";
 
    let li = document.createElement("li");
    li.className = "list-group-item";
 
    let deleteButton = document.createElement("button");
 
    deleteButton.className = "btn-danger btn btn-sm float-right eliminar";
 
    deleteButton.appendChild(document.createTextNode("Eliminar"));
 
    let editButton = document.createElement("button");
 
    editButton.className = "btn-success btn btn-sm float-right editar";
 
    editButton.appendChild(document.createTextNode("Editar"));
 
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(deleteButton);
    li.appendChild(editButton);
 
    items.appendChild(li);
}

function eliminarItem(e) {
    e.preventDefault();
    if (e.target.classList.contains("eliminar")) {
        if (confirm("¿Estás seguro?")) {
            let li = e.target.parentNode;
            items.removeChild(li);
            document.getElementById("lblsuccess").innerHTML
                = "Texto eliminado exitosamente";
 
            document.getElementById("lblsuccess").style.display = "block";
 
            setTimeout(function() {
                document.getElementById("lblsuccess").style.display = "none";
            }, 3000);
        }
    }
    if (e.target.classList.contains("editar")) {
        document.getElementById("item").value =
            e.target.parentNode.childNodes[0].data;
        submit.value = "EDITAR";
        editItem = e;
    }
}

function toggleButton(ref, btnID) {
    document.getElementById(btnID).disabled = false;
}
