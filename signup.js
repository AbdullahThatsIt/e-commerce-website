//     // Code for toggling password visibility

//     const pwShowHide = document.querySelectorAll(".eye-icon");
//     pwShowHide.forEach((eyeIcon) => {
//     eyeIcon.addEventListener("click", () => {
//         let pwFields =
//         eyeIcon.parentElement.parentElement.querySelectorAll(".password");
//         pwFields.forEach((password) => {
//         if (password.type === "password") {
//             password.type = "text";
//             eyeIcon.classList.replace("fa-eye-slash", "fa-eye");    
//         } else {
//             password.type = "password";
//             eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
//         }
//         });
//     });
//     });

//     // Function to handle Signup submission

//     function signup() {
//     // event.preventDefault();

//     var email = document.getElementById("email").value;
    
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       alert("Please enter a valid email address.");
//       return;
//     }

//     var fullname = document.getElementById("fullname").value;
//     var gender = document.getElementById("gender").value;
//     var city = document.getElementById("city").value;

//     var password = document.getElementById("password").value;
//     var confirmpassword = document.getElementById("confirmpassword").value;

//     if (password !== confirmpassword) {
//         alert("Passwords do not match! Please re-enter your password.");
//         return; // Prevent form submission if passwords don't match
//     }

//     const requiredFields = ["email", "fullname", "gender", "city", "password", "confirmpassword"];
//     let hasEmptyField = false;
  
//     for (const field of requiredFields) {
//       const inputValue = document.getElementById(field).value;
//       if (inputValue === "") {
//         alert(`Please enter your ${field}.`);
//         hasEmptyField = true;
//         break; // Exit the loop if an empty field is found (optional)
//       }
//     }    // Check password match and prevent submission if passwords don't match (existing code)
  
//     if (!hasEmptyField) {

//                 // Retrieve existing signup details array from local storage or initialize an empty array
//                 let signupDetails = JSON.parse(localStorage.getItem("signupDetails")) || [];

//                 const existingUser = signupDetails.find(user => user.email === email);

//                 if (existingUser) {
//                     // If the user already exists, alert the user and prompt them to sign in
//                     alert("User already registered. Please sign in.");
//                     return;
//                 }

//                 const signupData = [
//                     {
//                         email: "example1@exp.com",
//                         fullname: "Abdullah",
//                         gender: "Male",
//                         city: "Lahore", 
//                         password: "pass1"
//                     },
//                     {
//                         email: "example2@exp.com",
//                         fullname: "Huzaifa Kamran",
//                         gender: "Female",
//                         city: "Islamabad",
//                         password: "pass2"
//                     },
//                     {
//                         email: "example3@exp.com",
//                         fullname: "Zain",
//                         gender: "Prefer not to say",
//                         city: "Karachi",
//                         password: "pass3"
//                     }
//                 ];
        
//                 if (signupDetails.length === 0) {
//                     signupDetails = signupDetails.concat(signupData);
//                 }
        
//                 // Push the new signup details into the array
//                 signupDetails.push({
//                     email: email,
//                     fullname: fullname,
//                     gender: gender,
//                     city: city,
//                     password: password
//                 });

//                 console.log("Updated Signup Details:", signupDetails);
        
//                 // Convert the updated array into a JSON string
//                 const updatedSignupDetails = JSON.stringify(signupDetails);
        
//                 // Store the updated JSON string back into local storage
//                 localStorage.setItem("signupDetails", updatedSignupDetails);
        
//     console.log("Form Submitted");
    
//         alert("Signup successful!");
//   window.location.href = "login.html";
//       }

//     }


//     // Function to handle Signin submission

//     function signin() {
//         var email = document.getElementById("email").value;
//         var password = document.getElementById("password").value;
    
//         // Retrieve signupData and signupDetails arrays from local storage
//     let signupDetails = JSON.parse(localStorage.getItem("signupDetails")) || [];

//     // Check if there is a user with the provided email and password in signupDetails
//     const userInDetails = signupDetails.find(user => user.email === email && user.password === password);

//         // if (userInData || userInDetails) {
//         if (userInDetails) {
//             alert("Login successful!");
//             // Redirect to the dashboard or home page
//             window.location.href = "home.html";
//         } else {
//             // If the user is not found in the signupDetails array
//             alert("Incorrect email or password. If you're a new user, please sign up.");
//         }
//     }
    

// // Function to toggle forgot password section and login form

// function toggleForgotPassword() {
//     var forgotPasswordSection = document.getElementById("forgotPasswordSection");
//     var loginForm = document.getElementById("loginForm");

//     if (forgotPasswordSection.style.display === "none") {
//         // Show forgot password section
//         forgotPasswordSection.style.display = "block";
//         // Hide login form
//         loginForm.style.display = "none";
//     } else {
//         // Hide forgot password section
//         forgotPasswordSection.style.display = "none";
//         // Show login form
//         loginForm.style.display = "block";
//     }
// }

// //Function for resetting password

// function updatePassword() {
//     // Get the entered email, new password, and confirm password
//     var email = document.getElementById("forgotEmail").value;

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       alert("Please enter a valid email address.");
//       return;
//     }

//     var newPassword = document.getElementById("newPassword").value;
//     var confirmPassword = document.getElementById("confirmPassword").value;

//     // Retrieve signupDetails array from local storage
//     let signupDetails = JSON.parse(localStorage.getItem("signupDetails")) || [];

//     // Find the user with the provided email in signupDetails
//     const user = signupDetails.find(user => user.email === email);

//     // Check if the user exists
//     if (user) {
//         // Check if new password matches confirm password
//         if (newPassword === confirmPassword) {
//             // Update the password for the user
//             user.password = newPassword;

//             // Update signupDetails in local storage
//             localStorage.setItem("signupDetails", JSON.stringify(signupDetails));

//             // Show success message
//             alert("Password changed successfully!");

//             // Automatically login with the new password
//             signin();
//         } else {
//             // Show error message if new password and confirm password do not match
//             alert("New password and confirm password do not match!");
//         }
//     } else {
//         // Show error message if email not found in signupDetails
//         alert("No email found. Please sign up.");
//     }
// }


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Function to handle Signup submission

function signup() {
  var email = $("#email").val();
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  var fullname = $("#fullname").val();
  var gender = $("#gender").val();
  var city = $("#city").val();
  var password = $("#password").val();
  var confirmpassword = $("#confirmpassword").val();

  if (password !== confirmpassword) {
    alert("Passwords do not match! Please re-enter your password.");
    return;
  }

  const requiredFields = ["email", "fullname", "gender", "city", "password", "confirmpassword"];
  let hasEmptyField = false;

  requiredFields.forEach(function(field) {
    if ($("#" + field).val() === "") {
      alert(`Please enter your ${field}.`);
      hasEmptyField = true;
    }
  });

  if (!hasEmptyField) {
    let signupDetails = JSON.parse(localStorage.getItem("signupDetails")) || [];

    const existingUser = signupDetails.find(user => user.email === email);

    if (existingUser) {
      alert("User already registered. Please sign in.");
      return;
    }

    const signupData = [
      { email: "example1@exp.com", fullname: "Abdullah", gender: "Male", city: "Lahore", password: "pass1" },
      { email: "example2@exp.com", fullname: "Huzaifa Kamran", gender: "Female", city: "Islamabad", password: "pass2" },
      { email: "example3@exp.com", fullname: "Zain", gender: "Prefer not to say", city: "Karachi", password: "pass3" }
    ];

    if (signupDetails.length === 0) {
      signupDetails = signupDetails.concat(signupData);
    }

    signupDetails.push({
      email: email,
      fullname: fullname,
      gender: gender,
      city: city,
      password: password
    });

    localStorage.setItem("signupDetails", JSON.stringify(signupDetails));
    
    alert("Signup successful!");
    window.location.href = "login.html";
  }
}

// Function to handle Signin submission
function signin() {
  var email = $("#email").val();
  var password = $("#password").val();

  let signupDetails = JSON.parse(localStorage.getItem("signupDetails")) || [];

  const userInDetails = signupDetails.find(user => user.email === email && user.password === password);

  if (userInDetails) {
    alert("Login successful!");
    window.location.href = "home.html";
  } else {
    alert("Incorrect email or password. If you're a new user, please sign up.");
  }
}

// Function to toggle forgot password section and login form
function toggleForgotPassword() {
  var forgotPasswordSection = $("#forgotPasswordSection");
  var loginForm = $("#loginForm");

  if (forgotPasswordSection.is(":hidden")) {
    forgotPasswordSection.show();
    loginForm.hide();
  } else {
    forgotPasswordSection.hide();
    loginForm.show();
  }
}

// Function for resetting password
function updatePassword() {
  var email = $("#forgotEmail").val();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  var newPassword = $("#newPassword").val();
  var confirmPassword = $("#confirmPassword").val();

  let signupDetails = JSON.parse(localStorage.getItem("signupDetails")) || [];

  const user = signupDetails.find(user => user.email === email);

  if (user) {
    if (newPassword === confirmPassword) {
      user.password = newPassword;
      localStorage.setItem("signupDetails", JSON.stringify(signupDetails));
      alert("Password changed successfully!");
      signin();
    } else {
      alert("New password and confirm password do not match!");
    }
  } else {
    alert("No email found. Please sign up.");
  }
}

$(document).ready(function() {
    // Code for toggling password visibility
    $(".eye-icon").on("click", function() {
        // Select both password fields
        let pwFields = $(".password-container .password");
        pwFields.each(function() {
            if ($(this).attr("type") === "password") {
                $(this).attr("type", "text");
                $(".eye-icon").removeClass("fa-eye-slash").addClass("fa-eye");
            } else {
                $(this).attr("type", "password");
                $(".eye-icon").removeClass("fa-eye").addClass("fa-eye-slash");
            }
        });
    });
});

  // Event bindings
  $("#signupForm").on("submit", function(event) {
    event.preventDefault();
    signup();
  });

  $("#signinForm").on("submit", function(event) {
    event.preventDefault();
    signin();
  });

  $("#toggleForgotPassword").on("click", function() {
    toggleForgotPassword();
  });

  $("#forgotPasswordForm").on("submit", function(event) {
    event.preventDefault();
    updatePassword();
  });

