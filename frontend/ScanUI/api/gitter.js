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
