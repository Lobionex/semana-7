const generatePassword = () => {
    const passwordLength = document.getElementById("password-length").value;
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=";
    const allChars = lowerCase + upperCase + numbers + symbols;
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    document.getElementById("password").innerHTML = password;
  };
  
  document.getElementById("generate-password").addEventListener("click", generatePassword);