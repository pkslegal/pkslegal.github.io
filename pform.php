<?php
session_start();

if (isset($_POST['send'])) {
    // Get the form data
    $name = $_POST['yname'];
    $phone = $_POST['pno'];
    $service = $_POST['service'];
    $message = $_POST['text'];

    // Email settings
    $to = 'info.pkslegal@gmail.com,gatorsweb@gmail.com'; // Replace with your email address
    $subject = 'New Contact Form Submission';
    $headers = "From: no-reply@example.com" . "\r\n" .
               "Reply-To: no-reply@example.com";

    // Email body
    $mail_body = "Name: $name\n";
    $mail_body .= "Phone Number: $phone\n";
    $mail_body .= "Service: $service\n";
    $mail_body .= "Message:\n$message";

    // Send the email
    if (mail($to, $subject, $mail_body, $headers)) {
        $_SESSION['msg1'] = "Information submitted successfully";
        $url = 'https://gatorsweb.com/pks/';
        header("Location: $url");
        exit(); // Stop script execution after redirection
    } else {
        echo "Sorry, there was an error sending your message. Please try again later.";
    }
}
?>
