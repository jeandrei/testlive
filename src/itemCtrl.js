const ItemCtrl = (function () {
  const Item = function (id, name, calories) {
    this.id = id
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
      let ID = 0
      let calories = 0
      if (data.items.length > 0) {
        lastId = data.items[data.items.length - 1].id
        ID = parseInt(lastId) + 1
      }
      calories = parseInt(calories)
      newItem = new Item(ID, item.name, item.calories)
      data.items.push(newItem)
      return newItem
    },
  }
})()
