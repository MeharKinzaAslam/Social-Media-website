



/*-----------------------Username and Password Field Validation---------------------------------------------------- */

    function validation() {
      
      var user = document.getElementById("user").value;
      var pass = document.getElementById("pass").value;
 
      if (user == "") {
        
        alert("** Please fill the username field");
        return false;
      }
      if (user.length <= 2 || user.length > 20) {
         alert("** Username lenght must be between 2 and 20");
        return false;
      }
      if (!isNaN(user)) {
          alert("** only characters are allowed");
        return false;
      }
 
      if (pass == "") {
          alert("**Please fill the password field");
        return false;
      }
      if (pass.length <= 5 || pass.length > 20) {
        alert(" ** Passwords lenght must be between  5 and 20");
        return false;
      }
    }



/*---------------------------------Validate user--------------------------*/

async function ValidateUser(e) {
  e.preventDefault();
  const username = document.getElementById('user').value;
  const password = document.getElementById('pass').value;

  

  try {
    const getData = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
      })
    })
    const data = await getData.json();
    localStorage.setItem('data', JSON.stringify(data));
    if (!data.token) {
      alert("please enter valid credentials");

    } else {
      window.location.replace("home.html")
    }

  }
  catch (e) {
    console.log(e.error);
  }
}
 let userValidate = document.querySelector('.form');
 userValidate.addEventListener('submit', ValidateUser);








 
    