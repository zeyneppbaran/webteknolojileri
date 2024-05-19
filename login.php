<?php
$username = $_POST['username'];
$password = $_POST['password'];

$valid_username_pattern = '/^[a-zA-Z0-9._%+-]+@sakarya\.edu\.tr$/';
$valid_password = substr($username, 0, strpos($username, '@'));

if (preg_match($valid_username_pattern, $username) && $password === $valid_password) {
    $student_number = substr($username, 0, strpos($username, '@'));
    echo "Hoşgeldiniz " . htmlspecialchars($student_number);
} else {
    header("Location: index.html"); // Login sayfasına geri yönlendirme
    exit();
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];


    echo "<h2>Gönderilen Bilgiler:</h2>";
    echo "<p>Ad Soyad: $name</p>";
    echo "<p>E-posta: $email</p>";
    echo "<p>Mesaj: $message</p>";
}
?>

