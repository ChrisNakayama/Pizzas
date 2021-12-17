Detroit Pizza is lighter and the sauce is on top of the cheese so the top does not get soggy.


By Christopher Nakayama

Description:

Detroit Pizza Order Form

This is a simple order form to take in pizza orders from a customer. 
The program captures the customer information.
The program creates a pizza order and allows the customer to add pizzas.
The program tells the customer how much the order is. 
The program can print order to the console-log.

// Business Logic

1.Pizza Constructor
This constructor will make a single pizza.
The Keys for this Object will be:
Pizza size, cheese, meat, and veggies

2.Pizza Prototype will add meatToppings

Describe: "It will add meat to pizza."
Code: pizza.prototype.addMeat(Pepperoni)
Expect: pizza.meat === Pepperoni


3.Pizza Prototype will add veggieToppings

Describe: "It will add veggies to pizza."
Code: pizza.prototype.addVeggies(Basil)
Expect: pizza.veggies === Basil

4.Pizza.Prototype.refreshCost 
Describe: "It will calculate cost based on size and toppings chosen."
Code: pizza.prototype.refreshCost(Cost)
Expect: pizza.small === 5
Expect: pizza.medium === 10
Expect: pizza.large === 15
Expect: pizza.extralarge === 20
Expect: pizza.meatToppings === 2
Expect: pizza.veggieToppings === 1
Expect: pizza.extraCheese === 1
Expect: thisPizzaChosen (Cost)

5.Order Pizza function will represent the customer ordering pizza (Possibly multiple pizzas).

6.Order.prototype.addPizza 
Describe: "It will add cost of pizza created to order."
Code: Order.prototype.addPizza = function(pizza) {
  pizza.refreshCost();
  this.pizzas.push(pizza);
} 
Expect: (pizza)

7.Order.prototype.remove
Describe: "It will remove the pizza from the order form and splice it to the customers order so another pizza can be added to the order. This prototype will splice all the Pizzas on an order together off of the order form."
Code: Order.prototype.removePizza = function(pizzaNumber) {
  this.pizzas.splice(pizzaNumber-1,1);
}
Expect: (totalPizzaNumber)

8.Order.Prototype.determineTotalCost 
Describe: "It will determine total cost of pizzas ordered."
Code: Order.prototype.determineTotalCost = function() {
  var totalCost = 0;
  this.pizzas.forEach(function(pizza) {
    totalCost += pizza.cost;
  });
  this.totalCost = totalCost;
}  
Expect: (totalCost)

// UI Logic

1.Hide Show function keeps the order clean for the user

2.Create Customer order starts the order process by gathering Name, 
Address, Phone and Payment method.
Returns this information together so the customer can start ordering pizzas.

3.CreatePizza 
Sets pizza size input
Sets cheese selection input
Sets toppings selected input meatToppings
Sets toppings selected input vegToppings

reset pizza form runs to clear form
new pizza is returned

populate pizza makes the pizza toppings available through 
button list and makes each meat and veggie selection cost available to adds

4.Calculate total price and show total cost of pizzas
Toggle between the order and the pizza Menu 
Launch order button 
Create customer order
Add another pizza form pops
Check out button takes customer to order Summary
New order reset function here 
Log order to console log here....

Setup/Installation Requirements:

Clone this github repository.
Open files in your text editor.
Edit script as necessary or simply drag index.html to your browser window to use the application as is.
Your text editor must be able to handle HTML, CSS and JavaScript.

Known Bugs:

There are no known bugs.
Support and contact details:

If you have any issues or questions, please contact me at cnakayam@gmail.com.

Technologies Used:

HTML, CSS and Javascript. The diractories used are Bootstrap.css for css and jQuery 3.6.0 for JavaScript.

License:

MIT

Copyright (c) 2021 Christopher Nakayama