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
