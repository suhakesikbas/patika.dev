# Ödev 2
## Post Sıralama ve Post Ekleme

Blog oluşturmaya hazır mısınız? Konsol ekranında postlarımızı sıralayalım, sonrasında yeni bir post oluşturalım ve yeni post ile birlikte postlarımızı tekrar sıralayalım.

Kolay gelsin.

    const books = [
    { name: "Kitap 1", author: "Yazar 1" },
    { name: "Kitap 2", author: "Yazar 2" },
    { name: "Kitap 3", author: "Yazar 3" },
    ];

    const listBooks = () => {
    books.map((book) => {
        console.log(book.name);
    });
    };

    const addBook = (newBook) => {
    const promise1 = new Promise((resolve, reject) => {
        books.push(newBook);
        resolve(books);
        //reject('BIR HATA OLUSTU');
    });

    return promise1;
    };

    async function showBooks() {
    try {
        await addBook({ name: "Kitap 4", author: "Yazar 4" });
        listBooks();
    } catch (error) {
        console.log(error);
    }
    }
    showBooks();