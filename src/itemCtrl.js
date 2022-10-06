const ItemCtrl = (function () {
  const Item = function (name, calories) {
    this.name = name
    this.calories = calories
  }

  const data = {
    items: null,
    currentItem: null,
    totalCalories: 0,
  }

  return {
    /* 03 get items */
    getItems: function () {
      return data.items
    },
    logData: function () {
      return data
    },
    /* 02 get items from the spreadsheet and update data.items */
    updateItems: async function () {
      let items = await StorageCtrl.getItems()
      data.items = await items
    },
    getTotalCalories: function () {
      let total = 0
      if (data.items === null) {
        return
      }
      data.items.forEach(function (item) {
        calories = parseInt(item.calories)
        total += calories
      })
      data.totalCalories = total
      return total
    },
    addItem: function (item) {
      const calories = parseInt(item.calories)
      newItem = new Item(item.name, calories)
      data.items.push(newItem)
      return newItem
    },
  }
})()
