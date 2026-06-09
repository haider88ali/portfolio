const defaultProps = {
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  distance: "40px",
  origin: "bottom",
  duration: 1000,
  desktop: true,
  mobile: true,
}

ScrollReveal().reveal(".hero-badge", { ...defaultProps, delay: 200, distance: "20px" })
ScrollReveal().reveal(".hero-title", {
  ...defaultProps,
  delay: 400,
  origin: window.innerWidth > 768 ? "left" : "bottom",
})
ScrollReveal().reveal(".hero-subtitle", { ...defaultProps, delay: 600 })
ScrollReveal().reveal(".hero-cta", { ...defaultProps, delay: 800 })
ScrollReveal().reveal(".hero-stats .stat", { ...defaultProps, delay: 1000, interval: 150 })
ScrollReveal().reveal(".scroll-down-link", { ...defaultProps, delay: 1400, origin: "top" })

ScrollReveal().reveal(".section-header", { ...defaultProps, delay: 200, distance: "30px" })
ScrollReveal().reveal(".profile-3d", { ...defaultProps, delay: 400, scale: 0.85, rotate: { x: 10, y: -10, z: 0 } })
ScrollReveal().reveal(".about-wrapper__info", { ...defaultProps, delay: 500, origin: "right" })

ScrollReveal().reveal(".skills-category", { ...defaultProps, delay: 300, interval: 200 })
ScrollReveal().reveal(".skill-cube", { ...defaultProps, delay: 400, interval: 60, scale: 0.9 })

ScrollReveal().reveal(".project-card-3d", { ...defaultProps, delay: 300, interval: 200, rotate: { x: 5, y: 0, z: 0 } })

ScrollReveal().reveal(".contact-wrapper", { ...defaultProps, delay: 400, scale: 0.95 })

ScrollReveal().reveal(".social-links a", { ...defaultProps, delay: 300, interval: 100 })
