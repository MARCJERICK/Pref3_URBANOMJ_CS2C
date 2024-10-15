//Create an object called car with properties type, model, and color
let car = {
    type: "Civic",
    model: "Type R, 2019",
    color: "White"
};

//Use typeof to check the type of the object and log it to the console
console.log(typeof car); // Logs "object"

//Update the type property to "Toyota"
car.type = "Honda";
console.log(car); // Logs{ type: "Toyota", model: "Corolla", color: "Blue" }

//Add a new property wheels with the value 4
car.wheels = 4;
console.log(car); // Logs{ type: "Toyota", model: "Corolla", color: "Blue", wheels: 4 }
