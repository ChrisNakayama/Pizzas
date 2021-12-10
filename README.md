Pizza Shop


By Christopher Nakayama

Description:

Pizza Order Form

This is a simple order form to take in pizza orders from a customer. 
The program captures the customer information.
The program creates a pizza order and allows the customer to add pizzas.
The program tells the customer how much the order is. 
The program can print order to the console-log.

// Business Logic

Pizza Constructor
this will be a single pizza.
the Keys for this Object will be:
Pizza size, cheese, meat, and veggies

Pizza Prototype will add meatToppings
Function on an object
Pizza Prototype will add veggie vegToppings

Pizza Prototype will calculate cost based on size and Toppings chosen

Order Pizza function will represent the customer ordering pizza (Possibly multiple pizzas).

Order.prototype adds cost to total

Order.prototype.remove clears the order form and adds potential second order together in case the customer wants more pizzas.

Total cost adds the total cost together.


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