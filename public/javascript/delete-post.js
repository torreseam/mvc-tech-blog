async function deleteFormHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    //const resComment = await fetch(`/api/comments/`)
    const resComment = await fetch(`/api/comments/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json());

    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
            post_id: id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }

}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);