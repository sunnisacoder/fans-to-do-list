//測試用
// console.log("cat");

//防止刷新，防止form預設點擊送出的功能
const form = document.getElementById("formWrap");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
})

const addBtn = document.getElementById("add");
addBtn.addEventListener("click", addItem);

function addItem() {
    // console.log("cat");
    const ul = document.getElementById("listItem");
    const input = document.getElementById("formInput");
    const text = input.value;
    if (text === ""){
        alert("輸入東西拉bro");
        return;
    }

    const newItem = document.createElement("li");
    newItem.classList.add("item");
    newItem.innerText = text;

    newItem.onclick = checkItem; 

    const deleteBtn = document.createElement("span");
    deleteBtn.classList.add("delete");
    deleteBtn.onclick= deleteItem;

    newItem.appendChild(deleteBtn);

    input.value="";
    ul.appendChild(newItem);
}

function checkItem(){
    // console.log("already checked");
    const item = this;
    item.classList.toggle("checked");
}

function deleteItem(){
    // console.log("3 la");
    const item = this.parentNode;
    const parent = item.parentNode;
    parent.removeChild(item);
}

// 連結檔案，log看看
// 防止瀏覽器刷新
// 開始建立第一個function Name(){要做的事情} -> 先log看看