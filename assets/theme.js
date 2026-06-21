(function () {
  var root = document.documentElement;
  var toggle = document.querySelector(".theme-toggle");

  function activeTheme() {
    return root.dataset.theme || "light";
  }

  function syncButton() {
    if (!toggle) {
      return;
    }

    var nextTheme = activeTheme() === "dark" ? "light" : "dark";
    toggle.setAttribute("aria-label", "Switch to " + nextTheme + " mode");
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      var nextTheme = activeTheme() === "dark" ? "light" : "dark";
      root.dataset.theme = nextTheme;
      localStorage.setItem("theme", nextTheme);
      syncButton();
    });
  }
  syncButton();
}());
