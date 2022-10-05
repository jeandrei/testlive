/**
 * EasyHTTP Library
 * Library form making HTTP requests
 *
 * @version 3.0.0
 * @author Brad Traversy
 * @license MIT
 *
 */

class EasyHTTP {
  // Make an HTTP GET Request
  async get(url) {
    const response = await fetch(url)
    const resData = await response.json()
    return resData
  }

  // Make Post Request
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache',
      credentials: 'omit',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    const resData = await response.json()
    return resData
  }

  async postForm(url, form) {
    const response = await fetch(url, {
      method: 'POST',
      body: new FormData(form),
    })
      .then((response) => console.log('Success!', response))
      .catch((error) => console.error('Error!', error.message))
    //const resData = await response.json()
    //return resData
  }

  // Make an HTTP PUT Request
  async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    const resData = await response.json()
    return resData
  }

  //Make an HTTP DELETE Request
  async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    })
    const resData = await 'Resource Deleted'
    return resData
  }
}
