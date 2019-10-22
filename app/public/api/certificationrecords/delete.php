<?php

// Step 1: Get a database connection from our help class
$db = DbConnection::getConnection();

//Step 2: Create & Run the Query
$stmt = $db->prepare(
    'DELETE FROM Certifications
    WHERE certID = ?'
);
$stmt->execute([$_POST['certID']]);



// $certifications = $stmt->fetchAll();
//
// //Step 3: Convert to Json
// $json = json_encode($certifications, JSON_PRETTY_PRINT);
//
// // Step 4: Output
// header('Content-Type: appliction/json');
// echo $json;
