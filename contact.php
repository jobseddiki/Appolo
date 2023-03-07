<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

  // Récupération des données soumises par le formulaire
  $email = $_POST["email"];
  $sujet = $_POST["sujet"];
  $message = $_POST["message"];

  // Validation des données (par exemple, vérification que l'adresse email est valide)
  // ...

  // Envoi du message par email (exemple avec la fonction mail de PHP)
  $to = "destinataire@example.com";
  $subject = $sujet;
  $body = $message;
  $headers = "From: $email";

  if (mail($to, $subject, $body, $headers)) {
    // Le message a été envoyé avec succès
    header("Location: confirmation.html");
    exit;
  } else {
    // Il y a eu une erreur lors de l'envoi du message
    echo "Une erreur est survenue. Veuillez réessayer plus tard.";
  }

}

?>
