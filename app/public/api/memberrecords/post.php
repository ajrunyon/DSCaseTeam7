<?php

// Step 0: Validation
use Ramsey\Uuid\Uuid;
$guid = Uuid::uuid4()->toString();
$db = DbConnection::getConnection();
// Step 1: Get a database connection from our help
$stmt = $db->prepare(
  'INSERT INTO Member
    (memberID, firstName, lastName, position, email, radioNum, station)
  Values (?, ?, ?, ?, ?, ?, ?)'
);

$stmt->execute([
  $guid,
//  $_POST['memberID'],
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['position'],
  $_POST['email'],
  $_POST['radioNum'],
  $_POST['station']
]);

// Step 4: Output
header('HTTP/1.1 303 See Other');

// Might need to change file structure here...
header('Location: ../memberrecords/?guid='.$guid);
