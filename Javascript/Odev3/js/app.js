const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

// Kategorileri yerle??tirmek i??in buton ??ablonu olu??turuyoruz.
// Burada kategori bilgisini almak i??in data-id attributu olu??turduk de??er olarak da
// kategori ismini verdik.
const btnTemplate = (category) => {
  return `<button class="btn btn-outline-dark btn-item" data-id="${category}">${category}</button>`;
};
// Kutular?? yerle??tirmek i??in kutu ??ablonu olu??turuyoruz.
// Burada kategori bilgisini almak i??in data-category attributu olu??turduk de??er olarak da
// kategori ismini verdik.
const template = (el) => {
  return `<div class="menu-items show col-lg-6 col-sm-12" data-category="${el.category}">
  <img src="${el.img}" alt="${el.title}" class="photo">
  <div class="menu-info">
    <div class="menu-title">
      <h4>${el.title}</h4>
      <h4 class="price">${el.price}</h4>
    </div>
    <div class="menu-text">${el.desc}</div>
  </div>
  </div>`;
};
//Kategorileri saklamak i??in array olu??turuyoruz.
// ????nk?? ayn?? kategori daha ??nce eklenmi??se onu array'den kontrol edece??iz.
let category = [];
// T??m kutular?? g??stermek i??in All isimli buton olu??turuyoruz.
let buttonTemplate = btnTemplate("All");
// T??m kutular?? string halinde bu de??i??kende tutaca????z d??ng??lerden sonra html sayfam??za 
// innerHtml fonksiyonu ile ekleyece??iz
let boxTemplate = "";
/*
  Yukar??da bize verilen array i??inde d??n??yoruz. find metodu ile category arrayine
   daha ??nce o kategori eklenmi?? mi diye kontrol ediyoruz e??er eklenmemi??se hem 
   category arrayine hem de buttonTemplate ekliyoruz. if den sonra her kutuyuda
   boxTemplate'e at??yoruz.
*/
menu.map((el) => {
  if (category.find((e) => e === el.category) === undefined) {
    category.push(el.category);
    buttonTemplate += btnTemplate(el.category);
  }
  boxTemplate += template(el);
});
// Burada buttonTemplate'i innerHtml ile btn-container i??ine g??m??yoruz.
document.getElementsByClassName("btn-container")[0].innerHTML = buttonTemplate;
// Burada boxTemplate'i innerHtml ile section-center i??ine g??m??yoruz.
document.getElementsByClassName("section-center")[0].innerHTML = boxTemplate;
// Html'e ekledi??imiz buttonlar?? click event'?? i??in se??iyoruz.
const buttons = document.querySelectorAll(".btn-item");
// forof ile butonlara click metodu i??in event listener ekliyoruz.
for (const button of buttons) {
  button.addEventListener("click", function handleClick(el) {
    // Ekledi??imiz kutular??n t??m??n?? se??iyoruz ve forof ile geziyoruz.
    let menuItems = document.querySelectorAll(".menu-items");
    for (const item of menuItems) {
      /* js'de attribute'lerde ba????na data yazarsan dataset ile onlara eri??ebilirsin.
       button.dataset.id ile item.dataset.category kontrol ediyoruz bunlar birbirine
       e??itse veya button.dataset.id All ise show class'?? ekliyoruz de??ilse siliyoruz 
       ki o kategoride olmayan kutular g??z??kmesin
      */
      if (button.dataset.id === "All" || item.dataset.category === button.dataset.id) {
        item.classList.add("show");
      } else {
        item.classList.remove("show");
      }
    }
  });
}