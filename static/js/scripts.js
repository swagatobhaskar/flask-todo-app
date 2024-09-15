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
        const editingDiv = parentLiElement.querySelector('#item-edit-section');
                
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


const cancelEditBtns = document.querySelectorAll('[id=item-edit-cancel]')

cancelEditBtns.forEach(cancelEditBtn => {
    cancelEditBtn.addEventListener('click', () => {

        console.log("Inside cancel click");
        
        const parentLiElement = cancelEditBtn.closest('li');
        console.log(`Parent Li data-id: ${parentLiElement.getAttribute('data-id')}`)

        // get the div element inside the parent li
        // that holds the texts, and the edit and delete buttons
        const itemDivOfLi = parentLiElement.querySelector('#item-display-full');
        console.log(`itemDivOfLi data-id: ${itemDivOfLi.getAttribute('data-id')}`)

        // Get the editing section, which is closest to the above itemDivOfLi
        const editingDiv = parentLiElement.querySelector('#item-edit-section');

        if (editingDiv) {
            // editingDiv.style.display = 'none';
            editingDiv.hidden = true;
        }

        if (itemDivOfLi) {
            // itemDivOfLi.hidden = !itemDivOfLi.hidden;
            // itemDivOfLi.hidden = false;
            itemDivOfLi.style.display = 'flex';
        }
    })
})


editDoneBtns = document.querySelectorAll('#item-edit-done');

editDoneBtns.forEach( editDoneBtn => {
    editDoneBtn.addEventListener('click', () => {
        
        // Find the closest item entry
        const itemEntry = editDoneBtn.closest('#item-entry');
        
        const itemDataId = itemEntry.getAttribute('data-id');
        const itemId = itemDataId.split('-')[1]
        console.log("ITEM ID:", itemId);

        // Get the input field within this item entry
        const inputField = itemEntry.querySelector('#edit-input');

        // Get the new value from the input field
        const newValue = inputField.value;
        console.log("New value: ", newValue);

        
        fetch(`/edit/${itemId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ newValue })
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

        // Hiding the edit section after saving is not needed
        // since page is getting reloaded after getting response
        //itemEntry.querySelector('#item-edit-section').style.display = 'none';
    })
})
