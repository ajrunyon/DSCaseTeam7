<?php

// Step 0: Validation
use Ramsey\Uuid\Uuid;
$guid = Uuid::uuid4()->toString();
$db = DbConnection::getConnection();
// Step 1: Get a database connection from our help
$stmt = $db->prepare(
  'INSERT INTO Member
    (memberID, firstName, lastName, position, email, workphone, mobilephone, radionum, station, isActive, gender, address, DOB, startdate)
  Values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
);

$stmt->execute([
  $guid,
  $_POST['memberID'],
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['position'],
  $_POST['email'],
  $_POST['workphone'],
  $_POST['mobilephone'],
  $_POST['radioNum'],
  $_POST['station'],
  $_POST['isActive'],
  $_POST['gender'],
  $_POST['address'],
  $_POST['DOB'],
  $_POST['startDate'],
]);

// Step 4: Output
header('HTTP/1.1 303 See Other');

// Might need to change file structure here...
header('Location:.../member records/?guid='.$guid);
