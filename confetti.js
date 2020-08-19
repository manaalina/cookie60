var vw = $( window ).width(),
    vh = $(window).height(),
    num = vw/20;

num = Math.max(num, 50);

function random(high){
  return Math.random() * high;
}

for(var i = 0; i<= num; i++){
  $('#confetti-container').append("<div class='confetti' style='background-color: rgb(" + Math.round(random(255)) + "," + Math.round(random(255)) + "," + Math.round(random(255)) + ");'></div>")
}

var $confetti = $('.confetti'),
    tl = new TimelineMax();

tl.add('start')

$confetti.each(function(index, element){
  var dot = $(this),
      dotTL = new TimelineMax();

  //set each confetti piece
  dotTL.set(dot, {
    x: random(vw),
    y: random(-vh) - 10,
    scale: random(1) + 1,
    opacity: random(1),
    transformStyle:"preserve-3d"
  });

  tl.to(dot, 6, {
    y: vh + 100,
    ease:Sine.easeInOut,
    repeat:-1,
    opacity: random(2),
    delay: -6,
    scale: random(1) + 1
  }, random(6), 'start')

  tl.to(dot, 2,{
   x:'+=' + random(100),
   repeat:-1,
   yoyo:true,
   ease:Sine.easeInOut
  }, random(2), 'start')

  tl.to(dot, random(4),{
   repeat:-1,
   yoyo:true,
   rotationX: random(270),
   rotationY: random(270),
   ease:Sine.easeInOut
  }, random(2), 'start')

});
