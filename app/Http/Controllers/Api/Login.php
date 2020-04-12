<?php
$host = "localhost"; 
$user = "root"; 
$password = ""; 
$dbname = "nstarter"; 
$id = '';



if(isset($_SERVER['PATH_INFO']))
{
  

  $request = explode('/', trim($_SERVER['PATH_INFO'],'/'));
  $method = $_SERVER['REQUEST_METHOD']; 
  Log::info("Request passed to Login.php");
  Log::info($method);
  
  $con = mysqli_connect($host, $user, $password,$dbname);
  
  if (!$con) {
    Log::info(print_r(  "Connection failed" , true));
    die("Connection failed: " . mysqli_connect_error());
  }
  else{
    Log::info(print_r(  "Connection success" , true));
  
  }
  
  
  switch ($method) {
      case 'GET':
        $id = $_GET['id'];
        $sql = "select * from contacts".($id?" where id=$id":''); 
        break;
      case 'POST':
        $password = $_POST["password"];
        $email = $_POST["email"];
        $country = $_POST["country"];
        $city = $_POST["city"];
        $job = $_POST["job"];
  
        $sql = "insert into user (Password, Useremail, Surname, Name, Birthdate) values ('$password', '$email', '', '', '')"; 
        break;
  }
  
  // run SQL statement
  $result = mysqli_query($con,$sql);
  Log::info(print_r(  "Connection result:" , true));
  Log::info(print_r(  $result , true));
  
  // die if SQL statement failed
  if (!$result) {
    http_response_code(404);
    die(mysqli_error($con));
  }
  
  if ($method == 'GET') {
      if (!$id) echo '[';
      for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
        echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
      }
      if (!$id) echo ']';
    } elseif ($method == 'POST') {
      echo json_encode($result);
    } else {
      echo mysqli_affected_rows($con);
    }
  
  $con->close();

}
