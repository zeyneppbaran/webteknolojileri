<?php
// login.php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Kullanıcı adını ve şifreyi kontrol et
    $studentNumber = substr($username, 0, strpos($username, '@'));
    if ($studentNumber && $password == $studentNumber) {
        echo "Hoşgeldiniz, $studentNumber!";
    } else {
        // Giriş başarısızsa, login sayfasına geri yönlendir
        header("Location: index.html");
        exit();
    }
} else {
    // POST ile gelmediyse, login sayfasına geri yönlendir
    header("Location: index.html");
    exit();
}
?>
