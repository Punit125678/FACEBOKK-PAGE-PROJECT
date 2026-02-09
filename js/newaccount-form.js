function validation_form()
	{
		let result = true;
		let f_name = document.getElementById("first_name").value;
		if(f_name == "")
			{
				document.getElementById("first_name").style.borderColor = "red";
				result = false;
			}

		let surnem = document.getElementById("second_name").value;
		if(surnem == "")
			{
				document.getElementById("second_name").style.borderColor = "red";
				result = false;
			}

		let day = document.getElementById("day").value;
		let month = document.getElementById("month").value;
		let year = document.getElementById("year").value;

		if(day == "" || month == "" || year == "")
		{
    		document.getElementById("day").style.borderColor = "red";
    		document.getElementById("month").style.borderColor = "red";
    		document.getElementById("year").style.borderColor = "red";
    		result = false;
		}


		let email_num = document.getElementById("email").value;
		if(email_num == "")
				{
					document.getElementById("email").style.borderColor = "red";
					result = false;
				}

		let passwordd = document.getElementById("pass").value;
			if(passwordd == "")
			{
					document.getElementById("pass").style.borderColor = "red";
					result = false;
			}

			return result;
	}


	function toggleEye()
{
    let pass = document.getElementById("pass");
    let eye  = document.getElementById("eyeIcon");

    if(pass.type === "password")
    {
        pass.type = "text";
        eye.className = "fa fa-eye-slash";
    }
    else
    {
        pass.type = "password";
        eye.className = "fa fa-eye";
    }
}
