<?php 
require_once('config.php');
?>
<!DOCTYPE html> 
<html> 
<head> 
    <title>Hair4U Client Registration  </title>
</head> 
<body> 


    <div> 
		
        <form action="registration.php" method="post"> 
			<div class="container"> 
			
				<div class="row">
					<div class="col-sm-3"> 
					
						<h1 id="headx">Registration</h1> 
						<p>Fill in your personal details to register a new account</p> 
						<hr class="mb-3">

						<label for="firstname"><b>First Name</b></label> 
						<input class="form-control" type="text" id="firstname" name="firstname" required> 		  

						<label for="lastname"><b>Last Name</b></label> 
						<input class="form-control" type="text" id="lastname" name="lastname" required> 		  

						<label for="email"><b>Email Address</b></label> 
						<input class="form-control" type="email" id="email" name="email" required> 		  

						<label for="phonenumber"><b>Phone Number</b></label> 
						<input class="form-control" type="text" id="phonenumber" name="phonenumber" required> 	  

						<label for="gender"><b>Gender</b></label>				
						<ul><input type="radio" name="gender" id="gender"
						<?php if (isset($gender) && $gender=="female") echo "checked";?>    value="female">Female <br>
						<input type="radio" name="gender" 
						<?php if (isset($gender) && $gender=="male") echo "checked";?>      value="male">Male <br>
						<input type="radio" name="gender" 
						<?php if (isset($gender) && $gender=="other") echo "checked";?>     value="other">Other <br>
						</ul>
			  

						<label for="password"><b>Password</b></label> 
						<input class="form-control" type="password" id="password" name="password" required> 

			  
						<hr class="mb-3">
						<input class="btn btn-primary" type="submit" id="register" name="create" value="Sign Up"> 
		
					</div>
				</div>
	  
			</div> 
        </form> 

    </div> 
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@8"></script>
<script type="text/javascript">
	$(function(){
		$('#register').click(function(e){
			
			var valid = this.form.checkValidity();
			
			if(valid){
				
			var firstname 	= $('#firstname').val();
			var lastname 	= $('#lastname').val();
			var email	    = $('#email').val();
			var phonenumber = $('#phonenumber').val();
			var gender 		= $('#gender').val();
			var password 	= $('#password').val();
			
			
				e.preventDefault();	

				$.ajax({
					type: 'POST',
					url: 'process.php',
					data: {firstname: firstname,lastname: lastname,email: email,phonenumber: phonenumber,gender: gender,password: password},
					success: function(data){
					Swal.fire({
								'title': 'Successful',
								'text' : data,
								'type': 'success'
								})
							
					},
					error: function(data){
						Swal.fire({
								'title': 'Errors',
								'text': 'User unsuccessfully registered.',
								'type': 'error'
								})
					}
				});

			}
			
		});		

		
	});
	
</script>
</body>
</html>
