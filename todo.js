"use strict";
const addButton = document.querySelector(".addButton");
var inpvalue = document.querySelector(".input");
const container = document.querySelector(".container");
let key = 0;

class item {
  constructor(itemname) {
    //Creating a item div element
    this.cretaeDiv(itemname, key);
    key++;
  }
  cretaeDiv(itemname, key) {
    let input = document.createElement("input");
    input.value = itemname;
    input.name = key;
    input.disabled = true;
    input.classList.add("item_input");
    input.type = "text";

    let itembox = document.createElement("span");
    itembox.classList.add("item");

    let editButton = document.createElement("span");
    editButton.innerHTML = "Edit";
    editButton.classList.add("editButton");

    let removeButton = document.createElement("span");
    removeButton.innerHTML = "Remove";
    removeButton.classList.add("removeButton");

    container.appendChild(itembox);
    itembox.appendChild(input);
    itembox.appendChild(editButton);
    itembox.appendChild(removeButton);

    editButton.addEventListener("click", () => this.edit(input, key));

    removeButton.addEventListener("click", () => this.remove(itembox));
  }
  edit(input, key) {
    let edit_field = document.getElementsByClassName("item_input")[key];
    if (edit_field.value !== "") {
      input.disabled = !input.disabled;
      console.log(input.value);
      let editButton = document.getElementsByClassName("editButton")[key];
      let removeButton = document.getElementsByClassName("removeButton")[key];

      if (!input.disabled) {
        editButton.innerHTML = "Submit";
        removeButton.style.display = "none";
        edit_field.focus();
      } else {
        editButton.innerHTML = "Edit";
        removeButton.style.display = "inline";
      }
    } else {
      alert("Enter the edited To-do");
      edit_field.focus();
    }
  }
  remove(itembox) {
    container.removeChild(itembox);
  }
}

function check() {
  if (inpvalue.value != "") {
    new item(inpvalue.value);
    inpvalue.value = "";
  }
}

addButton.addEventListener("click", check);
window.addEventListener("keydown", (e) => {
  if (e.which == 13) {
    check();
  }
});
