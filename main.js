
let menu = document.querySelector(".menu");
let navlinks = document.querySelector(".nav-links");
let close = document.querySelector(".close");
let previous = document.querySelector(".previous");
let next = document.querySelector(".next");
let mainImg = document.querySelector(".main");
let button = document.querySelectorAll(".left-addtocart img");
let span = document.querySelector(".left-addtocart span");
let buttonadd = document.querySelector(".addtocart .right-addtocart button");
let numcart = document.querySelector(".right-nav span");
let cart = document.querySelector(".cart");
let checkout = document.querySelector(".checkout");
let empty = document.querySelector(".empty");
let productcart = document.querySelector(".product-cart");
let checkoutbutton = document.querySelector(".checkoutbutton");
let numpro = document.querySelector(".numpro");
let total = document.querySelector(".total");
let del = document.querySelector(".delete");
let otherimg = document.querySelectorAll(".other-img img");

 //start Nav function
menu.onclick = ()=>{
  navlinks.style.left = "0"
}
close.onclick = ()=>{
  navlinks.style.left = "-60%"
}
 //End Nav function
 //start left header function

let Imgs=["image-product-1.jpg","image-product-2.jpg","image-product-3.jpg","image-product-4.jpg"]; 
let i= 0;
 next.onclick = ()=>{
  if (i<3) {
    i++
    mainImg.src=`images/${Imgs[i]}`;
  }

 }
 previous.onclick = ()=>{
  if (i>0){
    i--
    mainImg.src=`images/${Imgs[i]}`;
  }
 }

 for(let i = 0; i < otherimg.length; i++){
  otherimg[i].onclick= ()=>{
    mainImg.src=`images/${Imgs[i]}`;
  }
 }





 //End left header function
 //start right header function
 let j=0;
 button[1].onclick=()=>{
  if(j<10){
   j++;
   span.innerHTML=j;
  }
 }

 button[0].onclick=()=>{
  if(j>0){
    j--;
    span.innerHTML=j;
   }
 }

 buttonadd.onclick=()=>{
   if(j>0){
    numcart.style.display ='block';
    numcart.innerHTML=j;
   }else{
    numcart.style.display ='none';
   }
   showdata();
 }

 cart.onclick= ()=>{
  checkout.classList.toggle("checkout-toggle");
  showdata();
 }
 function showdata(){
  if (j>0){
    empty.style.display = 'none';
    productcart.style.display = 'flex';
    checkoutbutton.style.display='block';
    numpro.innerHTML=j;
    total.innerHTML=` $${j*125}.00`;
    del.onclick = ()=>{
      j--;
      span.innerHTML=j;
      numcart.innerHTML=j;
      if (j==0) {
        numcart.style.display='none'
      }
      showdata();
    }
  }else{
    empty.style.display = 'block';
    productcart.style.display = 'none';
    checkoutbutton.style.display ='none';
  }
 }