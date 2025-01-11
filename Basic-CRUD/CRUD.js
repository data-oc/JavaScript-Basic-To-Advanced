let items = []; // Array to hold items

// Function to add a new item
function addItem() {
const itemInput = document.getElementById('item-input');
const itemValue = itemInput.value.trim();

if (itemValue) {
    items.push(itemValue);
    itemInput.value = ''; // Clear input field
    renderList(); // Re-render the list
    } else {
    alert('Please enter a valid item');
    }
}

// Function to render the list
function renderList() {
    const itemListDiv = document.getElementById('item-list');
    itemListDiv.innerHTML = ''; // Clear the current list

    items.forEach((item, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
    
    itemDiv.innerHTML = `
        <span>${item}</span>
        <button class="edit-btn" onclick="editItem(${index})">Edit</button>
        <button class="delete-btn" onclick="deleteItem(${index})">Delete</button>
    `;
    
    itemListDiv.appendChild(itemDiv);
    });
}

// Function to edit an item
function editItem(index) {
    const newItem = prompt('Edit item:', items[index]);

    if (newItem !== null && newItem.trim() !== '') {
    items[index] = newItem.trim();
    renderList(); // Re-render the list after editing
    }
}

// Function to delete an item
function deleteItem(index) {
    if (confirm('Are you sure you want to delete this item?')) {
    items.splice(index, 1); // Remove the item from the array
    renderList(); // Re-render the list after deletion
    }
}