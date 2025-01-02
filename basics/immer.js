import { produce } from "immer";

const employee = {
  name: "Subas",
  address: { country: "Bangladesh", city: "Dhaka" },
};
// copy object using Immer
const employee2 = produce(employee, (draft) => {
  draft.name = "Mezba";
  draft.address = "Cittagong";
});

console.log(employee, employee2);
