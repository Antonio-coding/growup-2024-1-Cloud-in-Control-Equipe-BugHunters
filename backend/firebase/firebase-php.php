composer require kreait/firebase-php
require_once 'firebase-config.php';

$firebase = (new Kreait\Firebase\Factory())
->withServiceAccount('firebase-config.json')
->create();

$database = $firebase->createDatabase();

$reference = $database->getReference('users/123');
$snapshot = $reference->getSnapshot();
$data = $snapshot->getValue();