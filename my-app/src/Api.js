const baseUrl = "http://localhost:3001";
export const post = async (endpoint, payload = {}) => {
  let response = await fetch(`${baseUrl}/${endpoint}`, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin // @ts-ignore
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json", // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(payload), // body data type must match "Content-Type" header
  });

  response = await response.json(); // @ts-ignore
  return response;
};

export async function get(endpoint, data) {
  const params = data ? `?input=${encodeURI(JSON.stringify(data))}` : "";
  let response = await fetch(`${baseUrl}/${endpoint}${params}`);
  response = await response.json(); // @ts-ignore
  return response.result.data;
}
