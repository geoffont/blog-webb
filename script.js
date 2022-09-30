$(function(){
	var currentTime,
			h,
			m,
			s;
	
	function animateClock( timeNow ){
		h = 90 + 30 * ((timeNow.getHours() + 24) % 12 || 12);
		m = 90 + 6 * timeNow.getMinutes();
		s = 90 + 6 * timeNow.getSeconds();
		
		$('.clock__seconds').css({'transform':'rotate('+s+'deg) translate(-106px) rotate(-90deg)'});
		$('.clock__minutes').css({'transform':'rotate('+m+'deg) translate(-115px) rotate(-90deg)'});
		$('.clock__hours').css({'transform':'rotate('+h+'deg) translate(-115px) rotate(-90deg)'});
	}
	
	function intervallTime(){
		setInterval(function(){
			currentTime = new Date();
			animateClock( currentTime );
		},1000);
	}
	
	intervallTime();
});