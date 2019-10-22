<?php

// Step 0: Validation
use Ramsey\Uuid\Uuid;
$guid = Uuid::uuid4()->toString();

// Step 1: Get a database connection from our help
$stmt = $db->prepare(
  'INSERT INTO MemberCert
    (memCert, certID, memberID)
  Values (?, ?, ?)'
);

$stmt->execute([
  $guid,
  $_POST['certID'],
  $_POST['memberID'],
]);

// Step 4: Output
header('HTTP/1.1 303 See Other');

// Might need to change file structure here...?guid='.$guid
header('Location: ../certBYmember/?guid='.$guid);
