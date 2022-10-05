const App = (function () {
  const loadEventListeners = function () {
    const UISelectors = UICtrl.getSelectors()

    const itemAddSubmit = function (e) {
      e.preventDefault()
      /* 04 - get input values */
      const input = UICtrl.getItemsInput()

      /* 05 - generate ID and add to array */
      const newItem = ItemCtrl.addItem(input)
      console.log(newItem)

      /* 06 add to the spreadsheet */
      StorageCtrl.postItem(newItem)

      /** 07 add to the list in the page */
      UICtrl.addListItem(newItem)

      //UICtrl.clearInput()
      //const totalCalories = ItemCtrl.getTotalCalories()
      //UICtrl.showTotalCalories(totalCalories)
    }

    document
      .querySelector(UISelectors.addBtn)
      .addEventListener('click', itemAddSubmit)
  }

  return {
    init: async function () {
      await ItemCtrl.updateItems()

      const items = ItemCtrl.getItems()

      UICtrl.populateItemList(items)

      UICtrl.clearEditState()

      const totalCalories = ItemCtrl.getTotalCalories()
      UICtrl.showTotalCalories(totalCalories)
      loadEventListeners()
    },
  }
})()

App.init()
