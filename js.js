

function validateField(fieldId) {
    const currentYear = new Date().getFullYear();
    const value = document.getElementById(fieldId).value.trim();
    let errorMessage = "";
    
    if (fieldId === "day") {
      if (value === "" || isNaN(value) || +value < 1 || +value > 31) {
        errorMessage = "Day not valid";
      }
      document.getElementById("p_errorday").innerText = errorMessage;
    } else if (fieldId === "mounth") {
      if (value === "" || isNaN(value) || +value < 1 || +value > 12) {
        errorMessage = "Month not valid";
      }
      document.getElementById("p_errormounth").innerText = errorMessage;
    } else if (fieldId === "year") {
      if (value === "" || isNaN(value) || +value < 1971 || +value > currentYear) {
        errorMessage = "Year not valid";
      }
      document.getElementById("p_erroryear").innerText = errorMessage;
    }
  }
  
  function validateForm(e) {
    // Validate all fields at once
    e.preventDefault();
    validateField("day");
    validateField("mounth");
    validateField("year");
  
    // Check if all errors are empty (form is valid)
    const dayError = document.getElementById("p_errorday").innerText === "";
    const monthError = document.getElementById("p_errormounth").innerText === "";
    const yearError = document.getElementById("p_erroryear").innerText === "";
  
    if (dayError && monthError && yearError) {
        claclage()
      // Submit form or perform other actions here
    } else {
      console.log("Form is invalid. Please fix the errors.");
    }
  }
//    this function calcilator age birthday
  function claclage(){
    const day = parseInt(document.getElementById("day").value, 10);
    const month = parseInt(document.getElementById("mounth").value, 10) - 1; // Months are 0-based
    const year = parseInt(document.getElementById("year").value, 10);

    const today = new Date();
    const birthDate = new Date(year, month, day);

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    // Adjust age if the birth date hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      age--;
    }

    // Display age result
   document.getElementById("spanyears").textContent= age ;
   document.getElementById("spanmonths").textContent= monthDifference +1 ;
   document.getElementById("spandays").textContent= dayDifference ;
  }
