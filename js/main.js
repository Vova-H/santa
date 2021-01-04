'use strict';


const STARS = [
	{
	  size: 35,
	  top: 40,
	  left: 75,
	  time: 4.3
	},
	{
	  size: 15,
	  top: 30,
	  left: 15,
	  time: 4.6
	},
	{
	  size: 20,
	  top: 70,
	  left: 85,
	  time: 4.5
	},
	{
	  size: 80,
	  top: 20,
	  left: 25,
	  time: 4.4
	},
	{
	  size: 50,
	  top: 80,
	  left: 15,
	  time: 3.9
	},
	{
	  size: 50,
	  top: 85,
	  left: 80,
	  time: 4.6
	},
	{
	  size: 15,
	  top: 20,
	  left: 85,
	  time: 3.7
	},
	{
	  size: 20,
	  top: 25,
	  left: 10,
	  time: 4.3
	},
	{
	  size: 25,
	  top: 65,
	  left: 70,
	  time: 4.4
	},
	{
	  size: 45,
	  top: 70,
	  left: 90,
	  time: 3.6
	},
	{
	  size: 60,
	  top: 30,
	  left: 85,
	  time: 4.5
	},
	{
	  size: 45,
	  top: 65,
	  left: 5,
	  time: 4.5
	},
	{
	  size: 15,
	  top: 70,
	  left: 25,
	  time: 3.7
	}
  ];

const STAR = $('.star').clone();


(function($){
	$(document).ready(function() {
		// Code
		$.each(STARS, (i, star ) => {
			console.log(star);
			let cloneedStar = STAR.clone();


			cloneedStar.css({
				'width': `${star.size}px`,
				'height': `${star.size}px`,
				'top': `${star.top}%`,
				'left': `${star.left}%`,
				'animation-duration':`${star.time}s`
			});

			$('body').append(cloneedStar);
		});
	});
})(jQuery);
