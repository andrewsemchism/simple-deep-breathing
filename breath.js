//selects the breathing-circle class
const Breathingcircle = document.querySelector('.breathing-circle');

let breathInTime = 3000
let breathOutTime = 4000

//breathing-animation class
function breathAnimation() {
  console.log('Breath in time: ' + breathInTime)
  Breathingcircle.animate([
    //Keyframes
    { transform: 'scale(0.3)' },
    { transform: 'scale(1)' },
  ], {
    //timing options
    duration: breathInTime,
    fill: 'forwards',
  });

  //breath out
  Breathingcircle.animate([
    //Keyframes
    { transform: 'scale(1)' },
    { transform: 'scale(0.3)'}
  ], {
    //timing options
    delay: breathInTime,
    duration: breathOutTime,
    fill: 'forwards',
  });
}


breathAnimation()
setInterval(breathAnimation, breathInTime + breathOutTime)
