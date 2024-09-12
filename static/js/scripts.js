/*
function removeItem(id) {
    fetch(`/delete/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            // 'X-Requested-With': 'XMLHttpRequest'
        }
    })
    .then(response => {
        if (!response.ok) {
            // Handle errors, possibly by throwing an error or alerting the user
            return response.json().then(errorData => {
                throw new Error(errorData.message || "Failed t delete item!");
            });
        }
        return response.status;
    })
    .then(data => {
        if (data.message === 'success') {
            // Remove the item from the list
            document.getElementById('item-' + itemId).remove();
        } else {
            alert('Error deleting item: ' + (data.message || 'Unknown error.'));
        }
    })    
    .catch(error => console.error('Error:', error));
}
*/

function removeItem(id) {
    fetch(`/delete/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => {
        if (response.status == 200) {
            console.log("Success")
            window.location.reload();
        }
    })
    .catch(error => {
        console.error(error)
    });
}