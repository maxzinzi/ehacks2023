

const lists = [
    ["Item 1", "Item 2", "Item 3"],
    ["Item 4", "Item 5", "Item 6"],
    ["Item 7", "Item 8", "Item 9"],
];

const listHeaders = ["Free Wifi Locations", "Free Food Places", "Free Shower Facilities"];

const container = generateLists(lists, listHeaders);
document.getElementById("list-container").appendChild(container);

function generateLists(lists, listHeaders) {
    
    const container = document.createElement("div");
    container.classList.add("list-container");
    container.style.cssText = "margin-left:100px; margin-right:100px; ";
  
    
    for (let i = 0; i < lists.length; i++) {
      const listDiv = document.createElement("div");
      listDiv.classList.add("list");
  
      const listTitle = document.createElement("p");
      listTitle.classList.add("list-title");
      listTitle.textContent = listHeaders[i];  
      const list = document.createElement("ul");
      list.style.cssText = "background-color: rgba(0,0,0,0);";

      list.classList.add("sub-list");

  
      for (let j = 0; j < lists[i].length; j++) {
        const item = document.createElement("li");
        item.classList.add("item");
        item.textContent = lists[i][j];
        list.appendChild(item);       //Add more items to the li if need
      }
  

      listDiv.appendChild(listTitle);
      listDiv.appendChild(list);
      container.appendChild(listDiv);
    }
  
    return container;
  }
  



     /*
THE CODE ABOVE MAKES THIS:
<div class="list-container">
<div class="list">
<ul class="sub-list">
<li class="item">Item 1</li>
<li class="item">Item 2</li>
<li class="item">Item 3</li>
</ul>
</div>
<div class="list">
<ul class="sub-list">
<li class="item">Item 4</li>
<li class="item">Item 5</li>
<li class="item">Item 6</li>
</ul>
</div>
<div class="list">
<ul class="sub-list">
<li class="item">Item 7</li>
<li class="item">Item 8</li>
<li class="item">Item 9</li>
</ul>
</div>
</div>
*/
