var clockFace = ""
var clockColor = ""
var clockStatus = {
  time: true
}
var clockVar = document.querySelector(".clockFace")
var line = document.querySelector(".line")
var backGroundColor = document.querySelector(".cBackground")

timeToHex = function() {
  var now = new Date()
  var hrs = now.getHours(),
    mins = now.getMinutes(),
    seconds = now.getSeconds()

  if (hrs <= 9) {
    hrs = "0" + hrs
  }
  if (mins <= 9) {
    mins = "0" + mins
  }
  if (seconds <= 9) {
    seconds = "0" + seconds
  }

  clockFace = hrs + ':' + mins + ':' + seconds

  //this is how we can go from an inter to another bas system.
  var reds = (hrs * 10).toString(16),
    greens = (mins * 4).toString(16),
    blues = (seconds * 4).toString(16)
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
  backGroundColor.style.backgroundColor = "#" + clockColor

  clockVar.textContent = clockFace
  line.style.width = (seconds * 4) + "px"

  clockVar.addEventListener('mouseenter', faceChange)
  clockVar.addEventListener('mouseleave', faceChange2)

  if (clockStatus.time === false) {
    clockVar.textContent = clockColor
  } else if (clockStatus.time === true) {
    clockVar.textContent = clockFace
  }

}

setInterval(function() {
  timeToHex()
}, 1000)

var faceChange = function() {
  clockStatus.time = false
}
var faceChange2 = function() {
  clockStatus.time = true
}


