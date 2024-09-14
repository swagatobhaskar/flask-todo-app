function removeItem(id) {
    fetch(`/delete/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => {
        if (response.status == 200) {
            window.location.reload();
        } else {
            alert("Something went wrong!")
        }
    })
    .catch(error => {
        console.error(error); // only in DEBUG
    });
}

// Below method won't work, it'll only take the first editBtn
// const editBtn = document.getElementById("item-edit-btn");

// Get all the elements whose id matches with 'item-edit-btn'
const editBtns = document.querySelectorAll('[id=item-edit-btn]')

editBtns.forEach(editBtn => {
    editBtn.addEventListener('click', () => {

        // get the parent li element for this button
        const parentLiElement = editBtn.closest('li');
        console.log(`Parent Li data-id: ${parentLiElement.getAttribute('data-id')}`)

        // get the div element inside the parent li
        // that holds the texts, and the edit and delete buttons
        const itemDivOfLi = parentLiElement.querySelector('#item-display-full'); // The '#' is required
        console.log(`itemDivOfLi data-id: ${itemDivOfLi.getAttribute('data-id')}`)

         // Get the editing section, which is closest to the above itemDivOfLi
        // const editingDiv = itemDivOfLi.querySelector('#item-edit-section');
        const editingDiv = parentLiElement.querySelector('#item-edit-section');
        // console.log(`editingDiv data-id: ${editingDiv.getAttribute('data-id')}`);
        
        if (itemDivOfLi){
            itemDivOfLi.style.display = 'none';
            // itemDivOfLi.hidden = true;
        }

        if (editingDiv) {
            editingDiv.hidden = !editingDiv.hidden;
            // editingDiv.style.display = 'block';
            // editingDiv.hidden = false;
        }
        
    })
})


// const cancelEditBtns = document.getElementById("item-edit-cancel");
const cancelEditBtns = document.querySelectorAll('[id=item-edit-cancel]')

cancelEditBtns.forEach(cancelEditBtn => {
    cancelEditBtn.addEventListener('click', () => {

        console.log("Inside cancel click");
        
        const parentLiElement = cancelEditBtn.closest('li');
        console.log(`Parent Li data-id: ${parentLiElement.getAttribute('data-id')}`)

        // get the div element inside the parent li
        // that holds the texts, and the edit and delete buttons
        const itemDivOfLi = parentLiElement.querySelector('#item-display-full'); // The '#' is required
        console.log(`itemDivOfLi data-id: ${itemDivOfLi.getAttribute('data-id')}`)

        // Get the editing section, which is closest to the above itemDivOfLi
        // const editingDiv = itemDivOfLi.querySelector('#item-edit-section');
        const editingDiv = parentLiElement.querySelector('#item-edit-section');

        if (editingDiv) {
            // editingDiv.style.display = 'none';
            editingDiv.hidden = true;
        }

        if (itemDivOfLi) {
            // itemDivOfLi.hidden = !itemDivOfLi.hidden;
            itemDivOfLi.hidden = false;
            itemDivOfLi.style.display = 'block';
        }
    })
})

editDoneBtns = document.querySelectorAll('[id=item-edit-done]');
editDoneBtns.forEach( editDoneBtn => {
    editDoneBtn.addEventListener('click', () => {
        editInput = editDoneBtn.
        console.log()
    })
})