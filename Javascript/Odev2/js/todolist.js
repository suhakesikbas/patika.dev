let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
let data = JSON.parse(localStorage.getItem('items'));

const liMaker = (item) => {
  const node = document.createElement("li");
  node.addEventListener("click", isCompleted);
  const textnode = document.createTextNode(item.task);
  if (item.status)
    node.setAttribute("class", "checked");
  const btnCloseNode = document.createElement("span");
  const btnCloseNodeText = document.createTextNode("×");
  btnCloseNode.setAttribute("class", "btn-close");
  btnCloseNode.setAttribute("onclick", "removeItem(this)");
  node.appendChild(textnode);
  node.appendChild(btnCloseNode);
  btnCloseNode.appendChild(btnCloseNodeText);
  document.getElementById("list").appendChild(node);
}

data.forEach(item => {
  liMaker(item);
});

function newElement() {
  let task = document.getElementById("task");
  if (!isEmptyOrSpaces(task.value)) {
    let check = data.find(o => o.task === task.value);
    if (check != undefined)
      toastr.warning("Tekrarlayan içerik.", "Hata!");
    else {
      data.push({ task: task.value, status: false });
      localStorage.setItem('items', JSON.stringify(data));
      liMaker({ task: task.value, status: false });
      task.value = "";
      toastr.success(`Listeye yeni görev eklendi.`);
    }
  } else {
    toastr.error("Listeye boş ekleme yapamazsınız.", "Hata!");
  }
}

function removeItem(e) {
  const txt = e.parentElement.textContent.replace("×", "");
  data = data.filter(o => o.task != txt);
  localStorage.setItem('items', JSON.stringify(data));
  e.parentElement.remove();
}

function isCompleted() {
  const txt = event.target.textContent.replace("×", "");
  const get_task = data.find(o => o.task === txt);
  if (get_task != undefined) {
    get_task.status = !get_task.status;
    localStorage.setItem('items', JSON.stringify(data));
    this.classList.toggle('checked');
  }
}

function isEmptyOrSpaces(str) {
  return str === null || str.match(/^ *$/) !== null;
}

var listItems = document.querySelectorAll('li');
for (var i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener('click', isCompleted);
}