const person = {
  name: "Abir Hasan",
  height: `5.4"`,
  printName: function (name) {
    console.log(this.name);
  },
};

person.printName("Joy");
