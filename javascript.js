// Escuchar el evento submit del formulario
document.getElementById("add-task-form").addEventListener("submit", function(event) {
	// Evitar que se envíe el formulario de forma convencional
	event.preventDefault();
	// Obtener los valores de los campos del formulario
	var taskName = document.getElementById("task-name").value;
	var taskDescription = document.getElementById("task-description").value;
	// Crear el objeto que se enviará al servidor mediante AJAX
	var data = {
		taskName: taskName,
		taskDescription: taskDescription
	};
	// Enviar la petición AJAX mediante XMLHttpRequest
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "add-task.php", true);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === XMLHttpRequest.DONE) {
			if (xhr.status === 200) {
				// Mostrar un mensaje de éxito en caso de que se agregue la tarea correctamente
				document.getElementById("message").innerHTML = "La tarea se ha agregado correctamente.";
				document.getElementById("message").style.display = "block";
			} else {
				// Mostrar un mensaje de error en caso de que no se agregue la tarea correctamente
				document.getElementById("message").innerHTML = "Se ha producido un error al agregar la tarea.";
				document.getElementById("message").style.display = "block";
			}
		}
	};
	xhr.send(JSON.stringify(data));
});

$(document).ready(function() {
    $("#add-task-form").submit(function(event) {
        event.preventDefault();
        var data = {
            "task_desc": $("#task-desc").val()
        };
        $.ajax({
            url: "add-task.php",
            type: "POST",
            dataType: "json",
            data: JSON.stringify(data),
            success: function(response) {
                $("#message").html("La tarea se ha agregado correctamente.");
                $("#message").removeClass("alert-danger");
                $("#message").addClass("alert-success");
                $("#message").fadeIn();
            },
            error: function(xhr, status, error) {
                $("#message").html("Ha ocurrido un error al agregar la tarea.");
                $("#message").removeClass("alert-success");
                $("#message").addClass("alert-danger");
                $("#message").fadeIn();
            }
        });
    });
});
