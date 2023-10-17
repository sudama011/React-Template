export const setDarkTheme = () => {
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
};

export const setLightTheme = () => {
  document.documentElement.classList.remove("dark");
  localStorage.setItem("theme", "light");
};

export const setSystemTheme = () => {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    setDarkTheme();
  } else {
    setLightTheme();
  }
  localStorage.removeItem("theme");
};

export const setTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    setDarkTheme();
  } else if (savedTheme === "light") {
    setLightTheme();
  } else {
    setSystemTheme();
  }
};

export const toggleTheme = () => {
  if (localStorage.getItem("theme") === "dark") {
    setLightTheme();
  } else {
    setDarkTheme();
  }
};
