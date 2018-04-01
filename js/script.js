var link = document.querySelector(".modal-btn");

var popup = document.querySelector(".write-us");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector(".modal-form");
var nameinput = popup.querySelector("[name=name]");
var mail = popup.querySelector("[name=mail]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("nameinput");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  
  if (storage) {
    nameinput.value = storage;
    mail.focus();
  } else {
    nameinput.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!nameinput.value || !mail.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", nameinput.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

var mapLink = document.querySelector(".open-map");

var mapPopup = document.querySelector(".map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
});