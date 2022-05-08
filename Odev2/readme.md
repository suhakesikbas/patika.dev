# Ödev 2
## Post Sıralama ve Post Ekleme

Blog oluşturmaya hazır mısınız? Konsol ekranında postlarımızı sıralayalım, sonrasında yeni bir post oluşturalım ve yeni post ile birlikte postlarımızı tekrar sıralayalım.

Kolay gelsin.
```js
    const blogs = [
    { title: "Başlık 1", description: "Açıklama 1" },
    { title: "Başlık 2", description: "Açıklama 2" },
    { title: "Başlık 3", description: "Açıklama 3" },
    ];

    const blogList = () => {
    blogs.map((blog) => {
        console.log(`Blog Başlığı : ${blog.title}, \nBlog Açıklaması : ${blog.description}\n`);
    });
    };
    blogList();

    const addBlog = (blog) => {
    const promise1 = new Promise((resolve, reject) => {
        blogs.push(blog);
        resolve(blogs);
        reject("Blog eklenirken bir hata oluştu.");
    });
    return promise1;
    };

    async function showBlog() {
    try {
        await addBlog({ title: "Başlık 4", description: "Açıklama 4" });
        blogList();
    } catch (error) {
        console.log(error);
    }
    }
    showBlog();
```