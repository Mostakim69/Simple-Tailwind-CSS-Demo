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

  // Apps Modal functionality
  const appsBtn = document.getElementById("appsBtn");
  const appsModal = document.getElementById("appsModal");
  const closeAppsModal = document.getElementById("closeAppsModal");
  const appsSearch = document.getElementById("appsSearch");

  if (appsBtn && appsModal) {
    appsBtn.addEventListener("click", () => {
      appsModal.classList.remove("hidden");
    });

    closeAppsModal.addEventListener("click", () => {
      appsModal.classList.add("hidden");
      appsSearch.value = "";
    });

    appsModal.addEventListener("click", (e) => {
      if (e.target === appsModal) {
        appsModal.classList.add("hidden");
        appsSearch.value = "";
      }
    });

    // Search functionality
    appsSearch.addEventListener("input", (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const appItems = appsModal.querySelectorAll(".grid > div");

      appItems.forEach((item) => {
        const appName = item.querySelector("span").textContent.toLowerCase();
        if (appName.includes(searchTerm)) {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
      });
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
