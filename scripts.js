const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry.target);
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: 0,
  }
);

const reveal = document.querySelectorAll(".reveal");
reveal.forEach((el) => observer.observe(el));
