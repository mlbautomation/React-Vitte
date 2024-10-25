import axios from "axios";

const Fetcher2 = async () => {
  let formData = {
    username: "marlon",
    password: "123",
  };

  //Forma 1: Correcto!
  fetch("https://localhost:8080/login", {
    method: "post",
    body: JSON.stringify(formData),
    mode: "cors",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw "response.ok = false!";
      }
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      alert(err);
    });
  //----------------------------------------------
  //Forma 2: Correcto!
  //----------------------------------------------
  /*   fetch("https://localhost:8080/login", {
    method: "post",
    body: JSON.stringify(formData),
    mode: "cors",
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err)); */
  //----------------------------------------------
  //Forma 3: Trae problemas con cors, no funciona!
  //----------------------------------------------
  /*   const config = {
    url: "https://localhost:8080/login",
    method: "POST",
    headers: {
      "Access-Control-Allow-Methods": "GET,POST",
      "Access-Control-Allow-Origin": "",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Headers": "",
      "Access-Control-Expose-Headers": "*",
    },
    data: JSON.stringify(formData),
  };
  const response = await axios(config).catch((err) => err);
  console.log(response.data); */
  //----------------------------------------------
};

export default Fetcher2;
