# js-contacts-pagination
Create list of contacts with pagination using plain JavaScript

## :seedling: What I learned 
:white_check_mark: **How to import users data from ```data.js``` to ```script.js```**
```js
// Note: For nodejs environment, name file with .mjs extension
// and set "type":"module" in the package.json 

// Using ES6 modules in browsers
// index.html --> assign module to type attribute in script tag
<script type="module" src="js/script.js"></script>

// script.js --> import users data using ES6 syntax
import { users } from "./data.js";
```

:white_check_mark: **Dynamically create and manipulate DOM elements**
```js
// getElementById() -> retrieve element with the specified ID 
const totalUsersCount = document.getElementById("totalUser");

// querySelector() -> select the first element that matches the specified CSS selector
const userListElement = document.querySelector(".users-list");
const currentBtn = document.querySelector(".pagination > li a.active");

// Create html elements
const listItem = document.createElement("li");
const image = document.createElement("img");

// Set element's properties 
totalUsersCount.innerHTML = users.length;
image.className = "avatar";
image.src = user.image;

// Append created elements as child nodes to existing elements
userListElement.appendChild(listItem)

// Manipulate element styles and classes
currentBtn.classList.remove("active")
itemBtn.classList.add("active")

// Add event listener
listBtn.addEventListener("click", () => { ... });
```


:white_check_mark: **Understanding built-in methods**
```js
// slice() --> to extract the relevant portion of the users for the current page
// this method returns a new array and does not alter the original array
const trimStart = (currPage - 1) * numOfUsersPerPage;
const trimEnd = trimStart + numOfUsersPerPage;
const newUsersList = usersList.slice(trimStart, trimEnd);

// map() --> iterate over each user to populate the created list item then append it to the `userListElement`  
// this method allows to iterate over an array, execute a function on each element, 
// and collect the results in a new array
newUsersList.map((user) => {
   const listItem = createListItem(user);
   userListElement.appendChild(listItem);
});
```




