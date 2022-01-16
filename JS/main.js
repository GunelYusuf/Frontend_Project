let arrowLeft=document.getElementById('arrowLeft');
let arrowRight=document.getElementById('arrowRight');
let Anna=document.querySelector('.Anna');
let Jasmine=document.querySelector('.Jasmine');
let Count=0;
setInterval(function(){
    Count++;
  if(Count<=1){
     Jasmine.style.display='block';
     Anna.style.display='none';
  }else{
    Count=0;
    Anna.style.display='block';
    Jasmine.style.display='none';
  }
}, 3000);
arrowLeft.onclick=()=>{
   Count++;
  if(Count<=1){
     Jasmine.style.display='block';
     Anna.style.display='none';
  }else{
    Count=0;
    Anna.style.display='block';
    Jasmine.style.display='none';
  }
}
arrowRight.onclick=()=>{
   Count++;
  if(Count<=1){
     Jasmine.style.display='block';
     Anna.style.display='none';
  }else{
    Count=0;
    Anna.style.display='block';
    Jasmine.style.display='none';
  }
}

$(document).ready(function () {
    $("#products-card .products-navbar h6").click(function () {
        $("products-card .products-navbar ul").slideToggle(500);
    });
})

let heading_li = document.querySelectorAll("#products-card .products-navbar ul li a");
let show_products = document.querySelectorAll("#allProducts .same_product");

for (let a of heading_li) {
    a.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector("#products-card .products-navbar ul .selected").classList.remove("selected");
        this.classList.add("selected");
        let data_id = this.parentElement.getAttribute("data-id");
        for (let sp of show_products) {
            if (data_id == sp.getAttribute("data-id")) {
                sp.classList.remove("d-none");
            }
            else {
                sp.classList.add("d-none");
            }
        }
    })
}