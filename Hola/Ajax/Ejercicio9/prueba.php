<?php
  sleep(3);
  for ($i=0; $i < $_GET["nReps"] ; $i++) {
       echo "<p>" . $_GET["nombre"] . "</p>";
  }
?>