const posts = document.getElementById("posts");




fetch("https://jsonplaceholder.typicode.com/posts").then(res => {
    return res.json();
}).then(data => {
    console.log("data  : ", data);
    let articles = ``;

    for (let index = 0; index < data.length; index++) {
        const post = data[index];
        articles += `
                <article>
                <img
                src="https://www.freecodecamp.org/news/content/images/2021/09/Document.jpg"
                alt=""
                />
                <div>
                <h1>${post.title}</h1>
                <p>${post.body}</p>
                </div>
            </article>`;
        console.log("post : ", post);
    }
    
    posts.innerHTML = articles;
});
