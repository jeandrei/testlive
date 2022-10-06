/* apiplan4 */
const URLAPI =
  'https://script.google.com/macros/s/AKfycbyGEly1nwOPQyejvIrr-LPi6fnAVkgq2mhnxKO9_g_RjTQTy-9cup36YogF7p3SEXl0/exec'

const http = new EasyHTTP()

const StorageCtrl = (function () {
  return {
    /* 01 get items */
    getItems: async function () {
      const items = await http.get(URLAPI)
      return items[0].data
    },
    postItem: async function (newItem) {
      const item = await http.post(URLAPI, newItem)
      ItemCtrl.updateItems()
    },
  }
})()
