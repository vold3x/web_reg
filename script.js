document.addEventListener("DOMContentLoaded", () => {
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const showPassword = document.getElementById("showPassword");
    const submitButton = document.getElementById("submitButton");
  
    const validateField = (input, regex, errorMessage) => {
      const errorElement = input.nextElementSibling;
      if (!regex.test(input.value)) {
        input.classList.add("invalid");
        input.classList.remove("valid");
        errorElement.textContent = errorMessage;
        return false;
      } else {
        input.classList.remove("invalid");
        input.classList.add("valid");
        errorElement.textContent = "";
        return true;
      }
    };
  
    const validateForm = () => {
      const isFirstNameValid = validateField(
        firstName,
        /^[А-ЯA-Z][а-яa-zА-ЯA-Z]*$/,
        "Ім'я має починатися з великої літери і містити лише літери."
      );
      const isLastNameValid = validateField(
        lastName,
        /^[А-ЯA-Z][а-яa-zА-ЯA-Z]*$/,
        "Прізвище має починатися з великої літери і містити лише літери."
      );
      const isEmailValid = validateField(
        email,
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Невірний формат e-mail."
      );
      const isPasswordValid = validateField(
        password,
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
        "Пароль має містити хоча б одну велику літеру, одну маленьку літеру, одну цифру, один спеціальний символ і бути не менше 8 символів."
      );
  
      submitButton.disabled = !(isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid);
    };
  
    firstName.addEventListener("input", validateForm);
    lastName.addEventListener("input", validateForm);
    email.addEventListener("input", validateForm);
    password.addEventListener("input", validateForm);
  
    showPassword.addEventListener("change", () => {
      password.type = showPassword.checked ? "text" : "password";
    });
  
    document.getElementById("loginForm").addEventListener("submit", (e) => {
      e.preventDefault();
      console.log({
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
      });
      alert("Форма успішно заповнена!");
    });
  });
  