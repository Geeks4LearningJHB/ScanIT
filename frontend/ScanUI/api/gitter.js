import api from "../Config/environment";

export async function getAllProfiles() {
  console.log("Start");
  await callApi()
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error("Error in callApi:", error);
      throw error; // Rethrow the error to be caught by the caller
    });
  console.log("End");

  return fetch(`${environment.api}/users`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return data; // Return the data
    })
    .catch((error) => {
      console.error("Error:", error);
      throw error; // Rethrow the error to be caught by the caller
    });
}

export async function callApi() {
  const res = await fetch(`${environment.api}/users`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(res);
  return res.json();
}

export async function saveProfile(name, surname, username, password) {
  try {
    const response = await fetch("back end endpoint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, surname, username, password }),
    });
    return response;
  } catch (error) {
    console.error("Error:", error);
  }
}

//  async function callApi(endpoint, options = { method: "get" }) {
//   const url = `${api}/${endpoint}`;

//   return fetch(url, {
//     ...options,
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((res) => {
//       return res.text();
//     })
//     .then((text) => {
//       if (text === "OK") {
//         return [];
//       }
//       if (text.length === 0) {
//         return [];
//       }
//       return JSON.parse(text);
//     });
// }
