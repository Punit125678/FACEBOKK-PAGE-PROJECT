
function cheakpasss()
	{
		let old = document.getElementById("orignal_pass").value;
		let new1 = document.getElementById("conform_pass").value;
		let savedPass = localStorage.getItem("password");
		if(old == savedPass)
			{
				old = new1;
				document.getElementById("orignal_pass").style.borderColor = "green"
				document.getElementById("conform_pass").style.borderColor = "green";
				localStorage.setItem("password", new1);
				
			}
		else
			{
				document.getElementById("orignal_pass").style.borderColor = "red";
				document.getElementById("conform_pass").style.borderColor = "red";

			}

	}