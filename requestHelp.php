<?php
// Database connection details
$host = "localhost";       // Change if needed
$user = "root";            // Your MySQL username
$pass = "";                // Your MySQL password
$dbname = "webpatient";    // Your database name

// Create connection
$conn = new mysqli($host, $user, $pass, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Process form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Generate unique request ID (e.g., RQ20250817001)
    $request_id = "RQ" . date("YmdHis");

    // Collect form data safely
    $request_type = $conn->real_escape_string($_POST['request-type']);
    $patient_name = $conn->real_escape_string($_POST['name']);
    $email = $conn->real_escape_string($_POST['email']);
    $phone = $conn->real_escape_string($_POST['phone']);
    $location = $conn->real_escape_string($_POST['location']);
    $description = $conn->real_escape_string($_POST['description']);

    // Insert into database
    $sql = "INSERT INTO emergency_requests 
            (request_id, patient_name, email, phone, location, request_type, description) 
            VALUES 
            ('$request_id', '$patient_name', '$email', '$phone', '$location', '$request_type', '$description')";

    if ($conn->query($sql) === TRUE) {
        echo "<h2>✅ Emergency Request Submitted Successfully!</h2>";
        echo "<p>Your Request ID: <strong>$request_id</strong></p>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close connection
$conn->close();
?>
