document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("toggleSidebar");
  const closeBtn = document.getElementById("closeSidebar");
  const overlay = document.getElementById("overlay");
  const collapseToggle = document.getElementById("collapseToggle");
  const collapseIcon = document.getElementById("collapseIcon");
  const sidebarTexts = document.querySelectorAll(".sidebar-text");
  const themeToggle = document.getElementById("themeToggle");

  // Mobile sidebar toggle
  const openSidebar = () => {
    sidebar.classList.remove("-translate-x-full");
    overlay.classList.remove("hidden");
  };
  const closeSidebar = () => {
    sidebar.classList.add("-translate-x-full");
    overlay.classList.add("hidden");
  };

  toggleBtn.addEventListener("click", openSidebar);
  closeBtn.addEventListener("click", closeSidebar);
  overlay.addEventListener("click", closeSidebar);

  // Desktop collapse toggle
  let isCollapsed = false;

  if (collapseToggle) {
    collapseToggle.addEventListener("click", () => {
      isCollapsed = !isCollapsed;

      if (isCollapsed) {
        sidebar.classList.remove("w-64");
        sidebar.classList.add("w-16", "items-center", "px-2");
        sidebarTexts.forEach((t) => t.classList.add("hidden"));
        collapseIcon.innerHTML =
          '<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />';
        // থিম টগল লুকানো
        themeToggle.classList.add("hidden");
      } else {
        sidebar.classList.remove("w-16", "items-center", "px-2");
        sidebar.classList.add("w-64");
        sidebarTexts.forEach((t) => t.classList.remove("hidden"));
        collapseIcon.innerHTML =
          '<path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />';
        // থিম টগল দেখানো
        themeToggle.classList.remove("hidden");
      }
    });
  }

  // Navigation functionality
  const navButtons = document.querySelectorAll("nav button");
  const pageMap = {
    0: "index.html", // AI Chat
    1: "apps.html", // AI Video (or Apps page)
    2: "#", // AI Image
    3: "#", // Documents
    4: "#", // Community
    5: "#", // History
  };

  navButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      const page = pageMap[index];
      if (page !== "#") {
        window.location.href = page;
      }
    });
  });
});
