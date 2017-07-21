const  Yourbasket = () => {
 const secYourBasket = $("<section id='yourBasket' class='container-fluid'></section>");
 const row1 = $("<div class='row'><div class='col-xs-2 col-sm-2 container-flex-row'><i class='glyphicon glyphicon-remove'></i></div>"+
 "<div class='col-xs-10 col-sm-10 container-flex-row'><p>Your Basket (<span id='nItems'></span> items)</p></div></div>");
 const conta = $("<div class='container'></div>");
 const rowc = $("<div class='row'></div>");
 const imgSelected = $("<div id='imgSelected'></div>");

 var total = 0;

 buyselect1.forEach( function( index) {
   imgSelected.append(imgBuy (index, update));
   total += index.price;
 });

 console.log(total);
 const rowc2 = $("<div class='row'><div class='col-xs-12 col-sm-12 container-flex-row'></div></div>");
 const btnbuy = $("button type='button' name='button'>Buy<span class='precio'></span></button>" );
 const btnfttr =$("<button type='button' name='button'>Send to fitting room</button>");

 secYourBasket.append(row1);
 secYourBasket.append(conta);
 conta.append(rowc);
 rowc.append(imgSelected);
 conta.append(rowc2);
 rowc2.append(btnbuy);
 rowc2.append(btnfttr);


 return secYourBasket;
}
