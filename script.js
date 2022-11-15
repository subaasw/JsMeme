let index = 0;
const containerDetail = () => {
  const container = document.querySelector(".container");
  return {
    container: container,
    containerWidth: container.offsetWidth - 110,
    containerHeight: container.offsetHeight - 110,
  };
};
const figure = document.createElement("figure");

const { container, containerHeight, containerWidth } = containerDetail();

const randomIndex = (prop, className, max) => {
  index = Math.floor(Math.random() * max) + 1;
  const img = `./assets/${prop}/${index}.jpg`;
  container.appendChild(figure);
  const imgTag = document.createElement("img");
  imgTag.setAttribute("src", img);
  imgTag.setAttribute("class", className);
  imgTag.style.left = Math.floor(Math.random() * containerWidth) + 1 + "px";
  imgTag.style.top = Math.floor(Math.random() * containerHeight) + 1 + "px";
  figure.append(imgTag);
};

const deleteImg = (className) => {
  const listofImg = document.querySelectorAll(className);
  if (listofImg.length > 0) {
    for (let blaImg of listofImg) {
      blaImg.remove();
    }
  }
};
const yesImg = () => {
  randomIndex("yes", "yesImg", 3);
  deleteImg(".noImg");
};

const NOImage = () => {
  randomIndex("no", "noImg", 4);
  deleteImg(".yesImg");
};

function rejection() {
  const noButton = document.querySelector("#no");
  var i = Math.floor(Math.random() * containerWidth) + 1;
  var j = Math.floor(Math.random() * containerHeight) + 1;
  noButton.style.left = i + "px";
  noButton.style.top = j + "px";
  index += 1;
  NOImage();
}
//   window.addEventListener("resize", containerDetail);
