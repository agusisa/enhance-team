console.log('asd')

import Api from "./api.js";
async function getStudents() {
  Api.get2('/alumnos')
    .then((data) => console.log(data));
}
