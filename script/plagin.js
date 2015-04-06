var generated = 0;

///////////////////////////////////////////////////////////////////////////////////////////////////////

  /*  function showPopup(info,animType,m)
    {   
        this.removeClass('zoomIn');
        $(this).removeClass('zoomOut');
        $(this).removeAttr('style');
        $(this).css('background-color',wrapperBgColor);
        getOpenAnimType(saveObj.openAnimEffectType)();
        $('#edit').fadeIn('fast');
        if (m=='modal') {
            $('#fade').bind('click',closePopup);
        }
        $('.closePopup').bind('click', closePopup)
    }*/
  

//////////////////////////////////////////////////////////open end !!!!!!//////////////////////////////

///////////////////////////////////////////////////////////close/////////////////////////////
/*
        function closeToTop()
        {
            $('#fade').delay(100).fadeOut();
            $(this).animate({'top':'-100%'},function(){elem.css({'display':'none'});});
        }
        function closeToBottom(){

            $("#fade").delay(100).fadeOut();
            $(this).animate({'top':'200%'},function(){elem.css({'display':'none'});});
        }
        function closeToLeft(){

            $("#fade").delay(100).fadeOut();                
            elem.animate({'left':'-100%'},function(){elem.css({'display':'none'});});
        }
        function closeToRight(){

            $("#fade").delay(100).fadeOut();
            elem.animate({'left':'200%'},function(){elem.css({'display':'none'});});
        }
        function closeWithZoomIn(){

            elem.animate({},function(){elem.css({'opacity':'0.0005','z-index':'-100','-webkit-transition':'all .5s linear','-webkit-transform':'scale(1.5,1.5)'});});
            $("#fade").delay(100).fadeOut();    

        }
        function closeWithZoomOut(){

            elem.animate({},function(){elem.css({'opacity':'0.0005','z-index':'-100','-webkit-transition':'all .5s linear','-webkit-transform':'scale(0,0)'});});
            $("#fade").delay(100).fadeOut();
      
        }
        function closeWithNone(){
            $("#fade").delay(100).fadeOut();                
            elem.css({'display':'none','left':'50%','top':'50%'});
        }


        function getCloseAnimType(effectType){


        switch(effectType) {
            case 'top' :
                return closeToTop;
                break;

            case 'bottom' :
                return closeToBottom;
                break;

            case 'left' :
               return closeToLeft;
                break;

            case 'right' :
                return closeToRight;
                break;

            case 'none' :
                return closeWithNone;
                break;

            case 'zoomIn' :
                return closeWithZoomIn;
            break;

            case 'zoomOut' :
                return closeWithZoomOut;
                break;  

            default:
                return closeWithNone;
                break;

                                
        }//switch end
    }//closePopup end
*/
   /* function closePopup(e){
   
        if (generated) {
            e.stopPropagation();
            $('#fade').unbind('click',closePopup);
            $('.closePopup').unbind('click', closePopup);
            saveObj.close();
            $('#openPopup').bind('click',openPopup);
        }
        else{

        saveObj.closeAnimEffectType = $('.closeAnimationList').find('input:radio[name="closeEffect"]:checked').val();
        $('#fade').unbind('click',closePopup);
        $('.closePopup').unbind('click', closePopup)

        elem.removeClass('zoomOut');
        elem.removeClass('zoomIn');
        $('#edit').fadeOut('fast');
        getCloseAnimType(saveObj.closeAnimEffectType)();

        $('#openPopup').bind('click',openPopup);
        $('#submitAnimBtn').bind('click',submitEffectInfo);

        }
    }
*/












//////////////////////////////////////////////////////////////////////////////Edit Section code/////////////////////
//$.prototype.openPopup = function(type) {
    
    (function( $ ){
        $.fn.popupPlugin = function(object) {




            var openAnimEffectType,
    modalOrnot,
    closeAnimEffectType,
    id,
    saveObj={},
    cssObj={wraper:{}, btn:{},heading:{}},
    textObj={wraper:{}, btn:{},heading:{}},
    popupBgColor = "#ffffff",
    wrapperBgColor = "#ffffff",

    selectedElementOnPopup = false;

///////////////////////////////////////////////////////////////////////////////////////////////////////
    function openFromTop(elem){

        elem.css({'top':'-100%','left':'50%','display':'block'});
        $("#fade").delay(100).fadeIn();             
        elem.animate({'top':'50%'});

    }
    function openFromBottom(elem){

        elem.css({'top':'200%','left':'50%','display':'block'});
        $("#fade").delay(100).fadeIn();             
        elem.animate({'top':'50%'});
    }
    function openFromLeft(elem){

        elem.css({'left':'-100%','top':'50%','display':'block'});
        $("#fade").delay(100).fadeIn();
        elem.animate({'left':'50%'});
    }
    function openFromRight(elem){

        elem.css({'left':'200%','top':'50%','display':'block'});
        $("#fade").delay(100).fadeIn();
        elem.animate({'left':'50%'});
    }
    function openWithZoomIn(elem){

        elem.css({'left':'50%','top':'50%','display':'block'});
        elem.addClass('zoomIn');
        elem.animate({},function(){elem.css({'opacity':'1','-webkit-transform':'scale(1,1)'});});
        $("#fade").delay(100).fadeIn();
    }
    function openWithZoomOut(elem){
        elem.css({'left':'50%','top':'50%','display':'block'});
        elem.addClass('zoomOut');
        elem.animate({},function(){elem.css({'opacity':'1','-webkit-transform':'scale(1,1)'});});
        $("#fade").delay(100).fadeIn();
    }
    function openWithNone(elem){
        elem.css({'left':'50%','top':'50%','display':'block'});
        $("#fade").delay(100).fadeIn();
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////

 
    function open(animType){
        switch (animType){

            case 'top' :
                return openFromTop;
                break;

            case 'bottom' :
                return openFromBottom;
                break;

            case 'left' :
                return openFromLeft;
                break;

            case 'right' :
                return openFromRight;
                break;

            case 'none' :
                return openWithNone;
                break;

            case 'zoomIn' :
                return openWithZoomIn;
                break;

            case 'zoomOut' :
                return openWithZoomOut;
                break;

            default:
                return openWithNone;
                break;
        }//switch end
    }
    //




        function closeToTop(elem)
        {
            $('#fade').delay(100).fadeOut();
            elem.animate({'top':'-100%'},function(){elem.css({'display':'none'});});
        }
        function closeToBottom(elem){

            $("#fade").delay(100).fadeOut();
            elem.animate({'top':'200%'},function(){elem.css({'display':'none'});});
        }
        function closeToLeft(elem){

            $("#fade").delay(100).fadeOut();                
            elem.animate({'left':'-100%'},function(){elem.css({'display':'none'});});
        }
        function closeToRight(elem){

            $("#fade").delay(100).fadeOut();
            elem.animate({'left':'200%'},function(){elem.css({'display':'none'});});
        }
        function closeWithZoomIn(elem){

            elem.animate({},function(){elem.css({'opacity':'0.0005','z-index':'-100','-webkit-transition':'all .5s linear','-webkit-transform':'scale(1.5,1.5)'});});
            $("#fade").delay(100).fadeOut();    

        }
        function closeWithZoomOut(elem){

            elem.animate({},function(){elem.css({'opacity':'0.0005','z-index':'-100','-webkit-transition':'all .5s linear','-webkit-transform':'scale(0,0)'});});
            $("#fade").delay(100).fadeOut();
      
        }
        function closeWithNone(elem){
            $("#fade").delay(100).fadeOut();                
            elem.css({'display':'none','left':'50%','top':'50%'});
        }






    function close(effectType){


        switch(effectType) {
            case 'top' :
                return closeToTop;
                break;

            case 'bottom' :
                return closeToBottom;
                break;

            case 'left' :
               return closeToLeft;
                break;

            case 'right' :
                return closeToRight;
                break;

            case 'none' :
                return closeWithNone;
                break;

            case 'zoomIn' :
                return closeWithZoomIn;
            break;

            case 'zoomOut' :
                return closeWithZoomOut;
                break;  

            default:
                return closeWithNone;
                break;

                                
        }//switch end
    }//closePopup end





  
    function onClose(){

        $('.colseXIcone').unbind('click', onClose);
       // console.log('close',close(settings['onClose']['animateCloseing']));
        close(settings['onClose']['animateCloseing'])(popup);

           
    }

///////////////////////////////////////////////////////////////////plagin////////////////////////////////////    
        
        var popup = $(this);
        //var content= '<p>Write Some Text here.</p><img src="SETTINGS.png">';
       
        var settings = {'animateOpening':'none',
                        'title':' ',
                        'content':'write some content here',
                        'onClose':{'animateCloseing':'none'},
                        'buttons':{'name':'button','action':function(){console.log("clicked");}}
                       };
       
        $.extend(settings , object);       
////////////////////////////////////////////////////stex bug ka erb vor norices open anum emty a anum bayc heto naxort contentna lcnum mejy//
        popup.empty();
        popup.append('<div class="popupHeader"><span class = "colseXIcone"><span></div><div class="popupContent">'+settings['content']+'</div><div class="popupFooter"></div>');
       
        $('.popupHeader').prepend(settings['title']);
       
        
        open(settings['animateOpening'])(popup);
        $('.colseXIcone').bind('click', onClose );
       
        $('.popupFooter').append("<button id = '"+settings['buttons']['name']+"'>"+settings['buttons']['name']+"</button>");
            $('#'+settings['buttons']['name']).click(function(){
                settings['buttons']['action']();
            });   

        
      
        
             
     

        
};

})( jQuery );



