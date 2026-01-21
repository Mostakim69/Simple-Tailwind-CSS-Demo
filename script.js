document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("toggleSidebar");
  const texts = document.querySelectorAll(".sidebar-text");

  let collapsed = false;

  toggleBtn.addEventListener("click", () => {
    collapsed = !collapsed;

    if (collapsed) {
      // Collapse
      sidebar.classList.remove("w-64");
      sidebar.classList.add("w-20");

      texts.forEach((text) => {
        text.classList.add("hidden");
      });
    } else {
      // Expand
      sidebar.classList.remove("w-20");
      sidebar.classList.add("w-64");

      texts.forEach((text) => {
        text.classList.remove("hidden");
      });
    }
  });
});
