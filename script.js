//user interface logic
$(document).ready(function(){
  //open form
  $("#submit").click(function(){
    $(".box-hidden").hide();
  });
  $("#submit").click(function(){
    $(".box-showing").show();
  });
  //show total
  $("#checkout").click(function(){
    $(".box-showing").hide();
  });
  $("#checkout").click(function(){
    $(".ordertotal").show();
    event.preventDefault();
  });
  //add pizza
  $("#add-order").click(function(){
    $(".ordertotal").hide();
  });
  $("#add-order").click(function(){
    $(".box-showing").show()
  });
  //display price on page

  //add order
});

//business logic
function submitForm (event){
  event.preventDefault();
  console.log("test");
  function Pizza(size, crust, topping, total) {
    this.size = size;
    this.crust = crust;
    this.toppings = topping;
    /*this.total = total;*/
  }
  var size = document.getElementById("size").value;
  var crust = document.getElementById("crust").value;
  console.log(size);
  //get toppings
  var topping = []
  var bacon = document.getElementById("bacon")
  if(bacon.checked){
    console.log("bacon");
    topping.push(" " +bacon.value);
  }
  var chicken = document.getElementById("chicken")
  if(chicken.checked){
      topping.push(" " +chicken.value);
  }
  var steak = document.getElementById("steak")
  if(steak.checked){
    topping.push(" " +steak.value);
  }
  var mushrooms = document.getElementById("mushrooms")
  if(mushrooms.checked){
    topping.push(" " +mushrooms.value);
  }
  var capsicum = document.getElementById("capsicum")
  if(capsicum.checked){
    topping.push(" " +capsicum.value);
  }
  var corn = document.getElementById("corn")
  if(corn.checked){
    topping.push(" " + corn.value);
  }
  
  //pizza size cost
  // array for size
  var sizeArray = [
    {
      size: "regular",
      price: 500
    },
    {
      size: "medium",
      price: 700
    },
    {
      size: "large",
      price: 1200
    },
  ]
  
  var sizePrice = "";
  sizeArray.forEach(function(object) {
    if(object.size === size){
      sizePrice = parseInt(object.price);
    }
  })
  
  //array for crust
  var crustArray = [
    {
      crust: "thin",
      price: 100
    },
    {
      crust: "stuffed",
      price: 150
    },
    {
      crust: "glutten-free",
      price: 200
    },
  ]
  
  var crustPrice = "";
  crustArray.forEach(function(object) {
    if(object.crust === crust){
      crustPrice = parseInt(object.price);
    }
  })
  console.log(crustPrice)
//topping
  var toppingCost = topping.length*50;
  console.log(toppingCost);
  console.log(topping.length);

  //array for delivery cost
  var delivery = document.getElementById("selectdelivery").value;
  console.log(delivery);
  var deliveryArray = [
    {
      option: "deliver",
      price: 150
    },
    {
      option: "pickup",
      price: 0
    },
    {
      option: "",
      price: 0
    },
  ]
  
  var deliveryPrice = "";
  deliveryArray.forEach(function(object) {
    if(object.option === delivery){
      deliveryPrice = parseInt(object.price);
    }
  })
  console.log(deliveryPrice)
  //get pizza order
  total = toppingCost + +crustPrice + +sizePrice + +deliveryPrice;
  console.log(total);
  var pizzaOrder = new Pizza(size, crust, topping, total);
  console.log(pizzaOrder)
  // display cost on page
 	
  $( "#userMessageSize" ).append( size );
  $( "#sizePrice" ).append( sizePrice );
  $( "#userMessageCrust" ).append( crust );
  $( "#crustp" ).append( crustPrice);
  $( "#userMessageToppings" ).append( topping );
  $( "#toppingsp" ).append( toppingCost );
  $( "#deliverychoice" ).append( delivery );
  $( "#userMessageTotal" ).append( total );
  $( "#deliverycost" ).append( deliveryPrice );  



  function placeOrder(event){
    if(delivery === "deliver"){
      var location = prompt("Please enter your address:")
      alert("Your total order is KES " + total + ". Your order will be delivered to " + location);
    }else if(delivery ===  "pickup"){
      alert("Please pick your order.");
    }else{
      prompt("Please enter you address");
      alert("Your total order is KES " + total + ". Your order will be delivered to " + location);
    }
  }
  placeOrder(event);
}
//@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap');