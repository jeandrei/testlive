const UICtrl = (function () {
  const UISelectors = {
    clearBtn: '.clear-btn',
    itemName: '#item-name',
    itemCalories: '#item-calories',
    addBtn: '.add-btn',
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn',
    totalCalories: '.total-calories',
    itemList: '#item-list',
    listItems: '#item-list li',
  }

  return {
    getSelectors: function () {
      return UISelectors
    },
    getItemsInput: function () {
      return {
        name: document.querySelector(UISelectors.itemName).value,
        calories: document.querySelector(UISelectors.itemCalories).value,
      }
    },
    showTotalCalories: function (totalCalories) {
      document.querySelector(UISelectors.totalCalories).innerText =
        totalCalories
    },
    clearInput: function () {
      document.querySelector(UISelectors.itemName).value = ''
      document.querySelector(UISelectors.itemCalories).value = ''
    },
    addListItem: function (item) {
      li = document.createElement('li')
      li.className = 'collection-item'
      li.id = `item-${item.id}`
      li.innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
      <a href="#" class="secondary-content">
        <i class="edit-item fa fa-pencil"></i>
      </a>`
      document
        .querySelector(UISelectors.itemList)
        .insertAdjacentElement('beforeend', li)
    },
    populateItemList: function (items) {
      let html = ''
      items.forEach(function (item) {
        html += `<li class="collection-item" id="item-${item.id}">
                    <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                    <a href="#" class="secondary-content">
                      <i class="edit-item fa fa-pencil"></i>
                    </a>
                  </li>`
      })
      document.querySelector(UISelectors.itemList).innerHTML = html
    },
    clearEditState: function () {
      UICtrl.clearInput()
      document.querySelector(UISelectors.updateBtn).style.display = 'none'
      document.querySelector(UISelectors.deleteBtn).style.display = 'none'
      document.querySelector(UISelectors.backBtn).style.display = 'none'
      document.querySelector(UISelectors.addBtn).style.display = 'inline'
    },
    showEditState: function () {
      UICtrl.clearInput()
      document.querySelector(UISelectors.updateBtn).style.display = 'inline'
      document.querySelector(UISelectors.deleteBtn).style.display = 'inline'
      document.querySelector(UISelectors.backBtn).style.display = 'inline'
      document.querySelector(UISelectors.addBtn).style.display = 'none'
    },
  }
})()
