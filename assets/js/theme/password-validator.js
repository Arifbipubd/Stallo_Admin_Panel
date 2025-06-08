const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const passwordErrorTextHolder = document.querySelector('#passwordError');
const inputGroup = document.querySelectorAll('.password');



inputGroup.forEach(item => {
  const passwordInputField = item.querySelector('input[type="password"]');
  const togglePassword = item.querySelector(".togglePassword");
  togglePassword.addEventListener("click", function () {
    const type = passwordInputField.getAttribute("type") === "password" ? "text" : "password";
    passwordInputField.setAttribute("type", type);
    this.classList.toggle("ti-eye");
    this.classList.toggle("ti-eye-off");
  });
});


if (password && confirmPassword) {
  if (confirmPassword) confirmPassword.disabled = true;

  password.addEventListener("input", function () {
    const passwordVal = password.value.trim();

    if (passwordVal === "") {
      confirmPassword.value = "";
      confirmPassword.disabled = true;
      confirmPassword.setCustomValidity("");
      passwordErrorTextHolder.innerHTML = "";
      confirmPassword.classList.remove("is-invalid", "is-valid");
    } else {
      confirmPassword.disabled = false;
    }
  });

  confirmPassword && confirmPassword.addEventListener("input", function () {
    const passwordVal = password.value.trim();
    const confirmPasswordVal = confirmPassword.value.trim();

    if (confirmPasswordVal === "") {
      confirmPassword.setCustomValidity("");
      passwordErrorTextHolder.innerHTML = "";
      password.classList.remove("is-invalid");
      confirmPassword.classList.remove("is-invalid");
    } else if (passwordVal !== confirmPasswordVal) {
      confirmPassword.setCustomValidity("Passwords do not match");
      passwordErrorTextHolder.innerHTML = "Passwords do not match";
      confirmPassword.classList.add("is-invalid");
      password.classList.add("is-invalid");
    } else {
      confirmPassword.setCustomValidity("");
      passwordErrorTextHolder.innerHTML = "";
      confirmPassword.classList.remove("is-invalid");
      password.classList.remove("is-invalid");
    }
  });
}

