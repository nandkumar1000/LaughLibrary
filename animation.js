var tl=gsap.timeline();
tl.from(".container-fluid",{
  y:900,
  x:900,
  duration:0.5,
  delay:0.3,
  opacity:0,
  stagger:0.4
})
tl.from(".nand",{
  y:-900,
  duration:0.5,
  opacity:0,
  stagger:0.3
})
tl.from(".conatiner h1",{
  x:-700,
  duration:0.5,
  opacity:0,
  // rotate:360,
  stagger:0.2
})
tl.from(".conatiner p",{
  x:700,
  duration:0.5,
  opacity:0,
  // rotate:360,
  stagger:0.2
})
tl.from("#fetchjoke",{
  x:-700,
  duration:0.5,
  opacity:0,
  // rotate:360,
  stagger:0.2
})
tl.from("#footer",{
  y:-400,
  duration:0.3,
  opacity:0,
  // backgroundImage:lineargradient(red,black),
  // rotate:360,
  stagger:0.2
})
tl.from("#footer p",{})
