<?php
$servername = "localhost";  // Cambia a la dirección del servidor MySQL si es diferente
$username = "root";   // Cambia al nombre de usuario de tu base de datos
$password = ""; // Cambia a la contraseña de tu base de datos
$dbname = "veicoli"; // Cambia al nombre de tu base de datos

// Crea una conexión a la base de datos
$conex = new mysqli($servername, $username, $password, $dbname);

// Verifica la conexión
if ($conex->connect_error) {
    die("La conexión ha fallado: " . $conex->connect_error);
}
?>
