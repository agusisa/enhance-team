export default class Api {
  URL = "https://6068e75d0add4900173406f8.mockapi.io/";
  defaultHeaders = new Headers();
  myInit = {
    method: "GET",
    headers: defaultHeaders,
    mode: "cors",
    cache: "default",
  };
  get = async (url, queryParams = {}, headers = defaultHeaders) => {
    return new Promise((resolve, reject) => {
      
      fetch({})
        .then((response) => response.json())
        .then((data) => console.log(data));

      // .then((response) => resolve(response.json()))
      // .catch((error) => reject(error));
    });
  };

  get2 = async (url, queryParams = {}, headers = defaultHeaders) => {
    return new Promise((resolve, reject) => {
      fetch(this.URL + url)
        .then((response) => response.json())
        .then((data) => {resolve (console.log(data))});
    });
  };

  post = async (body, queryParams) => {
    return new Promise((resolve, reject) => {
      fetch(`${this.URL}`)
        .then((response) => response.json())
        .then((data) => console.log(data));
    });
  };
}
