

export const getFetchUser = async () => {
    const url =  `https://jsonplaceholder.typicode.com/users/1`;
    const resp = await fetch(url);
    return resp.json();
}

export const getFetchTodo = async () => {
    const url =  `https://jsonplaceholder.typicode.com/users/1/todos`;
    const resp = await fetch(url);
    return resp.json();
}

export const postFetchTodo = async (newTodo) => {
    const url =`https://jsonplaceholder.typicode.com/users/1/todos`
    const resp = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            newTodo
        }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })

    return resp.json();
}


export const deleteFetchTodo = async () => {
    const url =  `https://jsonplaceholder.typicode.com/users/1/todos`;
    const resp = await fetch(url, {
        method: 'DELETE'
    });
    return resp.json();
}

export const putFetchTodo = async (userId, id, title, completed) => {
    const url =`https://jsonplaceholder.typicode.com/users/1`
    const resp = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify({
            userId,
            id,
            title, 
            completed
        }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })

    return resp.json();
}


