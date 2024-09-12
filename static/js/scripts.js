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
