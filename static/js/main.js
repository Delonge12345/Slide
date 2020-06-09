

// window.addEventListener('scroll',()=>{
//   let header = document.querySelector('header');
//   header.classList.toggle("sticky",window.scrollY > 0 );
// })



// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};



// function scrollFunction() {
  
//     if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
//         document.querySelector(".shooter").style.display = "block";
//     } else {
//         document.querySelector(".shooter").style.display = "none";
//     }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//     document.body.scrollTop = 0; // For Safari
//     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// } 

jQuery(document).ready(function() {
  let wrap = document.querySelector('.wrapper');
  var btn = $('#shooter');

  $(wrap).scroll(function() {
    if ($(wrap).scrollTop() > 100) {
      btn.addClass('show');
      btn.removeClass('unshow');
    } else if($(wrap).scrollTop() < 100) {
      btn.removeClass('show');
      btn.addClass('unshow');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('.wrapper').animate({scrollTop:0}, '100');
  });

});








const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener("click",(e)=>{
    e.preventDefault();
    const blockId = anchor.getAttribute('href')
    document.querySelector('' + blockId).scrollIntoView({
      behavior:"smooth",
      block:"start"
    })


  })
}



$(document).ready(function() {
$(".logo").lettering();
});

let toggle = () =>{
  let header = document.querySelector('header');
  header.classList.toggle("active");
}



//////////////////////////////////////////////////////////////////////////////popUps
// let 
//     // wrap = document.querySelector('.wrapper');
//     linkOne = document.querySelector('.help-formOne');
//     linkTwo = document.querySelector('.help-formTwo');
//     linkThree = document.querySelector('.help-formThree');
//     linkStart = document.querySelector('.start-link');


//     closePopupOne = document.querySelector('.close-popup__connectionOne');
//     closePopupTwo = document.querySelector('.close-popup__connectionTwo');
//     closePopupThree = document.querySelector('.close-popup__connectionThree');
//     closePopupStart = document.querySelector('.close-popup__start');

//     overlayOne	= document.querySelector('.overlay-connectionOne');
//     overlayTwo	= document.querySelector('.overlay-connectionTwo');
//     overlayThree	= document.querySelector('.overlay-connectionThree');
//     overlayStart	= document.querySelector('.overlay-start');

//     popUpOne = document.querySelector('.pop-up__connectionOne');
//     popUpTwo = document.querySelector('.pop-up__connectionTwo');
//     popUpThree = document.querySelector('.pop-up__connectionThree');
//     popUpStart = document.querySelector('.pop-up__start');

//     overflow = document.createElement('div');


//     fixOne = document.querySelector('.fix-connectionOne');
//     fixTwo = document.querySelector('.fix-connectionTwo');
//     fixThree = document.querySelector('.fix-connectionThree');
//     fixStart = document.querySelector('.fix-start');

//     closeLink = document.querySelector('.closeLink');

    
// //////////////////////////////////////////One

// let OpenWindowOne =()=>{
//     overflow.className='overflow';
//     document.body.appendChild(overflow);
//     overflow.style.display = 'block';
//     overlayOne.style.display="block";
//     fixOne.style.filter="blur(5px)";

//     }
   
// linkOne.addEventListener('click',OpenWindowOne);

// let CloseWindowOne =()=>{
//     overflow.style.display="none";
//     overlayOne.style.display="none";
//     fixOne.style.filter="none";
//     fixOne.style.background="none";
    
   
// }
// closePopupOne.addEventListener('click',CloseWindowOne);

// document.addEventListener('mousedown', function(e){
//     if(e.target.closest('.overlay-connectionOne') === null||e.target==overlayOne){
        
//         overlayOne.style.display = 'none';
//         fixOne.style.filter="none";
//         fixOne.style.background="none";
//         overflow.style.display="none";
       
//     } 
    
// });
// /////////////////////////////////////////////////////

// //////////////////////////////////////////Two

// let OpenWindowTwo =()=>{
//   overflow.className='overflow';
//   document.body.appendChild(overflow);
//   overflow.style.display = 'block';
//   overlayTwo.style.display="block";
//   fixTwo.style.filter="blur(5px)";
  
//   }
 
// linkTwo.addEventListener('click',OpenWindowTwo);

// let CloseWindowTwo =()=>{
//   overflow.style.display="none";
//   overlayTwo.style.display="none";
//   fixTwo.style.filter="none";
//   fixTwo.style.background="none";
//   postcard.reset();
 
// }
// closePopupTwo.addEventListener('click',CloseWindowTwo);

// document.addEventListener('mousedown', function(e){
//   if(e.target.closest('.overlay-connectionTwo') === null||e.target==overlayTwo){
      
//       overlayTwo.style.display = 'none';
//       fixTwo.style.filter="none";
//       fixTwo.style.background="none";
//       overflow.style.display="none";
//       postcard.reset();
     
//   } 
  
// });
// /////////////////////////////////////////////////////




// //////////////////////////////////////////Three

// let OpenWindowThree =()=>{
//   overflow.className='overflow';
//   document.body.appendChild(overflow);
//   overflow.style.display = 'block';
//   overlayThree.style.display="block";
//   fixThree.style.filter="blur(5px)";
  
  
//   }
 
// linkThree.addEventListener('click',OpenWindowThree);

// let CloseWindowThree =()=>{
//   overflow.style.display="none";
//   overlayThree.style.display="none";
//   fixThree.style.filter="none";
//   fixThree.style.background="none";
  
// }
// closePopupThree.addEventListener('click',CloseWindowThree);

// document.addEventListener('mousedown', function(e){
//   if(e.target.closest('.overlay-connectionThree') === null||e.target==overlayThree){
      
//       overlayThree.style.display = 'none';
//       fixThree.style.filter="none";
//       fixThree.style.background="none";
//       overflow.style.display="none";
      
//   } 
  
// });
// /////////////////////////////////////////////////////




// //////////////////////////////////////////Start

// let OpenWindowStart =()=>{
//   overflow.className='overflow';
//   document.body.appendChild(overflow);
//   overflow.style.display = 'block';
//   overlayStart.style.display="block";
//   fixStart.style.filter="blur(5px)";
  
  
//   }
 
// linkStart.addEventListener('click',OpenWindowStart);

// let CloseWindowStart =()=>{
//   overflow.style.display="none";
//   overlayStart.style.display="none";
//   fixStart.style.filter="none";
//   fixStart.style.background="none";
  
// }
// closePopupStart.addEventListener('click',CloseWindowStart);
// // closeLink.addEventListener('click',CloseWindowStart);

// document.addEventListener('mousedown', function(e){
//   if(e.target.closest('.overlay-start') === null||e.target==overlayStart){
      
//       overlayStart.style.display = 'none';
//       fixStart.style.filter="none";
//       fixStart.style.background="none";
//       overflow.style.display="none";
      
//   } 
  
// });
// /////////////////////////////////////////////////////










/////////////////////////////////////////////////////////traffic

function changeSingleTen (id,el1,el2,el3) {
  let priceCostOne = document.getElementById('price-costOne');
  let priceCostTwo = document.getElementById('price-costTwo');
  let priceCostThree = document.getElementById('price-costThree');

let five =document.getElementById('fiveSlides').id;
    ten =document.getElementById('tenSlides').id;
    fifteen =document.getElementById('fifteenSlides').id;
    twenty=document.getElementById('twentySlides').id;
    thirty=document.getElementById('thirtySlides').id;
    forty =document.getElementById('fortySlides').id;
    fifty=document.getElementById('fiftySlides').id;
    eighty =document.getElementById('eightySlides').id;
    hundred=document.getElementById('hundredSlides').id;
    moreHundred =document.getElementById('moreHundredSlides').id;
///////////////////////////////////////////////////////////////////////
    five1 =document.getElementById('fiveSlides');
    ten2 =document.getElementById('tenSlides');
    fifteen3 =document.getElementById('fifteenSlides');
    twenty4=document.getElementById('twentySlides');
    thirty5=document.getElementById('thirtySlides');
    forty6 =document.getElementById('fortySlides');
    fifty7=document.getElementById('fiftySlides');
    eighty8 =document.getElementById('eightySlides');
    hundred9=document.getElementById('hundredSlides');
    moreHundred10 =document.getElementById('moreHundredSlides');

  priceCostOne.innerHTML = `${el1}`;
  priceCostTwo.innerHTML = `${el2}`;
  priceCostThree.innerHTML = `${el3}`;




  // 
  //   priceCostOne = text.replace('fifty','');
  //   $(priceCostOne).html(text);
  
 

  


  // if(el1 == 50){
  //   priceCostOne.textContent = priceCostOne.classList.add('fifty');
  //   document.querySelector('.fifty').textContent = '';

  //   priceCostOne.textContent = priceCostOne.classList.remove('ten');
  //   priceCostOne.textContent = priceCostOne.classList.remove('twenty');
  
    
    
  // } else if(el1 !== 50){
  //   priceCostOne.textContent = priceCostOne.classList.remove('fifty');
  //   priceCostOne.innerHTML = `${el1}`;

  // }
 
  // if(el1 == 20){
  //   priceCostOne.textContent = priceCostOne.classList.add('twenty');
  //   priceCostOne.textContent = priceCostOne.classList.remove('ten');
  //   priceCostOne.textContent = priceCostOne.classList.remove('fifty');
   

  // } else if(el1 !== 20){
  //   priceCostOne.textContent = priceCostOne.classList.remove('twenty');
  //   priceCostOne.innerHTML = `${el1}`;
  // }


  // if(el1 == 10){
  //   priceCostOne.textContent = priceCostOne.classList.add('ten');
  //   priceCostOne.textContent = priceCostOne.classList.remove('twenty');
  //   priceCostOne.textContent = priceCostOne.classList.remove('fifty');
  // } 
  
  // else if(el1 !== 10 && el1 !== 20){
  //   priceCostOne.textContent = priceCostOne.classList.remove('ten');
  //   priceCostOne.textContent = priceCostOne.classList.remove('twenty');
  //   priceCostOne.innerHTML = `${el1}`;
  // }









  // if(el1 == 50){
  //   priceCostOne.textContent = priceCostOne.classList.add('fifty');
  //   priceCostOne.textContent = priceCostOne.classList.remove('ten');
  //   priceCostOne.textContent = priceCostOne.classList.remove('twenty');
  // }else if(el1 !== 50){
  //   priceCostOne.textContent = priceCostOne.classList.remove('fifty');
  //   priceCostOne.innerHTML = `${el1}`;
  // }

  // if(el1 == 20){
  //   priceCostOne.textContent = priceCostOne.classList.add('twenty');
  //   priceCostOne.textContent = priceCostOne.classList.remove('ten');
  //   priceCostOne.textContent = priceCostOne.classList.remove('fifty');
  // }else if(el1 !== 20){
  //   priceCostOne.textContent = priceCostOne.classList.remove('twenty');
   
  //   priceCostOne.innerHTML = `${el1}`;
  // }

  // if(el1 == 10){
  //   priceCostOne.textContent = priceCostOne.classList.add('ten');
  // } else if(el1 !== 10 && el1 == 50 ){
  //   priceCostOne.textContent = priceCostOne.classList.remove('ten');
  //   priceCostOne.textContent = priceCostOne.classList.add('fifty');
   
  // } else if(el1 !== 20 && el1 == 50 ){
  //   priceCostOne.textContent = priceCostOne.classList.remove('twenty');
  //   priceCostOne.textContent = priceCostOne.classList.add('fifty');
   
  // }else if(el1 !== 50 && el1 == 10 ){
  //   priceCostOne.textContent = priceCostOne.classList.remove('fifty');
  //   priceCostOne.textContent = priceCostOne.classList.add('ten');
   
  // }else if(el1 !== 50 && el1 == 20 ){
  //   priceCostOne.textContent = priceCostOne.classList.remove('fifty');
  //   priceCostOne.textContent = priceCostOne.classList.add('twenty');
   
  // }else if(el1 !== 10 && el1 !== 50 && el1 !== 20 ){
  //   priceCostOne.textContent = priceCostOne.classList.remove('fifty');
  //   priceCostOne.textContent = priceCostOne.classList.remove('ten');
  //   priceCostOne.textContent = priceCostOne.classList.remove('twenty');
  //   priceCostOne.innerHTML = `${el1}`;
  // }

































 
//  if(el2 == 16){
//     priceCostTwo.textContent = priceCostTwo.classList.add('sixteen');
//     priceCostTwo.textContent = priceCostTwo.classList.remove('eight');
//   } else if(el2 !== 16){
//     priceCostTwo.textContent = priceCostTwo.classList.remove('sixteen');
//     priceCostTwo.innerHTML = `${el2}`;
//   }

//   if(el2 == 8){
//     priceCostTwo.textContent = priceCostTwo.classList.add('eight');
//   } else if(el2 !== 8 && el2 == 16 ){
//     priceCostTwo.textContent = priceCostTwo.classList.remove('eight');
//     priceCostTwo.textContent = priceCostTwo.classList.add('sixteen');
   
//   } else if(el2 !== 8 && el2 !== 16 ){
//     priceCostTwo.textContent = priceCostTwo.classList.remove('sixteen');
//     priceCostTwo.textContent = priceCostTwo.classList.remove('eight');
//     priceCostTwo.innerHTML = `${el2}`;
//   }


if(el3 == 16){
  priceCostThree.textContent = priceCostThree.classList.add('sixteen');
} else if(el3 !== 16){
  priceCostThree.textContent = priceCostThree.classList.remove('sixteen');
  priceCostThree.innerHTML = `${el3}`;
}

  
  if(el2 == 11){
    priceCostTwo.textContent = priceCostTwo.classList.add('eleven');
  } else if(el2 !== 11){
    priceCostTwo.textContent = priceCostTwo.classList.remove('eleven');
    priceCostTwo.innerHTML = `${el2}`;
  }








  if(id===five){
    five1.style.background='#2fd700';
    five1.style.color='#fff';
    five1.classList.add("pickGreen");
  }else if (id!==five){
    five1.style.background='none';
    five1.style.color='#000';
    five1.classList.remove("pickGreen");
  }
  if(id==ten){

  
    ten2.style.background='#2fd700';
    ten2.style.color='#fff';
    ten2.classList.add("pickGreen");
  }else if (id!==ten){
    ten2.style.background='none';
    ten2.style.color='#000';
    ten2.classList.remove("pickGreen");
  }
  if(id==fifteen){
    fifteen3.style.background='#2fd700';
    fifteen3.style.color='#fff';
    fifteen3.classList.add("pickGreen");
  }else if (id!==fifteen){
    fifteen3.style.background='none';
    fifteen3.style.color='#000';
    fifteen3.classList.remove("pickGreen");
  }
  if(id==twenty){
    twenty4.style.background='#2fd700';
    twenty4.style.color='#fff';
    twenty4.classList.add("pickGreen");
  }else if (id!==twenty){
    twenty4.style.background='none';
    twenty4.style.color='#000';
    twenty4.classList.remove("pickGreen");
  }

  if(id==thirty){
    thirty5.style.background='#2fd700';
    thirty5.style.color='#fff';
    thirty5.classList.add("pickGreen");
  }else if (id!==thirty){
    thirty5.style.background='none';
    thirty5.style.color='#000';
    thirty5.classList.remove("pickGreen");
  }
  
  if(id==forty){
    forty6.style.background='#2fd700';
    forty6.style.color='#fff';
    forty6.classList.add("pickGreen");
  }else if (id!==forty){
    forty6.style.background='none';
    forty6.style.color='#000';
    forty6.classList.remove("pickGreen");
  }
  if(id==thirty){
    thirty5.style.background='#2fd700';
    thirty5.style.color='#fff';
    thirty5.classList.add("pickGreen");
  }else if (id!==thirty){
    thirty5.style.background='none';
    thirty5.style.color='#000';
    thirty5.classList.remove("pickGreen");
  }
  if(id==fifty){
    fifty7.style.background='#2fd700';
    fifty7.style.color='#fff';
    fifty7.classList.add("pickGreen");
  }else if (id!==fifty){
    fifty7.style.background='none';
    fifty7.style.color='#000';
    fifty7.classList.remove("pickGreen");
  }
  if(id==eighty){
    eighty8.style.background='#2fd700';
    eighty8.style.color='#fff';
    eighty8.classList.add("pickGreen");
  }else if (id!==eighty){
    eighty8.style.background='none';
    eighty8.style.color='#000';
    eighty8.classList.remove("pickGreen");
  }
  if(id==hundred){
    hundred9.style.background='#2fd700';
    hundred9.style.color='#fff';
    hundred9.classList.add("pickGreen");
  }else if (id!==hundred){
    hundred9.style.background='none';
    hundred9.style.color='#000';
    hundred9.classList.remove("pickGreen"); 
  }
  // if(id==moreHundred){
  //   moreHundred10.style.background='#2fd700';
  //   moreHundred10.style.color='#fff';
  // }else if (id!==moreHundred){
  //   moreHundred10.style.background='none';
  //   moreHundred10.style.color='#000';
  // }
}


/////////////////////////////////////////////////////////////menu

