    document.addEventListener("DOMContentLoaded", () => {
      const sidebar = document.getElementById("sidebar");
      const toggleBtn = document.getElementById("toggleSidebar");
      const closeBtn = document.getElementById("closeSidebar");
      const overlay = document.getElementById("overlay");
      const texts = document.querySelectorAll(".sidebar-text");

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

      // Desktop collapse (optional, you had this before)
      let collapsed = false;
      document.getElementById("toggleSidebar").addEventListener("click", () => {
        if (window.innerWidth >= 1024) {
          collapsed = !collapsed;
          if (collapsed) {
            sidebar.classList.remove("w-64");
            sidebar.classList.add("w-20");
            texts.forEach(t => t.classList.add("hidden"));
          } else {
            sidebar.classList.remove("w-20");
            sidebar.classList.add("w-64");
            texts.forEach(t => t.classList.remove("hidden"));
          }
        }
      });
    });