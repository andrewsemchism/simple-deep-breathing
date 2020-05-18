//selects the breathing-circle class
const Breathingcircle = document.querySelector('.breathing-circle');

let breathInTime = 1000
let breathOutTime = 1000

//breathing-animation class
function breathAnimation() {
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

breathAnimation(breathInTime, breathOutTime)
let interval = setInterval(breathAnimation, breathInTime + breathOutTime)

// selects the range inputs and the number inputs
const breathInRangeInput = document.getElementById('breath-in-speed-range')
const breathInNumberInput = document.getElementById('breath-in-speed-number')
const breathOutRangeInput = document.getElementById('breath-out-speed-range')
const breathOutNumberInput = document.getElementById('breath-out-speed-number')


// controls for the breathing animation
breathInNumberInput.addEventListener('input', function (e) {
  breathInRangeInput.value = e.target.value;
  breathInTime = breathInNumberInput.value * 1000
  console.log(breathInTime + breathOutTime)
  clearInterval(interval);
  breathAnimation(breathInTime + breathOutTime)
  interval = setInterval(breathAnimation, breathInTime + breathOutTime)
});
breathInRangeInput.addEventListener('input', function (e) {
  breathInNumberInput.value = e.target.value;
  breathInTime = breathInNumberInput.value * 1000
  console.log(breathInTime + breathOutTime)
  clearInterval(interval);
  breathAnimation(breathInTime + breathOutTime)
  interval = setInterval(breathAnimation, breathInTime + breathOutTime)
});

breathOutNumberInput.addEventListener('input', function (e) {
  breathOutRangeInput.value = e.target.value;
  breathOutTime = breathOutNumberInput.value * 1000
  console.log(breathInTime + breathOutTime)
  clearInterval(interval);
  breathAnimation(breathInTime + breathOutTime)
  interval = setInterval(breathAnimation, breathInTime + breathOutTime)
});
breathOutRangeInput.addEventListener('input', function (e) {
  breathOutNumberInput.value = e.target.value;
  breathOutTime = breathOutNumberInput.value * 1000
  console.log(breathInTime + breathOutTime)
  clearInterval(interval);
  breathAnimation(breathInTime + breathOutTime)
  interval = setInterval(breathAnimation, breathInTime + breathOutTime)
});


//navbar
const settings = document.querySelector('.sidebar')
function toggleNav() {
  settings.classList.toggle("show-side-bar");
  //settings.style.transform = "translate3d(0vw, 0, 0)"
}
