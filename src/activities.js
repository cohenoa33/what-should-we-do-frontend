const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

function appendCategory(item) {
  let options = document.getElementById(item);
  // item = item.replace(/[^A-Za-z0-9-']+/g, "");
  if (options === null) {
    const dropdown = document.querySelector(".dropdown");
    const option = document.createElement("option");
    option.innerText = capitalize(item);
    option.value = capitalize(item);
    option.id = item;

    dropdown.appendChild(option);
  }
}

function sortByCategory() {
  const dropdown = document.querySelector(".dropdown");
  dropdown.addEventListener("input", function (event) {
    const category = event.target.value;
    const activities = Array.from(document.querySelectorAll(`.card`));

    for (activity of activities) {
      if (category === "show all") {
        activity.style.display = "inline-grid";
      } else {
        if (
          capitalize(activity.children[4].textContent) === capitalize(category)
        ) {
          activity.style.display = "inline-grid";
        } else {
          activity.style.display = "none";
        }
      }
    }
  });
}

sortByCategory();
