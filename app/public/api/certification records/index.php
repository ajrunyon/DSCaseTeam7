<?php

// Step 1: Get a database connection from our help class
$db = DbConnection::getConnection();

//Step 2: Create & Run the Query
if (isset($_GET['guid'])) {
  $stmt = $db->prepare(
    'SELECT * FROM Certifications
    WHERE certID = ?'
  );
  $stmt->execute([$_GET['guid']]);
} else {
  $stmt = $db->prepare('SELECT * FROM Certifications');
  $stmt->execute();
}

//haven't created $members yet
$members = $stmt->fetchAll();

//Step 3: Convert to Json
$json = json_encode($members, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: appliction/json');
echo $json;
