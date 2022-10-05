const URLAPI =
  'https://script.google.com/macros/s/AKfycbzwki_CtnCWaT74-qQphvt57PtAEP8K8kl98RHUASUB8IcHyp8Ah-fMIPUxWmj4F-7A/exec'

const http = new EasyHTTP()

const StorageCtrl = (function () {
  return {
    /* 01 get items */
    getItems: async function () {
      const items = await http.get(URLAPI)
      return items.data
    },
    postItem: async function (newItem) {
      console.log('trying to post')
      const item = await http.post(URLAPI, {
        id: '01',
        name: 'Cake',
        calories: '200',
      })
      console.log(item)
      ItemCtrl.updateItems()
    },
  }
})()
