const employee = {
  name: "Subas",
  address: { country: "Bangladesh", city: "Dhaka" },
};

// copy using same memory / address
// const employee2 = employee;
// employee2.name = "Mir";

// console.log({ employee, employee2 });

// copy separate object using spread operator, uses separate memory
const employee2 = {
  ...employee,
  name: "Mir",
  address: { ...employee.address, city: "Chittagong" }, // nested object
};

console.log(employee == employee2);
console.log(employee, employee2);
