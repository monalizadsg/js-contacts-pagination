import { users } from "./data.js";

// set total user count
const totalUsersCount = document.getElementById("totalUser");
totalUsersCount.innerHTML = users.length;

const userListElement = document.querySelector(".users-list");
const paginationElement = document.querySelector(".pagination");
const numOfUsersPerPage = 10;
let currentPage = 1;

function displayUsersList(usersList, currPage) {
  // empty list when switching page
  userListElement.innerHTML = "";

  const trimStart = (currPage - 1) * numOfUsersPerPage;
  const trimEnd = trimStart + numOfUsersPerPage;
  const newUsersList = usersList.slice(trimStart, trimEnd);

  newUsersList.map((user) => {
    const listItem = createListItem(user);
    userListElement.appendChild(listItem);
  });
}

const createListItem = (user) => {
  // create list item
  const listItem = document.createElement("li");
  listItem.className = "contact-item cf";

  // create contact details div
  const contactDetails = document.createElement("div");
  contactDetails.className = "contact-details";

  // create contact image
  const image = document.createElement("img");
  image.className = "avatar";
  image.src = user.image;

  // create contact name heading
  const name = document.createElement("h3");
  name.textContent = user.name;

  // create contact email span
  const email = document.createElement("span");
  email.className = "email";
  email.textContent = user.email;

  // add image, name, and email to contact details div
  contactDetails.appendChild(image);
  contactDetails.appendChild(name);
  contactDetails.appendChild(email);

  // create joined details div
  const joinedDetails = document.createElement("div");
  joinedDetails.className = "joined-details";

  // create joined date span
  const date = document.createElement("span");
  date.className = "date";
  date.textContent = "Joined " + user.joined;

  // add date to joined details div
  joinedDetails.appendChild(date);

  // add contact details and joined details div to list item
  listItem.appendChild(contactDetails);
  listItem.appendChild(joinedDetails);

  return listItem;
};

const displayPaginationNumbers = () => {
  const numOfPages = Math.ceil(users.length / numOfUsersPerPage);
  for (let i = 1; i <= numOfPages; i++) {
    const btn = createPageNumberBtn(i);
    paginationElement.appendChild(btn);
  }
};

const createPageNumberBtn = (page) => {
  // create pageNumber btn
  const listBtn = document.createElement("li");
  const a = document.createElement("a");
  a.innerText = page;
  listBtn.appendChild(a);

  // add active className to current page
  if (currentPage === page) a.classList.add("active");

  // add onClick event listener to btn
  listBtn.addEventListener("click", () => {
    // set currentPage to clicked btn and display users
    currentPage = page;
    displayUsersList(users, currentPage);

    // remove active className of current active btn
    const currentBtn = document.querySelector(".pagination > li a.active");
    console.log("currentPageBtn", currentBtn);
    currentBtn.classList.remove("active");

    // add active className to clicked btn
    let itemBtn = listBtn.querySelector("a");
    itemBtn.classList.add("active");
  });

  return listBtn;
};

displayUsersList(users, currentPage);
displayPaginationNumbers();
