/* ================= SIGNUP ================= */
function signupUser() {

    let fname = document.getElementById("first_name").value;
    let lname = document.getElementById("second_name").value;
    let email = document.getElementById("email").value;
    let pass  = document.getElementById("pass").value;

    if(fname === "" || lname === "" || email === "" || pass === "") {
        alert("All fields required");
        return false;
    }

    
    localStorage.setItem("fb_fname", fname);
    localStorage.setItem("fb_lname", lname);
    localStorage.setItem("fb_email", email);
    localStorage.setItem("fb_pass", pass);

    alert("Signup Successful");
    window.location.href = "logine.html";
    return false;
}


/* ================= LOGIN ================= */
function loginUser() {

    let name  = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pass  = document.getElementById("pass").value;

    let s_fname = localStorage.getItem("fb_fname");
    let s_email = localStorage.getItem("fb_email");
    let s_pass  = localStorage.getItem("fb_pass");

    if(name === "" || email === "" || pass === "") {
        alert("All fields required");
        return;
    }

    if(name === s_fname && email === s_email && pass === s_pass) {
        alert("Login Successful");
        // yaha dashboard ya home bhej sakte ho
    } else {
        alert("Invalid Login Details");
    }
}


/* ================= RESET PASSWORD ================= */
function cheakpasss() {

    let oldPass = document.getElementById("orignal_pass").value;
    let newPass = document.getElementById("conform_pass").value;

    let savedPass = localStorage.getItem("fb_pass");

    if(oldPass === "" || newPass === "") {
        alert("Fill both fields");
        return;
    }

    if(oldPass === savedPass) {
        localStorage.setItem("fb_pass", newPass);
        alert("Password Changed Successfully");
        window.location.href = "logine.html";
    } else {
        alert("Old password incorrect");
    }
}
