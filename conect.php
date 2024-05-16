<?php
require __DIR__ . '/vendor/autoload.php';

use Kreait\Firebase\Factory;

$factory = (new Factory())->withDatabaseUri('https://bug-hunters-c6499-default-rtdb.firebaseio.com/');

$database = $factory->createDatabase();
