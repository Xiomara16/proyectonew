<?php
/*Datos de conexion a la base de datos*/
$db_host = "localhost";
$db_user = "root";
$db_pass = "";
$db_name = "tareas";
 
$con = mysqli_connect($db_host, $db_user, $db_pass, $db_name);
 
if(mysqli_connect_errno()){
	echo 'No se pudo conectar a la base de datos : '.mysqli_connect_error();
}

if(isset($_POST['submit'])){
    $tarea = $_POST['tarea'];
    $fecha = $_POST['fecha'];
    $estado = $_POST['estado'];

    $sql = "INSERT INTO tareas (tarea, fecha, estado) VALUES ('$tarea', '$fecha', '$estado')";

    if(mysqli_query($con, $sql)){
        echo "Tarea agregada correctamente";
    } else{
        echo "Error al agregar tarea: " . mysqli_error($con);
    }
}
?>