import $ from 'jquery';
import {TimelineMax} from 'gsap';

var tl = new TimelineMax();

tl
  	.fromTo('.maske__inner', 2, {scale:0.01}, {scale:1,onComplete: function() {
  		$('.maske').remove();
  	}})
  	.fromTo('.header__left',0.5,{x: -500,},{x:0,rotation:360})
  	// .fromTo('.header__right',1,{x: 200,},{x:0}, '-=0.6')
  	.staggerFromTo('.nav a', 0.5, {opacity:0,y:40}, {rotation:360,opacity:1,y:0}, 0.25)
  	.fromTo('.blog-content', 0.5, {x:-1800,scale:0.01}, {x:0,scale:1})
  	.fromTo('.section', 0.5, {x:-1800,scale:0.01}, {x:0,scale:1,rotation:360});

