<?php
require_once('config.php');
?>
<?php

if(isset($_POST)){

	$firstname 		= $_POST['firstname'];
	$lastname 		= $_POST['lastname'];
	$email 			= $_POST['email'];
	$phonenumber	= $_POST['phonenumber'];
	$gender 	 	= $_POST['gender'];
	$password 		= sha1($_POST['password']);

		$sql = "INSERT INTO clients (firstname, lastname, email, phonenumber, gender, password ) VALUES(?,?,?,?,?,?) ";
			$stmtinsert = $db->prepare($sql);
					
			$result = $stmtinsert->execute([$firstname, $lastname, $email, $phonenumber, $gender, $password]);
			if($result){
				echo 'Registration completed successfully.';
			}else{
				echo 'Registration was unsuccessful, Please try again!';

			}
}else{
	echo 'No data';
}