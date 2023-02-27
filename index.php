
<?php
	include("conexion.php");
?>

<!DOCTYPE html>
<html>
<head>
	<title>Agregar tarea</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-md-6 col-md-offset-3">
				<h2>Agregar tarea</h2>
				<form id="add-task-form">
					<div class="form-group">
						<label for="task-desc">Tarea:</label>
						<input type="text" class="form-control" id="task-name" name="task_name" required>
					</div>
					<button type="submit" class="btn btn-primary">Agregar tarea</button>
				</form>
				<div id="message" class="alert alert-success" style="display:none;"></div>
			</div>
		</div>
	</div>
	<script src="javascript.js"></script>
</body>
</html>