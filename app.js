
let state = {
  filtered: [],
  toDoItems: [],
}

function render() {
  console.log(state.toDoItems);
  const mainList = document.getElementById("mainList");
  mainList.innerHTML = "";
  if (state.toDoItems) {
    state.toDoItems.forEach((listItem, index) => {
      if (listItem.isRemoved) { return; }
      const element = document.createElement("div");
      element.innerHTML = `
        <div class="itemContainer">
        ${index}. 
        <span
          onclick="completeItem(${index})"
          style="${listItem.isComplete ? 'text-decoration: line-through; color: lightgrey;' : ''}">
          ${listItem.title}
        </span>
        <button class="" close onclick="removeItem(${index})">
          X
        </button>
        </div>
      `;
      mainList.appendChild(element);
    });
  }
  saveData()
}

function saveData() {
  window.localStorage.setItem('state', JSON.stringify(state));
}

function loadData() {
  const storedState = JSON.parse(window.localStorage.getItem('state'));
  if (storedState) {
    state = storedState;
  }
}

function load() {
  loadData();
  render();
}

window.onload = load;

function completeItem(index) {
  state.toDoItems[index].isComplete = !state.toDoItems[index].isComplete;
  render();
}

function removeItem(index) {
  state.toDoItems[index].isRemoved = true;
  render();
}

function permanentlyRemoveHidden() {
  const toDoItems = state.toDoItems.filter((item) => !item.isRemoved);
  state.toDoItems = toDoItems;
  render();
}

function addElement() {

  let textNode = document.getElementById("myInput").value
  
  state.toDoItems.push({
    title: textNode,
    isComplete: false,
  });

  render();


}


