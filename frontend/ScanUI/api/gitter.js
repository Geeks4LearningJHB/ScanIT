export async function getAllProfiles() {
  try {
    const response = await fetch("Back end api");
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Error:", error);
  }
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

function callApi(endpoint, token, options = { method: "get" }) {
  const url = `${apiUrl}/${endpoint}`;

  return fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
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
