<?php

require 'vendor/autoload.php'; // Inclua o arquivo de autoload do Composer
use Kreait\Firebase\Factory;
use Kreait\Firebase\ServiceAccount;

$serviceAccount = ServiceAccount::fromJsonFile(__DIR__ . '/path/to/serviceAccountKey.json');

$firebase = (new Factory)
    ->withServiceAccount($serviceAccount)
    ->create();

$database = $firebase->getDatabase();

// Agora você pode usar $database para realizar operações no Realtime Database do Firebase

// Exemplo de leitura de dados
$reference = $database->getReference('path/to/data');
$snapshot = $reference->getSnapshot();
$data = $snapshot->getValue();

// Exemplo de escrita de dados
$newPost = $database
    ->getReference('posts')
    ->push([
        'title' => 'Post Title',
        'body' => 'Post Body'
    ]);

echo 'Firebase integration successful!';
