'use strict';
  let buyselect1 =[];
const slider1 = ( detail, update) => {
    const enlace1  =$('<a></a>');
    const cont_Img = $("<div class='item'></div>");
    const divImg   = $('<div class="cont_img"></div>');
    const img      = $('<img src="assets/img/'+ detail.image +'" class="img-responsive">');
    const divText  = $('<div class="cont_text"></div>');
    const name     = $('<h6>'+ detail.name +'</h6>');
    const price    = $('<p>Precio : '+ detail.price + '</p>');
    cont_Img.append(divImg);
    cont_Img.append(divText);
    divImg.append(img);
    divText.append(name);
    divText.append(price);
    enlace1.append(cont_Img);

    enlace1.on('click', function(){
      buyselect1.push(detail);
      console.log(detail);
      console.log(buyselect1);
    });
  return enlace1;
}