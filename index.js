let listState = [];

const STATE_KEY = "todo-list";

function loadState() {
    const listState = localStorage.getItem(STATE_KEY);
    if (listState !== null) {
        return JSON.parse(listState);
    }
    return [];
}

function saveState(list) {
    localStorage.setItem(STATE_KEY, JSON.stringify(list));
}

function initList() {
    //load State
    listState = loadState();
    // render list
    const ul = document.getElementById("listItem");
    for (const item of listState) {
        const li = document.createElement("li");
        li.innerText = item.text;

        const deleteBtn = document.createElement("span");
        deleteBtn.classList.add("delete")
        deleteBtn.onclick = deleteItem;
        li.appendChild(deleteBtn);

        li.classList.add("item");
        if (item.checked) {
            li.classList.add("checked");
        }

        console.log("initList called");

        li.onclick = checkItem;

        ul.appendChild(li);
    }
}

//測試用
// console.log("cat");

//防止刷新，防止form預設點擊送出的功能
const form = document.getElementById("formWrap");
form.addEventListener("submit", (e) => {
    e.preventDefault();
})

const addBtn = document.getElementById("add");
addBtn.addEventListener("click", addItem);

function addItem() {
    // console.log("cat");
    const ul = document.getElementById("listItem");
    const input = document.getElementById("formInput");
    const text = input.value;
    if (text === "") {
        alert("輸入東西拉bro");
        return;
    }

    const newItem = document.createElement("li");
    newItem.classList.add("item");
    newItem.innerText = text;

    newItem.onclick = checkItem;

    const deleteBtn = document.createElement("span");
    deleteBtn.classList.add("delete");
    deleteBtn.onclick = deleteItem;

    newItem.appendChild(deleteBtn);

    listState.push({
        text,
        checked: false
    });
    saveState(listState);

    input.value = "";
    ul.appendChild(newItem);
}

function checkItem() {
    // console.log("already checked");
    // console.log("Item checked:", this.innerText);
    const item = this;
    const parent = item.parentNode;
    const idx = Array.from(parent.children).indexOf(item);

    listState[idx].checked = !listState[idx].checked;
    item.classList.toggle("checked");
    saveState(listState);
}

function deleteItem() {
    // console.log("3 la");
    event.stopPropagation();
    const item = this.parentNode;
    const parent = item.parentNode;
    const idx = Array.from(parent.childNodes).indexOf(item);
    listState = listState.filter((_, i) => i !== idx);
    saveState(listState);

    parent.removeChild(item);
}

initList();
// 連結檔案，log看看
// 防止瀏覽器刷新
// 開始建立第一個function Name(){要做的事情} -> 先log看看

//calender
document.addEventListener('DOMContentLoaded', function () {
    // TinyDatePicker('.date-picker');
    // console.log("tt"); 
    var dpPermanent = TinyDatePicker('.permanent-cal-container', {
        mode: 'dp-permanent',
    });
});
//calender
