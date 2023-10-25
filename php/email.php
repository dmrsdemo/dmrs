<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require './vendor/autoload.php';

/* Handle CORS */
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin,Content-Type');


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // POST DATA
    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body, true);
    $recaptchaResponse = $data['token'];
    $name = $data['name'];
    $email = $data['email'];
    $message = $data['message'];
    
    // Verify CAPTCHA response
    $recaptchaSecret = '6Lcy9sYoAAAAADgUd0iozp8WOau6d0awguHzIG9j';
    $url = "https://www.google.com/recaptcha/api/siteverify";

    $data = [
        'secret' => $recaptchaSecret,
        'response' => $recaptchaResponse,
    ];

    $options = [
        'http' => [
            'method' => 'POST',
            'content' => http_build_query($data),
        ],
    ];

    $context = stream_context_create($options);
    $result = file_get_contents($url, false, $context);
    $responseKeys = json_decode($result, true);

    if (intval($responseKeys["success"]) !== 1) {
        res(['message' => 'CAPTCHA verification failed. Please try again.'], 401);
    } else {
        $mail = new PHPMailer();

        // Settings
        $mail->IsSMTP();
        $mail->Mailer = "smtp";
        $mail->CharSet = 'UTF-8';

        $mail->Host       = "mail.smtp2go.com";    
        $mail->Port       = 2525;                  
        $mail->SMTPAuth   = true;
        $mail->SMTPSecure = "tls";
        $mail->Username   = "info@yourintell.com";
        $mail->Password   = "07BRhSkTcXUlX4lu";

        // Content
        $mail->Sender='info@yourintell.com';
        $mail->setFrom('info@yourintell.com', $name);
        $mail->addAddress('info@risk.co.th');
        $mail->addReplyTo($email);

        $mail->isHTML(true);                       
        $mail->Subject = 'New Message from DMRS Website';
        $mail->Body    = "$message<br>From,<br>$name<br>$email";
        $mail->AltBody = $message;

        if($mail->send()) {
            res(['message' => 'Email is successfully sent!']);
        } else {
            res(['message' => $mail->ErrorInfo], 400);
        }
    }
}

function res($response, $code = 200) {
    echo json_encode([...$response, 'response_code' => $code]);
    http_response_code($code);
    exit;
}
