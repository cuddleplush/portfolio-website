const navClose = () => {
  const nav = document.querySelectorAll(".list li");

  nav.forEach((item) => {
    item.addEventListener("click", () => {
      document.getElementById("toggler").checked = false;
    });
  });
};

navClose();
