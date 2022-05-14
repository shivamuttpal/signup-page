let container = document.getElementById('container')


toggle = () => {
	container.classList.toggle('sign-in')
	container.classList.toggle('sign-up')
}


setTimeout(() => {
	container.classList.add('sign-in')
}, 200)


function validateForm() {
	
	let x = document.forms["myForm"]["pword1"].value;
	let y = document.forms["myForm"]["pword2"].value;
	let a = document.forms["myForm"]["uname"].value;
	let b = document.forms["myForm"]["uemail"].value;
	if (a == "" || b=="") {
		alert("username or email must be filled out");
		// validateForm();
		return false;
	}
	if (x == "" || y=="") {
	  alert("password must be filled out");
	  return false;
	}
	if(x.length<8 || y.length<8){
		alert("password length should be greater than 8 ");
		return false;
	}
	if(x.length!=y.length || x!=y){
		alert("password and confirm password should be equal");
		return false;
	}
	else{
		return true;
	}
  }
function validatedForm() {
	let s = document.forms["myFormat"]["uname1"].value;
	let t = document.forms["myFormat"]["pword3"].value;
	
	if (s == "" || t=="") {
		alert("username or email must be filled out");
		return false;
	}
	if(t.length<8){
		alert("password length should be greater than 8 ");
		return false;
	}
	else{
		return true;
	}
  }
