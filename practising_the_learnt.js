// Creating a variable of type string and adding a number to it
        let string = "Anuj + ";
        let num = 6;
        console.log(string + num);
        // Finding the datatype of the above identifier
        console.log(typeof (string));
        // Creating a const object in JavaScript and then we'll try to change it with a number
        const obj = {
          name: "Anuj",
          section: 2,
          isPrincipal: false
        }
        // obj = 97; // will throw TypeError : assignment to constant variable
        // Adding a new key object identifier
        obj['friend'] = "Kshitij";
        console.log(obj);
        const dictionaries = {
          appreciate: "recognize the full worth of.",
          horizon: "means Kshitij, the point at which sky begin to rise and the sun begin to set.",
        }
        console.log(dictionaries.horizon)
