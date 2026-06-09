document.addEventListener("DOMContentLoaded", () => {
    
    const form = document.getElementById("checkout-form");
  const step1 = document.getElementById("step1");
  const step2 = document.getElementById("step2");
  const nextBtn = document.getElementById("nextBtn");
  const backBtn = document.getElementById("backBtn");
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
    cardNumber: document.getElementById("card-number"),
    expiry: document.getElementById("exp-date"),
    cvv: document.getElementById("cvv")
  };

  fields.name.addEventListener("change", (e)=>{
    let value = e.target.value.replace(/[^A-Za-z\s'\-]/g, "");
    value = value.replace(/\b\w/g, (char) => char.toUpperCase());
    e.target.value = value;
  });

  fields.email.addEventListener("change", (e) => {
  let value = e.target.value.replace(/[^A-Za-z0-9@._\-+]/g, "");
  e.target.value = value.toLowerCase(); 
});

fields.phone.addEventListener("change", (e) => {
  let value = e.target.value.replace(/[^0-9\s\-()+]/g, "");
  e.target.value = value.trim();
});

fields.country.addEventListener("change", (e) => {
  let value = e.target.value.replace(/[^A-Za-z\s\-]/g, "");
  value = value.replace(/\b\w/g, (char) => char.toUpperCase());
  e.target.value = value.trim();
});

fields.city.addEventListener("change", (e) => {
  let value = e.target.value.replace(/[^A-Za-z\s\-]/g, "");
  value = value.replace(/\b\w/g, (char) => char.toUpperCase());
  e.target.value = value.trim();
});

fields.address.addEventListener("change", (e) => {
  let value = e.target.value.replace(/[^A-Za-z\s\-]/g, "");
  value = value.replace(/\b\w/g, (char) => char.toUpperCase());
  e.target.value = value.trim();
});

fields.postalCode.addEventListener("change", (e) => {
  let value = e.target.value.replace(/[^A-Za-z0-9\s\-]/g, "");
  e.target.value = value.toUpperCase().trim();
});



});