<?php

// Step 1: Get a database connection from our help class
$db = DbConnection::getConnection();
//$date = date('Y-m-d');
//Step 2: Create & Run the Query (Not sure if foregin keys are correct)
  $stmt = $db->prepare(
    'SELECT * FROM MemberCert
    WHERE expirationDate < NOW()'
  );
  $stmt->execute();


//haven't created $members yet
$expiredCertifications = $stmt->fetchAll();

//Step 3: Convert to Json
$json = json_encode($expiredCertifications, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: appliction/json');
echo $json;
