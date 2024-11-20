function calculateRetirement() {
  const currentYear = new Date().getFullYear();
  const name = document.getElementById('name').value;
  const birthYear = parseInt(document.getElementById('birthYear').value);
  const employmentYear = parseInt(document.getElementById('employmentYear').value);


  const age = currentYear - birthYear;
  const yearsOfService = currentYear - employmentYear;


  const retirementAge = 60;
  const maxYearsOfService = 35;


  let message = "";

  


  if (age >= retirementAge) {
    message = `Hello ${name}, you have reached or passed the retirement age of 60 years. You are now a retiree.`;
  } else if (yearsOfService >= maxYearsOfService) {
    message = `Hello ${name}, you have served for ${yearsOfService} years, which is the maximum of 35 years of service. You are now a retiree.`;
  } else {
    const yearsToRetirementAge = retirementAge - age;
    const yearsToMaxService = maxYearsOfService - yearsOfService;
    const yearsLeft = Math.min(yearsToRetirementAge, yearsToMaxService);

    message = `Hello ${name}, you have ${yearsLeft} years left until retirement.`;
  }

  
  document.getElementById('message').textContent = message;
}

