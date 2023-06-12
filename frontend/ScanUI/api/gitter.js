import api from "../Config/environment";

export async function getAllProfiles() {
  return await fetch(`${api}user`)
      .then((response) => response.json())
      .catch((err) => err);
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

function callApi(endpoint, options = { method: "get" }) {
  const url = `${api}/${endpoint}`;

  return fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.text();
    })
    .then((text) => {
      if (text === "OK") {
        return [];
      }
      if (text.length === 0) {
        return [];
      }
      return JSON.parse(text);
    });
}
