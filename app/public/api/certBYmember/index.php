<?php

// Step 1: Get a database connection from our help class
$db = DbConnection::getConnection();

//Step 2: Create & Run the Query (Not sure if foregin keys are correct)
if (isset($_GET['guid'])) {
  $stmt = $db->prepare(
    'SELECT * FROM MemberCert
    WHERE memCert = ?'
  );
  $stmt->execute([$_GET['guid']]);
} else {
  $stmt = $db->prepare('SELECT * FROM MemberCert');
  $stmt->execute();
}

//haven't created $members yet
$certbymembers = $stmt->fetchAll();

//Step 3: Convert to Json
$json = json_encode($certbymembers, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: appliction/json');
echo $json;
