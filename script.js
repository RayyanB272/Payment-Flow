document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("checkout-form");
  const step1 = document.getElementById("step1");
  const step2 = document.getElementById("step2");
  const nextBtn = document.getElementById("nextBtn");
  const backBtn = document.getElementById("backBtn");
  const submitBtn = document.getElementById("submitBtn");
  const stepIndicator1 = document.getElementById("stepIndicator1");
  const stepIndicator2 = document.getElementById("stepIndicator2");
  const statusDiv = document.getElementById("status");

  const fields = {
    name: document.getElementById("name"),
    email: document.getElementById("email"),
    phone: document.getElementById("phone"),
    country: document.getElementById("country"),
    city: document.getElementById("city"),
    address: document.getElementById("address"),
    postal: document.getElementById("postal"),
    cardName: document.getElementById("card-name"),
    cardNumber: document.getElementById("card-Number"),
    expiry: document.getElementById("exp-date"),
    cvv: document.getElementById("cvv")
  };

  fields.name.addEventListener("input", (e) => {
    let value = e.target.value.replace(/[^A-Za-z\s'\-]/g, "");
    value = value.replace(/\b\w/g, (char) => char.toUpperCase());
    e.target.value = value;
  });

  fields.email.addEventListener("input", (e) => {
    let value = e.target.value.replace(/[^A-Za-z0-9@._\-+]/g, "");
    e.target.value = value.toLowerCase();
  });

  fields.phone.addEventListener("input", (e) => {
    let value = e.target.value.replace(/[^0-9\s\-()+]/g, "");
    e.target.value = value;
  });

  fields.country.addEventListener("input", (e) => {
    let value = e.target.value.replace(/[^A-Za-z\s\-]/g, "");
    value = value.replace(/\b\w/g, (char) => char.toUpperCase());
    e.target.value = value;
  });

  fields.city.addEventListener("input", (e) => {
    let value = e.target.value.replace(/[^A-Za-z\s\-]/g, "");
    value = value.replace(/\b\w/g, (char) => char.toUpperCase());
    e.target.value = value;
  });

  fields.address.addEventListener("input", (e) => {
    let value = e.target.value.replace(/[^A-Za-z0-9\s,\.\-]/g, "");
    e.target.value = value;
  });

  fields.postal.addEventListener("input", (e) => {
    let value = e.target.value.replace(/[^A-Za-z0-9\s\-]/g, "");
    e.target.value = value.toUpperCase();
  });

  fields.cardNumber.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.match(/.{1,4}/g)?.join(" ") || value;
    e.target.value = value.slice(0, 19); 
  });

  fields.expiry.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 2) {
      value = value.slice(0, 2) + " / " + value.slice(2, 4);
    }
    e.target.value = value.slice(0, 7); 
  });

  fields.cvv.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "");
    e.target.value = value.slice(0, 4);
  });

  const showError = (input, message) => {
    const errorDisplay = input.nextElementSibling;
    if (errorDisplay && errorDisplay.classList.contains("error")) {
      errorDisplay.textContent = message;
    }
    input.classList.add("input-error");
  };

  const clearError = (input) => {
    const errorDisplay = input.nextElementSibling;
    if (errorDisplay && errorDisplay.classList.contains("error")) {
      errorDisplay.textContent = "";
    }
    input.classList.remove("input-error");
  };

  const validateStep1 = () => {
    let isValid = true;

    if (!fields.name.value.trim()) {
      showError(fields.name, "Full name is required");
      isValid = false;
    } else {
      clearError(fields.name);
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!fields.email.value.trim() || !emailPattern.test(fields.email.value)) {
      showError(fields.email, "Enter a valid email address");
      isValid = false;
    } else {
      clearError(fields.email);
    }

    if (fields.phone.value.replace(/\D/g, "").length < 7) {
      showError(fields.phone, "Enter a valid phone number (min 7 digits)");
      isValid = false;
    } else {
      clearError(fields.phone);
    }

    if (!fields.country.value.trim()) {
      showError(fields.country, "Country is required");
      isValid = false;
    } else {
      clearError(fields.country);
    }

    if (!fields.city.value.trim()) {
      showError(fields.city, "City is required");
      isValid = false;
    } else {
      clearError(fields.city);
    }

    if (!fields.address.value.trim()) {
      showError(fields.address, "Address is required");
      isValid = false;
    } else {
      clearError(fields.address);
    }

    if (!fields.postal.value.trim()) {
      showError(fields.postal, "Postal code is required");
      isValid = false;
    } else {
      clearError(fields.postal);
    }

    return isValid;
  };

  const validateStep2 = () => {
    let isValid = true;

    if (!fields.cardName.value.trim()) {
      showError(fields.cardName, "Cardholder name required");
      isValid = false;
    } else {
      clearError(fields.cardName);
    }

    const cleanCard = fields.cardNumber.value.replace(/\s/g, "");
    if (cleanCard.length < 16) {
      showError(fields.cardNumber, "Enter a valid 16-digit card number");
      isValid = false;
    } else {
      clearError(fields.cardNumber);
    }

    const expiryPattern = /^(0[1-9]|1[0-2])\s\/\s([0-9]{2})$/;
    if (!expiryPattern.test(fields.expiry.value)) {
      showError(fields.expiry, "Use MM/YY format");
      isValid = false;
    } else {
      clearError(fields.expiry);
    }

    if (fields.cvv.value.trim().length < 3) {
      showError(fields.cvv, "Enter a valid CVV");
      isValid = false;
    } else {
      clearError(fields.cvv);
    }

    return isValid;
  };

  nextBtn.addEventListener("click", () => {
    if (validateStep1()) {
      step1.classList.remove("active");
      step2.classList.add("active");
      stepIndicator1.classList.remove("active");
      stepIndicator2.classList.add("active");
      statusDiv.className = ""; 
      statusDiv.textContent = "";
    }
  });

  backBtn.addEventListener("click", () => {
    step2.classList.remove("active");
    step1.classList.add("active");
    stepIndicator2.classList.remove("active");
    stepIndicator1.classList.add("active");
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (validateStep2()) {
      statusDiv.className = "processing";
      statusDiv.textContent = "Processing payment... Please wait.";
      
      submitBtn.disabled = true;
      backBtn.disabled = true;

      setTimeout(() => {
        statusDiv.className = "success";
        statusDiv.textContent = "🎉 Payment successful! Thank you for your order.";
        form.reset();
        
        submitBtn.disabled = false;
        backBtn.disabled = false;

        setTimeout(() => {
          statusDiv.textContent = "";
          statusDiv.className = "";
          
          step2.classList.remove("active");
          step1.classList.add("active");
          stepIndicator2.classList.remove("active");
          stepIndicator1.classList.add("active");
        }, 3000);
      }, 2000);

    } else {
      statusDiv.className = "error-message";
      statusDiv.textContent = "Please correct the errors before processing.";
    }
  });
});