if (typeof VanillaTilt !== "undefined") {
  VanillaTilt.init(document.querySelectorAll(".js-tilt"), {
    max: 15,
    speed: 400,
    scale: 1.03,
    glare: true,
    "max-glare": 0.25,
    perspective: 1200,
  })
}
