<?php

// Step 0: Validation

// Step 1: Get a database connection from our help
$db = DbConnection::getConnection();

// Step 2: Create and Run the Query
$stmt = $db->prepare(
  'INSERT INTO MemberCert
    (memCert, memberID, datecertified, expirationdate, certID)
  Values (?, ?, ?, ?, ?)'
);
$stmt->execute([
  $guid,
  $_POST['memCert'],
  $_POST['memberID'],
  $_POST['datecertified'],
  $_POST['expirationdate'],
  $_POST['certID'],
]);

// Step 4: Output
header('HTTP/1.1 303 See Other');

// Might need to change file structure here...
header('Location:.../member records/?guid='.$guid);
