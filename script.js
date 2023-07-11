function calculate() {
    // Retrieve input value
    const grossSalary = parseFloat(document.getElementById('grossSalary').value);
  
    // Calculate social tax (social security contributions)
    const socialTax = (grossSalary * 0.1113).toFixed(2);
  
    // Calculate health insurance contribution
    const healthInsurance = (grossSalary * 0.01).toFixed(2);
  
    // Calculate taxable income (after deducting social tax and health insurance)
    const taxableIncome = (grossSalary - socialTax - healthInsurance).toFixed(2);
  
    // Calculate personal income tax
    let personalIncomeTax = 0;
    if (taxableIncome <= 300) {
      personalIncomeTax = 0;
    } else if (taxableIncome <= 4000) {
      personalIncomeTax = (taxableIncome * 0.2 - 60).toFixed(2);
    } else {
      personalIncomeTax = (taxableIncome * 0.23 - 600).toFixed(2);
    }
  
    // Calculate net salary
    const netSalary = (grossSalary - socialTax - healthInsurance - personalIncomeTax).toFixed(2);
  
    // Display results
    document.getElementById('socialTax').value = socialTax;
    document.getElementById('healthInsurance').value = healthInsurance;
    document.getElementById('personalIncomeTax').value = personalIncomeTax;
    document.getElementById('netSalary').value = netSalary;
  }
  
  function resetForm() {
    // Clear input fields and results
    document.getElementById('grossSalary').value = '';
    document.getElementById('socialTax').value = '';
    document.getElementById('healthInsurance').value = '';
    document.getElementById('personalIncomeTax').value = '';
    document.getElementById('netSalary').value = '';
  }
  