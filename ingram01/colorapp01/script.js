const circles = document.querySelectorAll(".circle")

circles.forEach((element, index) => {
  let hue = (index/circles.length) * 360
  element.style.backgroundColor = `hsl(${hue}, 80%, 50%)`
})

// learn more at https://www.creativeCodingClub.com
// unlock over 17 hours of my best GreenSock and creative coding tips and tricks









