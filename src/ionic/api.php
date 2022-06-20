<?php

use LDAP\Result;

include_once('conn.php');
$postjson = json_decode(file_get_contents('php://input'), true);

/**REQUISIÇAO PARA SALVAR DADOS NA TABELA TB_USUARIO */

if ($postjson['requisicao'] == 'add') {
  $senha_cript = md5($postjson['senha']);

  $query = $pdo->prepare("  INSERT INTO tb_usuario SET nome = :nome," .
    "email = :email, senha = :senha, cpf = :cpf, telefone = :telefone");

  $query->bindValue(":nome", $postjson['nome']);
  $query->bindValue(":email", $postjson['email']);
  $query->bindValue(":senha", $senha_cript);
  $query->bindValue(":cpf", $postjson['cpf']);
  $query->bindValue(":telefone", $postjson['telefone']);
  $query->execute();

  $id = $pdo->lastInsertId();

  if ($query) {
    $result = json_encode(array('success' => true, 'id' => $id));
  } else {
    $result = json_encode(array('success' => false));
  }

  echo $result;
}

// realiza cosulta no BdD
if ($postjson['requisicao'] == 'listar') {
  if ($postjson['nome'] == '') {
    $query = $pdo->query(
      "SELECT * FROM tb_usuario ORDER BY id LIMIT $postjson [start], $postjson[limit]"
    );
  } else {
    $buscar = $postjson['nome'] . '%';
    $query = $pdo->query("SELECT * FROM tb_usuario WHERE nome LIKE '$buscar' ORDER BY id DESC LIMIT $postjson[start], $postjson[limit]");
  }

  $res = $query->fetchAll(PDO::FETCH_ASSOC);

  for ($i = 0; $i < count($res); $i++) {
    $dados[] = array(
      'id' => $res[$i]['id'],
      'nome' => $res[$i]['nome'],
      'email' => $res[$i]['email'],
      'senha' => $res[$i]['senha'],
      'cpf' => $res[$i]['cpf'],
      'nivel' => $res[$i]['nivel']
    );
  } //FIM DO FOR

  if (count($res) > 0) {
    $result = json_encode(array('success' => true, 'result' => $dados));
  } else {
    $result = json_encode(array('success' => false, 'result' => '0'));
  }

  echo $result;
}
