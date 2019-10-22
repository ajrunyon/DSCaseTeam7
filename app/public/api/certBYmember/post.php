<?php

// Step 0: Validation
use Ramsey\Uuid\Uuid;
$guid = Uuid::uuid4()->toString();
$db = DbConnection::getConnection();
// Step 1: Get a database connection from our help
$stmt = $db->prepare(
  'INSERT INTO MemberCert
    (memCert, certID, memberID, datecertified, expirationDate)
  Values (?, ?, ?, ?, ?)'
);

$stmt->execute([
  $guid,
  $_POST['certID'],
  $_POST['memberID'],
  $_POST['datecertified'],
  $_POST['expirationDate'],
]);

// Step 4: Output
header('HTTP/1.1 303 See Other');

// Might need to change file structure here...?guid='.$guid
header('Location: ../certBYmember/?guid='.$guid);
