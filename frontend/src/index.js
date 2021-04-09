import "./style.scss";
require("intersection-observer");
import "whatwg-fetch";
const moment = require("moment");

console.log(moment().format());
console.log(moment().year());
console.log(moment().format("YYYY-MM-DD"));

document.getElementById("button").addEventListener("click", () => {
  const postForm = document.forms.post_form;
  const formData = new FormData(postForm);

  const url = "http://coinbaby8.com/udemy_js_api/api/udemy_js";
  const post_options = {
    method: "post",
    body: formData,
  };

  fetch(url, post_options)
    .then((response) => {
      if (response.ok) {
        return response.text();
      } else {
        return new Error();
      }
    })
    .then((text) => console.log(text))
    .catch((error) => console.log(error));
});
