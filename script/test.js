	var test = {};
$(document).ready(function() {
	$('.btnOpen').click(function(){
		
		$('#wraper').popupPlugin({'animateOpening':'top' ,
								  'title':'this is my  title',
								  'content':'Write Some Contetnt here.',//<img src="SETTINGS.png">',
								  'buttons':{'name':'Hello','action':function(){alert("Hello btn vas clicked");}},
								  'onClose':{'animateCloseing':'top'}
								});
		
	});
		//$('#wraper').popupPlugin();	
/*
        Object.defineProperty(test, "hello", {
            get : function () { 
            	console.log('aaaaaaaaaaaaa', this);
                return this;
            },
            set : function (val) {
                alert(val);
                this._hello = val;
            	console.log('bbbbbbbbbbbbbbbbbbb', this._hello);
            }
        });

        test.hello = "world";
        test.aa = "es aan em ";
*/
});