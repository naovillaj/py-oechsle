"use strict";var render=function(e){e.empty();var s=$('<section class="components"></section>');0==state.page?(s.append(Header()),s.append(welcome())):1==state.page&&(s.append(Header()),s.append(Outfit())),e.append(s)},state={page:0,cloth:null,clothSelected:null,locals:null};$(function(e){var s={apiKey:"AIzaSyBdX8FyCVHBS3WkdCi7KeW-5BFw7KlC3g4",authDomain:"base-7937c.firebaseapp.com",databaseURL:"https://base-7937c.firebaseio.com",projectId:"base-7937c",storageBucket:"",messagingSenderId:"305091668120"};firebase.initializeApp(s),firebase.database().ref().on("value",function(e){console.log(e.val()),state.cloth=e.val(),state.locals=e.val().locals,console.log(state.locals)});var a=$("#root");render(a),$(".owl-carousel").owlCarousel({loop:!0,margin:10,nav:!1,responsive:{0:{items:1},600:{items:3},1e3:{items:5}}})});var Carousel=function(){return $("<div class='owl-carousel owl-theme'><div class='item'><img src='assets/img/jean-1.jpg'></div><div class='item'><img src='assets/img/jean-2.jpg'></div><div class='item'><img src='assets/img/pants-b1.jpg'></div><div class='tem'><img src='assets/img/pants-b2.jpg'></div><div class='item'><img src='assets/img/pants-be1.jpg'></div><div class='item'><img src='assets/img/pants-be2.jpg'></div><div class='item'><img src='assets/img/pants-n1.jpg'></div><div class='item'><img src='assets/img/pants-n2.jpg'></div></div>")},Mixed=function(){var e=$("<section class='cloth-container'></section>"),s=$("<div class='cloth-container__princNews'>Aquí va la ropa</div>");return e.append(s),e},localItem=function(e,s,a){$('<div class="col-xs-12"></div>');var i=$('<div class="col-xs-9"></div>'),t=$("<h5>"+locals.name+"</h5>"),n=$('<div class="col s3 btn-map center-align"></div>'),o=$('<i class="fa fa-map"></i>'),c=$('<div class="col s12 item-station"></div>'),l=$("<p>"+station.address+"<br>"+station.district+"</p>");return i.append(t),n.append(o),c.append(l),contStation.append(i),contStation.append(n),contStation.append(c),o.on("click",function(e){e.preventDefault(),state.selectedStation=station,s()}),contStation},stationSearch=function(e){var s=$('<div class="container-fluid"></div>'),a=$('<div class="row search"></div>'),i=($('<span  class="material-icons">search</span>'),$('<input class="input-search col s12" placeholder="Ingresa tu distrito a buscar"></input>')),t=$('<div class="row stations"></div>');return s.append(a),s.append(t),i.on("keyup",function(s){var a=filterByLocal(state.locals,i.val());reRender(t,a,e)}),s},reRender=function(e,s,a){e.empty(),s.forEach(function(i){e.append(localItem(i,a,function(a){reRender(e,s)}))})},Footer=function(){var e=$("<footer class='footer-container'></footer>"),s=$("<div class='footer-container__icon'>Aquí va el footer</div>");return e.append(s),e},Header=function(){return $("<header class='container-fluid'><div class='row'><div class='col-xs-2 col-sm-2'><div class='header--icoHamburger'><i class='glyphicon glyphicon-menu-hamburger header--boxes-margin'></i></div></div><div class='col-xs-8 col-sm-8'><div class='header--message'><p class='header--boxes-margin'>Snap a picture</p></div></div><div class='col-xs-2 col-sm-2'><i class='glyphicon glyphicon-shopping-cart header--boxes-margin'></i></div></div></header>")},TakePicture=function(){Header()},Welcome=function(){return $("<section class='container-fluid'><div class='row'><div class='col-xs-12 col-md-12'><div class='welcome-logo'><img src='assets/img/logoOe.png' alt='LogoOe' height='100%' width='100%'></div></div></div></section>")},filterByLocal=function(e,s){var a=e.filter(function(e){return-1!=e.location.toLowerCase().indexOf(s.toLowerCase())});return console.log(a),a};