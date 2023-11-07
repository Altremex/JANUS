<?php
// Obtener valores usando filter_input
$name = trim(filter_input(INPUT_POST, 'name'));
$phone = trim(filter_input(INPUT_POST, 'phone'));
$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
$subject = trim(filter_input(INPUT_POST, 'subject'));
$message = trim(filter_input(INPUT_POST, 'message'));


echo htmlspecialchars($name, ENT_QUOTES, 'UTF-8');

// Validación de valores
$errors = [];

if (empty($name) || !preg_match("/^[a-zA-Z\s]+$/", $name)) {
    $errors[] = "Nombre inválido.";
}

// Ajusta la expresión regular según tus necesidades para el número de teléfono
if (empty($phone) || !preg_match("/^[\d\-\s]+$/", $phone)) {
    $errors[] = "Número de teléfono inválido.";
}

if (empty($email)) {
    $errors[] = "Correo electrónico inválido.";
}

if (empty($subject)) {
    $errors[] = "Asunto inválido.";
}

if (empty($message) || strlen($message) > 1000) { // Limitando a 1000 caracteres como ejemplo
    $errors[] = "Mensaje inválido o demasiado largo.";
}

// Verificar si hay errores
if (!empty($errors)) {
    // Manejar errores (p.ej., mostrarlos al usuario, registrarlos, etc.)
    print_r($errors);
} else {
    // Procesar el formulario (guardar en base de datos, enviar correo electrónico, etc.)
    // Asegúrate de escapar los valores antes de guardarlos o mostrarlos.
}
?>
