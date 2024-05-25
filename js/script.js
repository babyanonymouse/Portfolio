document.addEventListener("DOMContentLoaded", () => {
  // Get all the links in the navbar
  const navbarLinks = document.querySelectorAll(".navbar a");

  // Add click event to each link
  navbarLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Get the href attribute value
      const targetId = link.getAttribute("href").substring(1);

      // Get the target element by id
      const targetElement = document.getElementById(targetId);

      // Scroll to the target element
      targetElement.scrollIntoView({
        behavior: "smooth",
      });

      // Remove 'active' class from all links
      navbarLinks.forEach((link) => link.classList.remove("active"));

      // Add 'active' class to the clicked link
      link.classList.add("active");
    });
  });

  // Handle scroll to top button click
  const scrollTopBtn = document.querySelector(".footer-iconTop a");
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", (event) => {
      event.preventDefault();
      document.getElementById("home").scrollIntoView({
        behavior: "smooth",
      });
    });
  }
});
