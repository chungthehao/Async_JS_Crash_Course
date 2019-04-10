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

function createPost(post) {
    setTimeout(() => {
        posts.push(post);
    }, 3500);
}

// Code tạo thêm 1 post chạy trước (nhưng 3.5 sec sau mới xong)
createPost({ title: 'Post Three', body: 'This is post three' });

// Code xuất ra DOM chạy sau (nhưng chỉ 2.5 sec sau là xong)
getPosts();