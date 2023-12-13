<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    require 'PHPMailer/src/Exception.php';
    require 'PHPMailer/src/PHPMailer.php';
    require 'PHPMailer/src/SMTP.php';

    $mail = new PHPMailer(true);
    try {
        $mail->CharSet = 'UTF-8';
        $mail->SMTPDebug = 0;
        $mail->isSMTP();
        $mail->Host = 'smtp.host.net';
        $mail->SMTPAuth = true;
        $mail->Username = 'test@example.com';
        $mail->Password = '123456';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;
        $mail->setFrom('test@example.com', 'Contact Form');
        $mail->addAddress('receiver@example.com');
        $mail->isHTML(true);
        $mail->Subject = 'Contact Form';
        $mail->Body = "Ad: $name<br><br>E-posta: $email<br><br>Mesaj: $message";

        $mail->send();
        echo "Mesajınız için teşekkürler --> ";
    } catch (Exception $e) {
        echo 'Mesajınız iletilemedi. Hata: ', $mail->ErrorInfo;
    }
}

?>