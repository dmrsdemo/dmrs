<?php
header('Access-Control-Allow-Origin: *');

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $recaptchaSecret = '6Lcy9sYoAAAAADgUd0iozp8WOau6d0awguHzIG9j';
    // Verify CAPTCHA response
    $recaptchaResponse = $_GET['token'];

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
        echo json_encode(['response' => "CAPTCHA verification failed. Please try again."]);

    } else {
        echo json_encode(['response' => 'success']);
    }
}
