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
// Order Pizza
function Order(customerName, customerAddress, customerPhone, customerCashCredit) {
  this.customerName = customerName;
  this.customerAddress = customerAddress;
  this.customerPhone = customerPhone;
  this.customerCashCredit = customerCashCredit;
  this.pizzas = [];
}
Order.prototype.addPizza = function(pizza) {
  pizza.refreshCost();
  this.pizzas.push(pizza);
}
Order.prototype.removePizza = function(pizzaNumber) {
  this.pizzas.splice(pizzaNumber-1,1);
}
Order.prototype.determineTotalCost = function() {
  var totalCost = 0;
  this.pizzas.forEach(function(pizza) {
    totalCost += pizza.cost;
  });
  this.totalCost = totalCost;
}  

//UI Pizza

var nextDiv = function(toHide, toShow) {
  $(toHide).hide();
  $(toShow).show();
}
var createCustomerOrder = function() {
  var customerName = $('#customer-name').val();
  var customerAddress = $('#customer-street').val() + ', ' + $('#customer-city').val() + ', ' + $('#customer-zip-code').val();
  var customerPhone = $('#customer-phone').val();
  var customerCashCredit = $('input[name="cash-credit"]:checked').val();

  return new Order(customerName, customerAddress, customerPhone, customerCashCredit);
}
var createPizza = function() {
  var pizzaSize = $('input[name="pie-size"]:checked').val();
  var cheese = $('input[name="cheese-options"]:checked').val();
  var newPizza = new Pizza(pizzaSize, cheese);
  $('input[name="meat-toppings"]:checked').each(function() {
    newPizza.addMeat($(this).val());
  });
  var vegToppings = [];
  $('input[name="veg-toppings"]:checked').each(function() {
    newPizza.addVeg($(this).val());
  });
  resetPizzaForm();
  return newPizza;
}
var resetPizzaForm = function() {
  $('input[name="pie-size"]:checked').attr("checked", false);
  $('input[value="medium"]').prop("checked", true);
  $('input[name="cheese-options"]:checked').attr("checked", false);
  $('input[value="regular"]').prop("checked", true);
  $('input[name="meat-toppings"]:checked').attr("checked", false);
  $('input[name="veg-toppings"]:checked').attr("checked", false);
}
var populatePizzaList = function(pizza) {
  $('.pizza-list').append('<div class="pizza">' +
                            '<h4><span class="pizza-list-size">- One '+pizza.pizzaSize+' pizza</span></h4>' +
                            '<div class="pizza-info-toggle">' +
                              '<p>Cheese: <span class="pizza-list-cheese">'+pizza.cheese+'</span></p>' +
                              '<p>Meat toppings: </p>' +
                              '<ul class="pizza-list-meat-toppings"></ul>' +
                              '<p>Veggie toppings: </p>' +
                              '<ul class="pizza-list-veg-toppings"></ul>' +
                              '<p>Cost of this pizza: $<span>'+pizza.cost.toFixed(2)+'</span></p>'+
                            '</div>' +
                          '</div>');
  pizza.meatToppings.forEach(function(meatTopping) {
    $('.pizza-list .pizza-list-meat-toppings').last().append('<li>'+meatTopping+'</li>');
  });
  pizza.vegToppings.forEach(function(vegTopping) {
    $('.pizza-list .pizza-list-veg-toppings').last().append('<li>'+vegTopping+'</li>');
  });

  $('.pizza').last().click(function() {
    $(this).find('.pizza-info-toggle').toggle();
});
$('.pizza-info-toggle').last().click(function() {
    $(this).find('.pizza-info-toggle').toggle();
});

}
var populateTotalPrice = function(customerOrder) {
customerOrder.determineTotalCost();
return customerOrder.totalCost;
}
$(document).ready(function() {
  var customerOrder = new Order();

  // event handler for begin ordering button
  $('.launch-order button').click(function() {
    nextDiv('.launch-order', '.order-information-input');
  });

  // event handler for customer information submit
  $('.order-information-input form').submit(function(event) {
    event.preventDefault();
    customerOrder = createCustomerOrder();
    nextDiv('.order-information-input', '.order-pizza-input');
  });

  // event handler for add pizza
  $('.order-pizza-input form').submit(function(event) {
    event.preventDefault();
    var thisPizza = createPizza();
    customerOrder.addPizza(thisPizza);
    populatePizzaList(thisPizza);
    $("#pizza-list-total-cost").text('$ '+ populateTotalPrice(customerOrder).toFixed(2));
    nextDiv('.order-pizza-input', '.order-summary');
  });

  // event handler for add another pizza
  $('#add-another-pizza').click(function() {
    nextDiv('.order-summary', '.order-pizza-input');
  });

  // event handler for checkout order
  $('#checkout-order').click(function() {
    nextDiv('.order-summary', '.checked-out');
  });

  // event handler for new order/reset site
  $('#new-order').click(function() {
    customerOrder = new Order();
    $('.pizza-list').empty();
    nextDiv('.checked-out', '.launch-order');
  });

  // event handler for log object to console
  $('#console-log').click(function() {
    console.log(customerOrder);
  })

});