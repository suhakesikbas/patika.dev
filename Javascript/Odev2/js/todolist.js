function newElement() {
  let task = document.getElementById("task");
  if (!isEmptyOrSpaces(task.value)) {
    const node = document.createElement("li");
    const textnode = document.createTextNode(task.value);
    const btnCloseNode = document.createElement("span");
    const btnCloseNodeText = document.createTextNode("×");
    btnCloseNode.setAttribute("class", "btn-close");
    btnCloseNode.setAttribute("onclick", "removeItem(this)");
    node.appendChild(textnode);
    node.appendChild(btnCloseNode);
    btnCloseNode.appendChild(btnCloseNodeText);
    document.getElementById("list").appendChild(node);
    task.value = "";
    toastr.success(`Listeye yeni görev eklendi.`);
  } else {
    toastr.error("Listeye boş ekleme yapamazsınız.", "Hata!");
  }
}
function removeItem(e) {
    e.parentElement.remove();
}
function isEmptyOrSpaces(str) {
  return str === null || str.match(/^ *$/) !== null;
}
