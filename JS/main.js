  let tab=document.querySelectorAll('.tabmenu');
           let allproducts=document.getElementById('1a');
           let change;
           tab.forEach(g => {
              
            g.onclick=()=>{
               let dataId=g.getAttribute('data-id');
               let product=document.getElementById(dataId);
               if( dataId!='1a'){
                    allproducts.style.display='none';
               }
               if(change){
                   change.style.display='none';

               }
               product.style.display='block';
               change=product;
            }
            
        });

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

