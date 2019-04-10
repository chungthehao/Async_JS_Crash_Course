const promise1 = Promise.resolve('Hi Henry');
const promise2 = 89;
const promise3 = new Promise(
    (resolve, reject) => {
        setTimeout(resolve, 2000, 'Goodbye');
    }
);
const promise4 = fetch('http://jsonplaceholder.typicode.com/users').then(response => response.json());

// Tat ca xong moi tra ve (tinh theo cai lau nhat, o day la 2 sec)
Promise.all([promise1, promise2, promise3, promise4])
    .then(values => console.log(values));