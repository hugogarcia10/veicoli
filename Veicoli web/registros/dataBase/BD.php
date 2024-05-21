<?php
<<<<<<< HEAD
// Datos de conexión a la base de datos MongoDB
$uri = "mongodb://localhost:27017";
$databaseName = "veicoli";
$collectionName = "registro";

// Conectar a MongoDB
try {
    $client = new MongoDB\Client($uri);
    echo "Conexión exitosa a MongoDB<br>";
} catch (Exception $e) {
    echo "Error al conectar a MongoDB: " . $e->getMessage();
    exit;
}

// Seleccionar la base de datos
$database = $client->selectDatabase($databaseName);

// Seleccionar la colección
$collection = $database->selectCollection($collectionName);

// Verificar si se recibieron los datos del formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener datos del formulario
    $nombre = $_POST['nombre'];
    $apellidos = $_POST['apellidos'];
    $telefono = $_POST['telefono'];
    $correo = $_POST['correo'];
    $contrasena = $_POST['contrasena'];

    // Hash de la contraseña
    $contrasena_hash = password_hash($contrasena, PASSWORD_DEFAULT);

    // Insertar datos en la colección
    $result = $collection->insertOne([
        'nombre' => $nombre,
        'apellidos' => $apellidos,
        'telefono' => $telefono,
        'correo' => $correo,
        'contrasena' => $contrasena_hash
    ]);

    // Verificar si la inserción fue exitosa
    if ($result->getInsertedCount() > 0) {
        echo "Registro exitoso";
    } else {
        echo "Error al registrar";
    }
} else {
    echo "No se recibieron datos del formulario";
}
=======
include("conexion.php");

if (isset($_POST['registro'])) {
    // Obtener los datos del formulario
    $nombre = $_POST['nombre'];
    $apellidos = $_POST['apellidos'];
    $telefono = $_POST['telefono'];
    $correo = $_POST['correo'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Encriptar la contraseña

    // Insertar los datos en la base de datos
    $consulta = $conex->prepare("INSERT INTO registro (nombre, apellidos, telefono, correo, password) VALUES (?, ?, ?, ?, ?)");
    $consulta->bind_param("sssss", $nombre, $apellidos, $telefono, $correo, $password);
    
    if ($consulta->execute()) {
        echo '<h3 class="ok">¡Te has inscrito correctamente!</h3>';
    } else {
        echo '<h3 class="bad">¡Ups ha ocurrido un error!</h3>';
    }

    $consulta->close();
}

$conex->close();
>>>>>>> 396545f475b64f446c3fa268f08fd81fe145b4ce
?>
