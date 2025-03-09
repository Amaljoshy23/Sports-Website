document.addEventListener("DOMContentLoaded", () => {
    // Mobile Navigation Toggle
    const burger = document.querySelector(".burger")
    const nav = document.querySelector(".nav-links")
    const navLinks = document.querySelectorAll(".nav-links li")
  
    burger.addEventListener("click", () => {
      // Toggle Nav
      nav.classList.toggle("nav-active")
  
      // Animate Links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = ""
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
        }
      })
  
      // Burger Animation
      burger.classList.toggle("toggle")
    })
  
    // Close mobile menu when clicking on a link
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("nav-active")
        burger.classList.remove("toggle")
        navLinks.forEach((link) => {
          link.style.animation = ""
        })
      })
    })
  
    // Parallax Effect
    window.addEventListener("scroll", () => {
      const parallaxSections = document.querySelectorAll(".parallax-section")
  
      parallaxSections.forEach((section) => {
        const distance = window.scrollY
        const parallaxBg = section.querySelector(".parallax-bg")
  
        // Calculate how far the section is from the top of the viewport
        const sectionTop = section.getBoundingClientRect().top + window.scrollY
        const sectionHeight = section.offsetHeight
  
        // Only apply parallax if the section is in or near the viewport
        if (distance > sectionTop - window.innerHeight && distance < sectionTop + sectionHeight) {
          const speed = 0.5 // Adjust for faster/slower parallax
          const yPos = (distance - sectionTop) * speed
  
          parallaxBg.style.transform = `translate3d(0, ${yPos}px, 0)`
        }
      })
    })
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)
  
        if (targetElement) {
          // Get the target's position relative to the viewport
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY
  
          // Adjust for fixed header
          const headerOffset = 80
          const offsetPosition = targetPosition - headerOffset
  
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      })
    })
  
    // Animate elements when they come into view
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".card, .legend, .timeline-item, .stat")
  
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top
        const windowHeight = window.innerHeight
  
        if (elementPosition < windowHeight - 100) {
          element.style.opacity = "1"
          element.style.transform = "translateY(0)"
        }
      })
    }
  
    // Set initial state for animated elements
    const elementsToAnimate = document.querySelectorAll(".card, .legend, .timeline-item, .stat")
    elementsToAnimate.forEach((element) => {
      element.style.opacity = "0"
      element.style.transform = "translateY(20px)"
      element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
    })
  
    // Run animation check on load and scroll
    window.addEventListener("load", animateOnScroll)
    window.addEventListener("scroll", animateOnScroll)
  })
  
  