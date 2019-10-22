<?php

// Step 1: Get a database connection from our help class
$db = DbConnection::getConnection();

//Step 2: Create & Run the Query
$stmt = $db->prepare(
    'DELETE FROM Member
    WHERE memberID = ?'
);
$stmt->execute([$_POST['memberID']]);



// $certifications = $stmt->fetchAll();
//
// //Step 3: Convert to Json
// $json = json_encode($certifications, JSON_PRETTY_PRINT);
//
// // Step 4: Output
// header('Content-Type: appliction/json');
// echo $json;
