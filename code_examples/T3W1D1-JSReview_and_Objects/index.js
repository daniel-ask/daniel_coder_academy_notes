const readlineSync = require("readline-sync");
const { Computer, Electronic, Phone } = require("./classes");

// Wait for user's response.
// const userName = readlineSync.question("May I have your name? ");
// console.log("Hi " + userName + "!");

// function Person(name) {
//   this.name = name;
// }

// Handle the secret text (e.g. password).
// const favFood = readlineSync.question('What is your favorite food? ', {
//   hideEchoBack: true // The typed text on screen is hidden by `*` (default).
// });
// console.log('Oh, ' + userName + ' loves ' + favFood + '!');
const electronics = {};

function main() {
  console.log("Welcome!");
  // const nameInput = readlineSync.question("Enter your Name?: ");
  // const user = nameInput;
  // console.log(user);

  const menu = function () {
    console.log("1. Show All Electronics");
    console.log("2. Add Electronic");
    console.log("3. Delete Electronic");
    console.log("4. Exit");
    return parseInt(readlineSync.question("Choose your option "));
  };

  const processMenu = (choice) => {
    let key = "";
    switch (choice) {
      case 1:
        for (let electronic in electronics) {
          console.log(electronics[electronic].toString());
        }
        break;
      case 2:
        addElectronic();
        break;
      case 3:
        key = readlineSync.question("Key: ");
        delete electronics[key.toLowerCase().replace(" ", "")];
        break;
      case 4:
        console.log("Good bye");
        process.exit();
        break;
      case 5:
        key = readlineSync.question("Key: ");
        console.log(
          electronics[key.toLowerCase().replace(" ", "")].value()
        );
        break;
      default:
        console.log("Invalid input");
    }
  };

  function addElectronic() {
    try {
      const electronicName = readlineSync.question("Name:");
      const brandName = readlineSync.question("Brand: ");
      const price = parseFloat(readlineSync.question("Price: "));
      let device;
      let type = readlineSync.question("What type of electronic is it?");
      type = type.toLowerCase();
      console.log(type);
      if (type === "computer" || type === "c") {
        const ram = readlineSync.question("Computer ram: ");
        const cpu = readlineSync.question("Computer cpu: ");
        const screen = readlineSync.question("Computer screen: ");
        device = new Computer(
          electronicName,
          brandName,
          price,
          ram,
          cpu,
          screen
        );
      } else if (type === "phone" || type === "p") {
        const storage = readlineSync.question("Phone Storage Size: ");
        const model = readlineSync.question("Phone Model: ");
        device = new Phone(electronicName, brandName, price, storage, model);
      } else if (type === "electronics" || type === "e") {
        device = new Electronic(electronicName, brandName, price);
      } else {
        throw new Error("Invalid type");
      }
      console.log(device);
      electronics[electronicName.toLowerCase().replace(" ", "")] = device;
    } catch (error) {
      console.log(error.message);
    }
  }

  do {
    processMenu(menu());
  } while (true);
}

main();
