// Gỉa sử dữ liệu posts này là lấy đc từ server sau 1 khoảng thời gian
const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' },
];

function getPosts() {
    setTimeout(() => {
        let output = '';

        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });

        document.body.innerHTML = output;
    }, 2000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false; // giả sử

            if ( ! error) {
                resolve();
            } else {
                reject('Error: Something went wrong!');
            }
        }, 3200);
    });

    /**
     * Callback
     */
    // setTimeout(() => {
    //     posts.push(post);
        
    //     // callback được chạy sau khi đã có đủ data
    //     callback();
    // }, 3500);
}

createPost({ title: 'Post 3', body: 'This is post 3' })
    .then(getPosts)
    .catch(error => console.log(error)); 

/**
 * Callback
 */
// createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);