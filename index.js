window.onscroll = function() {
  const docScrollTop = document.documentElement.scrollTop

  if (window.innerWidth > 991) {
    if (docScrollTop > 100) {
      document.querySelector("header").classList.add("changed")
    } else {
      document.querySelector("header").classList.remove("changed")
    }
  }
}

const navbar = document.querySelector(".navbar")
a = navbar.querySelectorAll("a")

a.forEach(function(element) {
  element.addEventListener("click", function() {
    for (let i = 0; i < a.length; i++) {
      a[i].classList.remove("active")
    }
    this.classList.add("active")
    document.querySelector(".navbar").classList.toggle("show")
  })
})

const hamBurger = document.querySelector(".ham-burger")

hamBurger.addEventListener("click", function() {
  document.querySelector(".navbar").classList.toggle("show")
})
