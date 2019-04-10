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
    }, 2500);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        
        // callback được chạy sau khi đã có đủ data
        callback();
    }, 3500);
}

createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);