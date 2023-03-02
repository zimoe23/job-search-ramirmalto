const { toRefs, reactive } = require("vue");

const person = {
  firstName: "Ramir",
  lastName: "Malto",
};

const refPerson = toRefs(reactive(person));
console.log(refPerson);
