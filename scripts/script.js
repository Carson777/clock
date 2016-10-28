var clockFace = ""
var clockColor = ""
var clockStatus = {
  time: true
}
//selects HTML node with clockFace class
var clockVar = document.querySelector(".clockFace")
//selects HTML node with line class
var line = document.querySelector(".line")
//selects HTML node with cBackground class
var backGroundColor = document.querySelector(".cBackground")

//gets current time, then converts it to hex and changes background to that hex.
//on mouse enter: show hex. on mouse leave: show time
timeToHex = function() {
  var now = new Date()
  var hrs = now.getHours(),
    mins = now.getMinutes(),
    seconds = now.getSeconds()

  //displays time as 09 instead of 9
  if (hrs <= 9) {
    hrs = "0" + hrs
  }
  if (mins <= 9) {
    mins = "0" + mins
  }
  if (seconds <= 9) {
    seconds = "0" + seconds
  }

  //displays time as 00:00:00
  clockFace = hrs + ':' + mins + ':' + seconds

  //this is how we can go from an inter to another bas system.
  var reds = (hrs * 10).toString(16),
    greens = (mins * 4).toString(16),
    blues = (seconds * 4).toString(16)
  //adds 0 to single digits since hex requires 6 digits
  if (reds.length < 2) {
    reds = "0" + reds
  }
  if (greens.length < 2) {
    greens = "0" + greens
  }
  if (blues.length < 2) {
    blues = "0" + blues
  }

  clockColor = reds + greens + blues
  console.log(clockColor)
  //changes background based on hex of #rrggbb
  backGroundColor.style.backgroundColor = "#" + clockColor

  //sets default of clock to display time
  clockVar.textContent = clockFace
  line.style.width = (seconds * 4) + "px"

  //mouse enter = display hex. mouse leave = display time
  clockVar.addEventListener('mouseenter', faceChange)
  clockVar.addEventListener('mouseleave', faceChange2)

  //time boolean changes based on event listeners
  if (clockStatus.time === false) {
    clockVar.textContent = clockColor
  } else if (clockStatus.time === true) {
    clockVar.textContent = clockFace
  }

}

//update code every seconds
setInterval(function() {
  timeToHex()
}, 1000)

//used for mouseenter event listener
var faceChange = function() {
  clockStatus.time = false
}
//used for mouseleave event listener
var faceChange2 = function() {
  clockStatus.time = true
}


