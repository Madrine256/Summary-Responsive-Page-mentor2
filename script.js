const dynamic_data = [
    {
      "category": "Reaction",
      "score": 80,
      "icon": "./assets/images/icon-reaction.svg"
    },
    {
      "category": "Memory",
      "score": 92,
      "icon": "./assets/images/icon-memory.svg"
    },
    {
      "category": "Verbal",
      "score": 61,
      "icon": "./assets/images/icon-verbal.svg"
    },
    {
      "category": "Visual",
      "score": 72,
      "icon": "./assets/images/icon-visual.svg"
    }
  ];
const details_container = document.querySelector('.details-container');
  let collection = dynamic_data.map((items)=>{
     return ` <div class="details ${items.category.toLowerCase()}">
     <div class="decription">
       <img src="${items.icon}" alt="${items.category}">
       <p>${items.category}</p>
     </div>
     <div class="out-of">
       <span class="bold">${items.score}</span>
       <span class="grey-like">/ 100</span>
     </div>
   </div>`;
  });
//console.log(collection.join())
  details_container.innerHTML += collection.join("");