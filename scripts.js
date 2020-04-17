//Business logic
function sizeCost() {
    var size=$("#size").val();
    if(size==="Small @ $6"){
      var indSizeCost = 6;
    }
    else if(size==="Medium @ $9"){
      var indSizeCost = 9;
    }
    else if(size ==="Large @ $12"){
      var indSizeCost = 12;
    }
    else if(size ==="Mega Large @ $16"){
      var indSizeCost = 16;
    }
    return indSizeCost;
  }
  function crustCost() {
    var crust = $('#crust').val();
    if(crust ==="Hand Tossed @ $1"){
      var indCrustCost = 1;
    }
    else if(crust==="Thin Crust @ $3"){
      var indCrustCost = 3;
    }
    else if(crust ==="Pan Pizza @ $4"){
      var indCrustCost = 4;
    }
    return indCrustCost;
  }
  function top1Cost() {
    var top1 = $('#top1').val();
    if(top1 ==="Beef strips @ $2"){
      var indTop1Cost  = 2;
    }
    else if(top1==="Pepperoni @ $2"){
      var indTop1Cost  = 2;
    }
    else if(top1 ==="Bacon @ $2"){
      var indTop1Cost = 2;
    }
    return indTop1Cost;
  }
  function top2Cost() {
    var top2 = $('#top2').val();
    if(top2 ==="Extra Cheese @ $2"){
      var indTop2Cost  = 2;
    }
    else if(top2==="Pineapples @ $2"){
      var indTop2Cost  = 2;
    }
    else if(top2 ==="Black Olives @ $2"){
      var indTop2Cost = 2;
    }
    return indTop2Cost;
  }
  function numberOfPizzasCost() {
    var numberOfPizzas = $('#numberOfPizzas').val();
    return parseInt(numberOfPizzas);
  }

  function calculatePrice (e) {
    var totalPrice = (sizeCost()+crustCost()+top1Cost()+top2Cost()) * numberOfPizzasCost();
    console.log (totalPrice);
    
    $('#totalPrice').text( + totalPrice + "  Estimated time: 30 min.")
  }

  function pizza (type, size, crust, top1, top2, numberOfPizzas) {
    this.type = type;
    this.size = size;
    this.crust = crust;
    this.top1= top1;
    this.top2= top2;
    this.numberOfPizzas = numberOfPizzas;
  }
  
  pizza.prototype.fullOrder= function() {
    return "You ordered " +this.numberOfPizzas+" "+ this.size + " " +this.crust +" "+this.type+ " with " + this.top1 + " and " + this.top2 ;
  }

  function checkOut (){
  alert("Successfully checked out. Your order has been received!")
  }
  //user-interface
  $(document).ready(function() {
    $('#pickUp').click(function(event) {
      event.preventDefault();
      $("#pickUpOption").show();
      $('#deliverOption').hide();

      var type =$('#type').val(); 
      var size=$("#size").val();
      var crust=$("#crust").val();
      var top1=$("#top1").val();
      var top2=$("#top2").val();
      var numberOfPizzas = $('#numberOfPizzas').val();

      var newOrder= new pizza (type, size , crust, top1, top2, numberOfPizzas)
      
      $('#deliveryOrderDetails').hide();
      $("ul#pickUpOrderDetails").show();
      $("ul#pickUpOrderDetails").append("<li><span class=order>" + newOrder.fullOrder() + "</span></li>");
    })
    
    $("button#deliver").click(function(event) {
      event.preventDefault();
      $("#pickUpOption").hide();
      $('#deliverOption').show();  

      var address=$('#location').val();
      $('#deliverOption').text("YOUR ORDER WILL BE DELIVERED TO YOU AT: " + address)

      var type =$('#type').val(); 
      var size=$("#size").val();
      var crust=$("#crust").val();
      var top1=$("#top1").val();
      var top2=$("#top2").val();
      var numberOfPizzas = $('#numberOfPizzas').val();

      var newOrder= new pizza (type, size , crust, top1, top2, numberOfPizzas)
      
      $('#pickUpOrderDetails').hide();
      $('ul#deliveryOrderDetails').show();
      $("ul#deliveryOrderDetails").append("<li><span class=order>" + newOrder.fullOrder() + " <br> (Separate Delivery Charge: $ 1)" + "</span></li>");


    });
       
  
  })