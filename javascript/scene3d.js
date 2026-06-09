(function () {
  const canvas = document.getElementById("canvas-3d")
  if (!canvas || typeof THREE === "undefined") return

  const hero = document.getElementById("hero")
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 200)
  camera.position.z = 35

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
  })
  renderer.setClearColor(0x000000, 0)

  const particleCount = 1800
  const positions = new Float32Array(particleCount * 3)
  const colors = new Float32Array(particleCount * 3)

  const palette = [
    new THREE.Color(0x00f0ff),
    new THREE.Color(0xff2d95),
    new THREE.Color(0xb44aff),
  ]

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 80
    positions[i * 3 + 1] = (Math.random() - 0.5) * 60
    positions[i * 3 + 2] = (Math.random() - 0.5) * 60

    const color = palette[Math.floor(Math.random() * palette.length)]
    colors[i * 3] = color.r
    colors[i * 3 + 1] = color.g
    colors[i * 3 + 2] = color.b
  }

  const particleGeo = new THREE.BufferGeometry()
  particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3))
  particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3))

  const particles = new THREE.Points(
    particleGeo,
    new THREE.PointsMaterial({
      size: 0.15,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    })
  )
  scene.add(particles)

  const torus = new THREE.Mesh(
    new THREE.TorusKnotGeometry(7, 2, 80, 14),
    new THREE.MeshBasicMaterial({
      color: 0xff2d95,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    })
  )
  torus.position.set(14, 4, -8)
  scene.add(torus)

  const ico = new THREE.Mesh(
    new THREE.IcosahedronGeometry(5, 0),
    new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    })
  )
  ico.position.set(-13, -2, -4)
  scene.add(ico)

  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(10, 0.15, 8, 60),
    new THREE.MeshBasicMaterial({
      color: 0xb44aff,
      transparent: true,
      opacity: 0.25,
    })
  )
  ring.position.set(0, -8, -15)
  ring.rotation.x = Math.PI / 3
  scene.add(ring)

  let mouseX = 0
  let mouseY = 0
  let targetX = 0
  let targetY = 0

  document.addEventListener("mousemove", (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2
  })

  function resize() {
    if (!hero) return
    const w = hero.offsetWidth
    const h = hero.offsetHeight
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  }

  resize()
  window.addEventListener("resize", resize)

  function animate() {
    requestAnimationFrame(animate)

    targetX += (mouseX * 4 - targetX) * 0.03
    targetY += (-mouseY * 3 - targetY) * 0.03

    particles.rotation.y += 0.0004
    particles.rotation.x += 0.00015
    torus.rotation.x += 0.006
    torus.rotation.y += 0.009
    ico.rotation.x -= 0.005
    ico.rotation.y += 0.007
    ring.rotation.z += 0.003

    camera.position.x = targetX
    camera.position.y = targetY
    camera.lookAt(scene.position)

    renderer.render(scene, camera)
  }

  animate()
})()
