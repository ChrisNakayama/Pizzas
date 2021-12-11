function Pizza(pizzaSize, cheese) {
  this.pizzaSize = pizzaSize;
  this.cheese = cheese;
  this.meatToppings = [];
  this.vegToppings = [];
}
Pizza.prototype.addMeat = function(meat) {
    this.meatToppings.push(meat);
}  
Pizza.prototype.addVeg = function(veggie) {
    this.vegToppings.push(veggie);
}   
  Pizza.prototype.refreshCost = function() {
    var cost = 0;
    if (this.pizzaSize === "small") {
      cost = 5;
    } else if (this.pizzaSize === "medium") {
      cost = 10;
    } else if (this.pizzaSize === "large") {
      cost = 15;
    } else if (this.pizzaSize === "extra large") {
      cost = 20;
    } 
    this.meatToppings.forEach(function() {
      cost += 2;
    });  
    this.vegToppings.forEach(function() {
      cost += 1;
    });
    if (this.cheese === "extra") {
      cost += 1;
    } 
    this.cost = cost;   
}      