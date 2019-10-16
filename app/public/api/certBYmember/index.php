<?php

// Step 1: Get a database connection from our help class
$db = DbConnection::getConnection();

//Step 2: Create & Run the Query (Not sure if foregin keys are correct)
$stmt = $db->prepare(
  'SELECT *
  FROM Member m, Certifications c, MemberCert mc,
  WHERE c.certID = mc.certID
  WHERE m.memberID = mc.memberID'
);

//haven't created $members yet
$stmt->execute();
$members = $stmt->fetchAll();

//Step 3: Convert to Json
$json = json_encode($members, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: appliction/json');
echo $json;
