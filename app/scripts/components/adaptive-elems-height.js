export default (parent, elem) => {

  const allParents = $(parent);

  allParents.each(function(){
    const thisElems = $(this).find(elem);
    
    if(thisElems.length){
  
      let maxH = 0;
  
      thisElems.css('height', 'auto');

      thisElems.each(function(){
        if($(this).outerHeight() > maxH){
          maxH = $(this).outerHeight();
        }
      });
  
      thisElems.css('height', maxH + 'px');
    }
  })

}