let block =document.querySelectorAll('.bought');
for (let i = 0; i < block.length; i++) {
  block[i].addEventListener('click',function(){
      if(block[i].style.hover==' #9a9a9a'){
          block[i].style.hovecost_content='red';
      }else if(block[i].style.hovecost_content='red'){
        block[i].style.background=='blue';
      }else {
        block[i].style.background=='#9a9a9a';
      }
  })
    
}





















