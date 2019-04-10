async function fetchUsers() {
    const pr = await fetch('http://jsonplaceholder.typicode.com/users');

    const users = await pr.json();

    console.log(users);
}

fetchUsers();