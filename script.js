const ukraine = {
  tax: 0.195,
  middleSalary: 1789,
  vacancies: 11476
};
const latvia = {
  tax: 0.25,
  middleSalary: 1586,
  vacancies: 3921
};
const litva = {
  tax: 0.15,
  middleSalary: 1509,
  vacancies: 1114
};

//(1 function)
const getMyTaxes = function(salary) {
  return salary * this.tax
}

console.log("My taxes if i am IT specialist", getMyTaxes.call(ukraine, 2500));

//(2 function)
const getMiddleTaxes = function() {
  return this.tax * this.middleSalary;
}

console.log("Middle taxes in countries", getMiddleTaxes.call(litva));

//(3 function)
const getTotalTaxes = function() {
  return this.tax * this.middleSalary * this.vacancies;
}

console.log("Total taxes in countries", getTotalTaxes.call(latvia));

//(4 function)
const getMySalary = function() {
  setInterval(() => {
    const salary = Math.floor(Math.random() * (2000 - 1500) + 1500);
    const taxOfSalary = (this.tax * salary).toFixed();
    const profit = (salary - taxOfSalary).toFixed();
    const mySalary = {
      salary: salary,
      taxOfSalary: taxOfSalary,
      profit: profit,
    }
    console.log(mySalary);
  }, 2000)
}

getMySalary.call(ukraine);