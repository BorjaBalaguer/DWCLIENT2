<?php
  $user = $_GET['user'];
  $pass = $_GET['pass'];
  if ($user == "pepe" && $pass == "hola") {
    echo "usuario correcto";
  } else {
    echo "usuario incorrecto";
  }
?>