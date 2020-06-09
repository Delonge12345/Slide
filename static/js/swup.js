// window.onload = function(){const swup = new Swup()}

document.addEventListener("DOMContentLoaded", () => {
    function init() {

      if (linkOne = document.querySelector('.help-formOne')) {
            
        postcardOne = document.querySelector('.postcard-one');
        closePopupOne = document.querySelector('.close-popup__connectionOne');
        overlayOne	= document.querySelector('.overlay-connectionOne');
        popUpOne = document.querySelector('.pop-up__connectionOne');
        overflow = document.createElement('div');
        fixOne = document.querySelector('.fix-connectionOne');
        let OpenWindowOne =()=>{
          
            
            overflow.className='overflow';
            document.body.appendChild(overflow);
            overflow.style.display = 'block';
            overlayOne.style.display="block";
            fixOne.style.filter="blur(5px)";
            
            
            }
           
          linkOne.addEventListener('click',OpenWindowOne);
          
          let CloseWindowOne =()=>{
            
            overflow.style.display="none";
            overlayOne.style.display="none";
            fixOne.style.filter="none";
            fixOne.style.background="none";
            postcardOne.reset();
             
          }
          closePopupOne.addEventListener('click',CloseWindowOne);
          
          document.addEventListener('mousedown', function(e){
            if(e.target.closest('.overlay-connectionOne') === null||e.target==overlayOne){
              
                overlayOne.style.display = 'none';
                fixOne.style.filter="none";
                fixOne.style.background="none";
                overflow.style.display="none";
                postcardOne.reset();
            } 
            
          });

    }
  
    if (linkHundred = document.querySelector('.hundreds')) {
        
      postcardHundred = document.querySelector('.postcard-hundred');
      closePopupHundred = document.querySelector('.close-popup__hundred');
      overlayHundred	= document.querySelector('.overlay-hundred');
      popUpHundred = document.querySelector('.pop-up__hundred');
      overflow = document.createElement('div');
      overflowHundred = document.createElement('div');
      fixHundred = document.querySelector('.fix-hundred');
      let OpenWindowHundred =()=>{
          
          overflow.className='overflow';
          document.body.appendChild(overflow);
          overflow.style.display = 'block';
          overlayHundred.style.display="block";
          fixHundred.style.filter="blur(5px)";
        
          
          }
         
        linkHundred.addEventListener('click',OpenWindowHundred);
        
        let CloseWindowHundred =()=>{
          
          overflow.style.display="none";
          overlayHundred.style.display="none";
          fixHundred.style.filter="none";
          fixHundred.style.background="none";
          postcardHundred.reset();
          
        }
        closePopupHundred.addEventListener('click',CloseWindowHundred);
        
        document.addEventListener('mousedown', function(e){
          if(e.target.closest('.overlay-hundred') === null||e.target==overlayHundred){
            
              overlayHundred.style.display = 'none';
              fixHundred.style.filter="none";
              fixHundred.style.background="none";
              overflow.style.display="none";
              postcardHundred.reset();
          } 
          
        });

  }
        
        if (linkTwo = document.querySelector('.help-formTwo')) {
            wrap = document.querySelector('.wrapper');
            postcardTwo = document.querySelector('.postcard-two');
            closePopupTwo = document.querySelector('.close-popup__connectionTwo');
            overlayTwo	= document.querySelector('.overlay-connectionTwo');
            popUpTwo = document.querySelector('.pop-up__connectionTwo');
            overflow = document.createElement('div');
            fixTwo = document.querySelector('.fix-connectionTwo');
            
            let OpenWindowTwo =()=>{
                overflow.className='overflow';
                document.body.appendChild(overflow);
                overflow.style.display = 'block';
                overlayTwo.style.display="block";
                fixTwo.style.filter="blur(5px)";
                
                }
               
              linkTwo.addEventListener('click',OpenWindowTwo);
              
              let CloseWindowTwo =()=>{
                overflow.style.display="none";
                overlayTwo.style.display="none";
                fixTwo.style.filter="none";
                fixTwo.style.background="none";
                postcardTwo.reset();
              }
              closePopupTwo.addEventListener('click',CloseWindowTwo);
              
              document.addEventListener('mousedown', function(e){
                if(e.target.closest('.overlay-connectionTwo') === null||e.target==overlayTwo){
                  overlayTwo.style.display = 'none';
                  fixTwo.style.filter="none";
                  fixTwo.style.background="none";
                  overflow.style.display="none";
                  postcardTwo.reset();
                } 
                
              });

        }
        
        if (linkStart = document.querySelector('.start-link')) {
            
            closePopupStart = document.querySelector('.close-popup__start');
            rightPage=document.querySelector('.right-page');
            leftPage = document.querySelector('.left-page');
            overlayStart	= document.querySelector('.overlay-start');
            popUpStart = document.querySelector('.pop-up__start');
            overflow = document.createElement('div');
            fixStart = document.querySelector('.fix-start');
            let OpenWindowStart =()=>{
                
                overflow.className='overflow';
                document.body.appendChild(overflow);
                overflow.style.display = 'block';
                overlayStart.style.display="block";
                fixStart.style.filter="blur(5px)";
                
                
                }
               
              linkStart.addEventListener('click',OpenWindowStart);
              
              let CloseWindowStart =()=>{
  
                overflow.style.display="none";
                overlayStart.style.display="none";
                fixStart.style.filter="none";
                fixStart.style.background="none";
                
              }
              closePopupStart.addEventListener('click',CloseWindowStart);
              rightPage.addEventListener('click',CloseWindowStart);
              leftPage.addEventListener('click',CloseWindowStart);
              // closeLink.addEventListener('click',CloseWindowStart);
              
              document.addEventListener('mousedown', function(e){
                if(e.target.closest('.overlay-start') === null||e.target==overlayStart){

                    overlayStart.style.display = 'none';
                    fixStart.style.filter="none";
                    fixStart.style.background="none";
                    overflow.style.display="none";
                    
                    
                } 
                
              });
        }
        if (linkStartBtn = document.querySelector('.btnStepStart')) {
          
          closePopupStartBtn = document.querySelector('.close-popup__startBtn');
          rightPage=document.querySelector('.right-pageBtn');
          leftPage = document.querySelector('.left-pageBtn');
          overlayStartBtn	= document.querySelector('.overlay-startBtn');
          popUpStartBtn = document.querySelector('.pop-up__startBtn');
          overflow = document.createElement('div');
          fixStartBtn = document.querySelector('.fix-startBtn');
          let OpenWindowStartBtn =()=>{
              
              overflow.className='overflow';
              document.body.appendChild(overflow);
              overflow.style.display = 'block';
              overlayStartBtn.style.display="block";
              fixStartBtn.style.filter="blur(5px)";
              
              
              }
             
            linkStartBtn.addEventListener('click',OpenWindowStartBtn);
            
            let CloseWindowStartBtn =()=>{
              overflow.style.display="none";
              overlayStartBtn.style.display="none";
              fixStartBtn.style.filter="none";
              fixStartBtn.style.background="none";
              
            }
            closePopupStartBtn.addEventListener('click',CloseWindowStartBtn);
            rightPage.addEventListener('click',CloseWindowStartBtn);
            leftPage.addEventListener('click',CloseWindowStartBtn);
            // closeLink.addEventListener('click',CloseWindowStart);
            
            document.addEventListener('mousedown', function(e){
              if(e.target.closest('.overlay-startBtn') === null||e.target==overlayStartBtn){
                
                  overlayStartBtn.style.display = 'none';
                  fixStartBtn.style.filter="none";
                  fixStartBtn.style.background="none";
                  overflow.style.display="none";
                  
              } 
              
            });
      }
        if (linkThree = document.querySelector('.help-formThree')) {
            
            postcardThree = document.querySelector('.postcard-three');
            closePopupThree = document.querySelector('.close-popup__connectionThree');
            overlayThree	= document.querySelector('.overlay-connectionThree');
            popUpThree = document.querySelector('.pop-up__connectionThree');
            overflow = document.createElement('div');
            fixThree = document.querySelector('.fix-connectionThree');
            let OpenWindowThree =()=>{
                
                overflow.className='overflow';
                document.body.appendChild(overflow);
                overflow.style.display = 'block';
                overlayThree.style.display="block";
                fixThree.style.filter="blur(5px)";
               
                
                }
               
              linkThree.addEventListener('click',OpenWindowThree);
              
              let CloseWindowThree =()=>{
                
                overflow.style.display="none";
                overlayThree.style.display="none";
                fixThree.style.filter="none";
                fixThree.style.background="none";
                postcardThree.reset();
              }
              closePopupThree.addEventListener('click',CloseWindowThree);
              
              document.addEventListener('mousedown', function(e){
                if(e.target.closest('.overlay-connectionThree') === null||e.target==overlayThree){
                  
                    overlayThree.style.display = 'none';
                    fixThree.style.filter="none";
                    fixThree.style.background="none";
                    overflow.style.display="none";
                    postcardThree.reset();
                } 
                
              });

        }
        if (linkBasic = document.querySelector('.basic-button')) {
          /////////////////////////////////////////////////////// InfoPrBasic
        
         
          




          let 
          ///////////////////////////////////////////////////////
          postcardBasic = document.querySelector('.postcard-basic');
          closePopupBasic = document.querySelector('.close-popup__basic');
          overlayBasic	= document.querySelector('.overlay-basic');
          popUpBasic = document.querySelector('.pop-up__basic');
          overflow = document.createElement('div');
          fixBasic = document.querySelector('.fix-basic');
          





          let OpenWindowBasic =()=>{
            let infoPrBsPlan = document.querySelector('.infoPrBs');
            let infoPrBsCost = document.getElementById('price-costOne');
            let infoPrBsSlides = document.querySelector('.pickGreen');
  
            let submitBs = document.querySelector('.submitBs');
            
          
            
            let attBsPlan = document.createAttribute("data-plan");
            let attBsCost = document.createAttribute("data-cost");
            let attBsSlides = document.createAttribute("data-slides");
  
            let valueBsPlan = infoPrBsPlan.textContent;
            let valueBsCost = infoPrBsCost.textContent;
            let valueBsSlides = infoPrBsSlides.textContent;

            let planBs = document.getElementById('planBs')
            let costOne=document.getElementById('costOne')
            let slidesBs=document.getElementById('slidesBs')

            let sum = valueBsCost+'000';
            sum = String(sum).replace(/\s/g, '');;
            planBs.value = valueBsPlan;
            costOne.value = sum;
            slidesBs.value= valueBsSlides;


            attBsPlan.value = valueBsPlan;
            attBsCost.value = valueBsCost + ' тыс. руб.';
            attBsSlides.value = valueBsSlides;



            
            submitBs.setAttributeNode(attBsPlan); 
            submitBs.setAttributeNode(attBsCost);
            submitBs.setAttributeNode(attBsSlides);  
            
            
            // if(infoPrBsCost.classList.contains('ten')){
            //   attBsCost.value = '10 тыс. руб';
            // }else if(!infoPrBsCost.classList.contains('ten')){
            //   submitBs.setAttributeNode(attBsCost);
            // }

            // if(infoPrBsCost.classList.contains('fifty')){
            //   attBsCost.value = '50 тыс. руб';
            // }else if(!infoPrBsCost.classList.contains('fifty')){
            //   submitBs.setAttributeNode(attBsCost);
            // }


            // if(infoPrBsCost.classList.contains('twenty')){
            //   attBsCost.value = '20 тыс. руб';
            // }else if(!infoPrBsCost.classList.contains('twenty')){
            //   submitBs.setAttributeNode(attBsCost);
            // }

            // console.log(document.querySelector('.pickGreen').textContent);
            console.log(submitBs);
              overflow.className='overflow';
              document.body.appendChild(overflow);
              overflow.style.display = 'block';
              overlayBasic.style.display="block";
              fixBasic.style.filter="blur(5px)";
               
              }
             
            linkBasic.addEventListener('click',OpenWindowBasic);
            
            let CloseWindowBasic =()=>{
              
              overflow.style.display="none";
              overlayBasic.style.display="none";
              fixBasic.style.filter="none";
              fixBasic.style.background="none";
              postcardBasic.reset();
            }
            closePopupBasic.addEventListener('click',CloseWindowBasic);
            
            document.addEventListener('mousedown', function(e){
              if(e.target.closest('.overlay-basic') === null||e.target==overlayBasic){
                
                  overlayBasic.style.display = 'none';
                  fixBasic.style.filter="none";
                  fixBasic.style.background="none";
                  overflow.style.display="none";
                  postcardBasic.reset();
                  
              } 
              
            });
      }

      if (linkStandard = document.querySelector('.standart-button')) {
 
      









          ///////////////////////////////////////////////////////
        postcardStandard = document.querySelector('.postcard-standard');
        closePopupStandard = document.querySelector('.close-popup__standard');
        overlayStandard	= document.querySelector('.overlay-standard');
        popUpStandard = document.querySelector('.pop-up__standard');
        overflow = document.createElement('div');
        fixStandard = document.querySelector('.fix-standard');
        let OpenWindowStandard =()=>{
               ///////////////////////////////////////////////////////// InfoPrSt
               let infoPrStPlan = document.querySelector('.infoPrSt');
               let infoPrStCost = document.getElementById('price-costTwo');
               let infoPrStSlides = document.querySelector('.pickGreen');
     
               let submitSt = document.querySelector('.submitSt');
     
               let attStPlan = document.createAttribute("data-plan");
               let attStCost = document.createAttribute("data-cost");
               let attStSlides = document.createAttribute("data-slides");
     
               let valueStPlan = infoPrStPlan.textContent;
               let valueStCost = infoPrStCost.textContent;
               let valueStSlides = infoPrStSlides.textContent;
     
              let planSt = document.getElementById('planSt')
              let costTwo=document.getElementById('costTwo')
              let slidesSt=document.getElementById('slidesSt')
              

              let sum = valueStCost+'000';
              sum = String(sum).replace(/\s/g, '');;
              planSt.value = valueStPlan;
              costTwo.value = sum;
              slidesSt.value= valueStSlides;



               attStPlan.value = valueStPlan;
               attStCost.value = valueStCost + ' тыс. руб.';
               attStSlides.value = valueStSlides;
               submitSt.setAttributeNode(attStPlan); 
               submitSt.setAttributeNode(attStCost);
               submitSt.setAttributeNode(attStSlides);  


               if(infoPrStCost.classList.contains('eleven')){
                attStCost.value = '11 тыс. руб';
              }else if(!infoPrStCost.classList.contains('eleven')){
                submitSt.setAttributeNode(attStCost);
              }

              


             
            
               console.log(submitSt);
            
            overflow.className='overflow';
            document.body.appendChild(overflow);
            overflow.style.display = 'block';
            overlayStandard.style.display="block";
            fixStandard.style.filter="blur(5px)";
            
            
            }
           
          linkStandard.addEventListener('click',OpenWindowStandard);
          
          let CloseWindowStandard =()=>{
            
            overflow.style.display="none";
            overlayStandard.style.display="none";
            fixStandard.style.filter="none";
            fixStandard.style.background="none";
            postcardStandard.reset();
          }
          closePopupStandard.addEventListener('click',CloseWindowStandard);
          
          document.addEventListener('mousedown', function(e){
            if(e.target.closest('.overlay-standard') === null||e.target==overlayStandard){
              
                overlayStandard.style.display = 'none';
                fixStandard.style.filter="none";
                fixStandard.style.background="none";
                overflow.style.display="none";
                postcardStandard.reset();
                
            } 
            
          });

    }
    if (linkPro = document.querySelector('.design-button')) {
      ///////////////////////////////////////////////////////// InfoPrPro


      ///////////////////////////////////////////////////////
      postcardPro = document.querySelector('.postcard-pro');
      closePopupPro = document.querySelector('.close-popup__pro');
      overlayPro	= document.querySelector('.overlay-pro');
      popUpPro = document.querySelector('.pop-up__pro');
      overflow = document.createElement('div');
      fixPro = document.querySelector('.fix-pro');
      let OpenWindowPro =()=>{
       ///////////////////////////////////////////////////////// InfoPrSt
               let infoPrProPlan = document.querySelector('.infoPrPro');
               let infoPrProCost = document.getElementById('price-costThree');
               let infoPrProSlides = document.querySelector('.pickGreen');
     
               let submitPro = document.querySelector('.submitPro');
     
               let attProPlan = document.createAttribute("data-plan");
               let attProCost = document.createAttribute("data-cost");
               let attProSlides = document.createAttribute("data-slides");
     
               let valueProPlan = infoPrProPlan.textContent;
               let valueProCost = infoPrProCost.textContent;
               let valueProSlides = infoPrProSlides.textContent;


    
              let planPro = document.getElementById('planPro')
              let costThree=document.getElementById('costThree')
              let slidesPro=document.getElementById('slidesPro')


              let sum = valueProCost+'000';
              sum = String(sum).replace(/\s/g, '');;
              planPro.value = valueProPlan;
              costThree.value = sum;
              slidesPro.value= valueProSlides;
  

     
               attProPlan.value = valueProPlan;
               attProCost.value = valueProCost + ' тыс. руб.';
               attProSlides.value = valueProSlides;
               submitPro.setAttributeNode(attProPlan); 
               submitPro.setAttributeNode(attProCost);
               submitPro.setAttributeNode(attProSlides);  
     
           
           

               if(infoPrProCost.classList.contains('sixteen')){
                attProCost.value = '16 тыс. руб';
              }else if(!infoPrProCost.classList.contains('sixteen')){
                submitPro.setAttributeNode(attProCost);
              }

            console.log(submitPro);
            




          
          overflow.className='overflow';
          document.body.appendChild(overflow);
          overflow.style.display = 'block';
          overlayPro.style.display="block";
          fixPro.style.filter="blur(5px)";
          
          
          }
         
        linkPro.addEventListener('click',OpenWindowPro);
        
        let CloseWindowPro =()=>{
          
          overflow.style.display="none";
          overlayPro.style.display="none";
          fixPro.style.filter="none";
          fixPro.style.background="none";
          postcardPro.reset();
        }
        closePopupPro.addEventListener('click',CloseWindowPro);
        
        document.addEventListener('mousedown', function(e){
          if(e.target.closest('.overlay-pro') === null||e.target==overlayPro){
            
              overlayPro.style.display = 'none';
              fixPro.style.filter="none";
              fixPro.style.background="none";
              overflow.style.display="none";
              postcardPro.reset();
              
          } 
          
        });

  }

  if(agree = document.querySelector('.agreem')) {
    
    agreeBlock = document.querySelector('.agree-block');
    closePopupAgree = document.querySelector('.close-popup__agree');
    overlayAgree	= document.querySelector('.overlay-agree');
    popUpAgree = document.querySelector('.pop-up__agree');
    overflow = document.createElement('div');
    fixAgree = document.querySelector('.fix-agree');
    overflowAgree = document.createElement('div');
    overlayBasic	= document.querySelector('.overlay-basic');
    fixBasic = document.querySelector('.fix-basic');
    let OpenWindowAgree =()=>{
       
        overflow.className='overflow';
        document.body.appendChild(overflow);
        overflow.style.display = 'block';
        overlayAgree.style.display="block";
        fixAgree.style.filter="blur(5px)";
        
        overlayBasic.style.display="none";
        fixBasic.style.filter="none";
        fixBasic.style.background="none"

        }
       
      agree.addEventListener('click',OpenWindowAgree);
      
      let CloseWindowAgree =()=>{
        
        overflowAgree.style.display="none";
        overlayAgree.style.display="none";
        fixAgree.style.filter="none";
        fixAgree.style.background="none";
        overlayBasic.style.display="block";
        fixBasic.style.filter="blur(5px)";
        
        
        
      }
      closePopupAgree.addEventListener('click',CloseWindowAgree);
      
      document.addEventListener('mousedown', function(e){
        if(e.target.closest('.overlay-agree') === null||e.target==overlayAgree){
          
            overlayAgree.style.display = 'none';
            fixAgree.style.filter="none";
            fixAgree.style.background="none";
            overflow.style.display="none";

            
        } 
        
      });

}
//////////////////////////////////////////////////////////////////
if(agreeSt = document.querySelector('.agreeSt')) {
  
  agreeBlock = document.querySelector('.agree-block');
  closePopupAgreeSt = document.querySelector('.close-popup__agreeSt');
  overlayAgreeSt	= document.querySelector('.overlay-agreeSt');
  popUpAgreeSt = document.querySelector('.pop-up__agreeSt');
  overflow = document.createElement('div');
  fixAgreeSt = document.querySelector('.fix-agreeSt');
  overlayStandard	= document.querySelector('.overlay-standard');
  fixStandard = document.querySelector('.fix-standard');
  let OpenWindowAgreeSt =()=>{
      overflow.className='overflow';
      document.body.appendChild(overflow);
      overflow.style.display = 'block';
      overlayAgreeSt.style.display="block";
      fixAgreeSt.style.filter="blur(5px)";
      
      overlayStandard.style.display="none";
      fixStandard.style.filter="none";
      fixStandard.style.background="none"

      }
     
    agreeSt.addEventListener('click',OpenWindowAgreeSt);
    
    let CloseWindowAgreeSt =()=>{
      
      overflow.style.display="none";
      overlayAgreeSt.style.display="none";
      fixAgreeSt.style.filter="none";
      fixAgreeSt.style.background="none";
      overlayStandard.style.display="block";
      fixStandard.style.filter="blur(5px)";
    }
    closePopupAgreeSt.addEventListener('click',CloseWindowAgreeSt);
    
    document.addEventListener('mousedown', function(e){
      if(e.target.closest('.overlay-agreeSt') === null||e.target==overlayAgreeSt){
        
          overlayAgreeSt.style.display = 'none';
          fixAgreeSt.style.filter="none";
          fixAgreeSt.style.background="none";
          overflow.style.display="none";

          
      } 
      
    });

}
//////////////////////////////////////////////////////////////////////////
if(agreePro = document.querySelector('.agreePro')) {
  
  agreeBlock = document.querySelector('.agree-block');
  closePopupAgreePro = document.querySelector('.close-popup__agreePro');
  overlayAgreePro	= document.querySelector('.overlay-agreePro');
  popUpAgreePro = document.querySelector('.pop-up__agreePro');
  overflow = document.createElement('div');
  fixAgreePro = document.querySelector('.fix-agreePro');
  overlayPro	= document.querySelector('.overlay-pro');
  fixPro = document.querySelector('.fix-Pro');
  let OpenWindowAgreePro =()=>{
      
      overflow.className='overflow';
      document.body.appendChild(overflow);
      overflow.style.display = 'block';
      overlayAgreeSt.style.display="block";
      fixAgreeSt.style.filter="blur(5px)";
      
      overlayPro.style.display="none";
      fixPro.style.filter="none";
      fixPro.style.background="none"

      }
     
    agreePro.addEventListener('click',OpenWindowAgreePro);
    
    let CloseWindowAgreePro =()=>{
      
      overflow.style.display="none";
      overlayAgreePro.style.display="none";
      fixAgreePro.style.filter="none";
      fixAgreePro.style.background="none";
      overlayPro.style.display="block";
      fixPro.style.filter="blur(5px)";
    }
    closePopupAgreePro.addEventListener('click',CloseWindowAgreePro);
    
    document.addEventListener('mousedown', function(e){
      if(e.target.closest('.overlay-agreePro') === null||e.target==overlayAgreePro){
          
          overlayAgreePro.style.display = 'none';
          fixAgreePro.style.filter="none";
          fixAgreePro.style.background="none";
          overflow.style.display="none";

          
      } 
      
    });

}

//////////////////////////////////////////////////////////////////////////
          let anchors;
        if (anchors = document.querySelectorAll('a[href*="#"]')) {
          for (let anchor of anchors) {
            anchor.addEventListener("click",(e)=>{
              e.preventDefault();
              var blockId = anchor.getAttribute('href')
              document.querySelector('' + blockId).scrollIntoView({
                behavior:"smooth",
                block:"start"
    })


  })
}
      }
      if (wrapper = document.querySelector('.wrapper')) {
          $('[data-google-lang]').click(function () {
        TranslateSetCookie($(this).attr("data-google-lang"))
        // Перезагружаем страницу
        window.location.reload();
    });
}

if (wrapper = document.querySelector('.wrapper')) {
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



}


if(wrapper = document.querySelector('.wrapper')){
  $(document).ready(function() {
    $("#phone").mask("+7 (999) 99-99-999");
  });
  console.log('mask');
  
}






    //     const googleTranslateConfig = {
    //       lang: "ru",
          
    //   };
      
    //   let TranslateInit = () => {
      
    //       let code = TranslateGetCode();
    //       // Находим флаг с выбранным языком для перевода и добавляем к нему активный класс
    //       $('[data-google-lang="' + code + '"]').addClass('planetImg__img_active');
      
    //       if (code == googleTranslateConfig.lang) {
    //           // Если язык по умолчанию, совпадает с языком на который переводим
    //           // То очищаем куки
    //           TranslateClearCookie();
    //       }
      
    //       // Инициализируем виджет с языком по умолчанию
    //       new google.translate.TranslateElement({
    //           pageLanguage: googleTranslateConfig.lang,
    //       });
      
    //       // Вешаем событие  клик на флаги
    //       $('[data-google-lang]').click(function () {
    //           TranslateSetCookie($(this).attr("data-google-lang"))
    //           // Перезагружаем страницу
    //           window.location.reload();
    //       });
    //   }
    //   TranslateInit ()
      
    //   function TranslateGetCode() {
    //       // Если куки нет, то передаем дефолтный язык
    //       let lang = ($.cookie('googtrans') != undefined && $.cookie('googtrans') != "null") ? $.cookie('googtrans') : googleTranslateConfig.lang;
    //       return lang.substr(-2);
    //   }
      
    //   function TranslateClearCookie() {
    //       $.cookie('googtrans', null);
    //       $.cookie("googtrans", null, {
    //           domain: "." + document.domain,
    //       });
    //   }
      
    //   function TranslateSetCookie(code) {
    //       // Записываем куки /язык_который_переводим/язык_на_который_переводим
    //       $.cookie('googtrans', "/auto/" + code);
    //       $.cookie("googtrans", "/auto/" + code, {
    //           domain: "." + document.domain,
    //       });
    //   }
    // }

    }

    const swup = new Swup();
    init();
    swup.on('contentReplaced', init);
    
});








