$(document).ready(() => {
 
	$('.navbar').on('mouseleave', () => {
    	
    	$('.navbar').hide();
   
    	})
    
    	$('.nav-link').animate({
      	fontSize: '18px'
    	}, 200)
  	})
});
