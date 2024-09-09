<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): // Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type");
        exit;

    case ("POST"): // Send the email;
        header("Access-Control-Allow-Origin: *"); // Set CORS for POST as well
        header("Access-Control-Allow-Headers: Content-Type");

        // Payload is not sent to $_POST Variable, it is sent to php:input as a text
        $json = file_get_contents('php://input');
        // Parse the Payload from text format to Object
        $params = json_decode($json);

        $email = $params->email;
        $name = $params->name;
        $message = $params->message;

        $recipient = 'max.bendel1996@gmail.com';  
        $subject = "Contact From <$email>";
        $message = "From:" . $name . "<br>" . $message;

        $headers   = array();
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=utf-8';

        // Additional headers
        $headers[] = "From: noreply@mywebsite.com";

        mail($recipient, $subject, $message, implode("\r\n", $headers));
        break;

    default: // Reject any non POST or OPTIONS requests.
        header("Allow: POST, OPTIONS", true, 405);
        exit;
}
