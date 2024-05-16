<?php
include 'conexao.php'; // Inclua o arquivo de conexão

// Exemplo de consulta
$sql = "SELECT * FROM produtos";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "Nome: " . $row["nome"] . " - Descrição: " . $row["descricao"] . "<br>";
    }
} else {
    echo "Nenhum resultado encontrado.";
}

$conn->close();
