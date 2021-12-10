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