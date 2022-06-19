<?php

header ('Access-Control-Allow-Origin:*');
header ('Access-Control-Allow-Credentials: true');
header ('Access-Control-Allow_Methods: POST GET OPTIONS');
header ('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header ('Content-Type: application/json; charset=utf-8 ');


$banco = 'sis_acad';
$host = 'localhost';
$usuario = 'root';
$senha = '';

try {
  $pdo = new PDO("mysql:dbname=$banco;host=$host", "$usuario", "$senha");
  echo 'Conectado com sucesso!';
} catch(Exception $e) {}

?>
