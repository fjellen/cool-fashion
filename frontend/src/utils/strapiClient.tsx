export const strapiClient = async (
  path: string,
  method: string,
  body: object
) => {
  const response = await fetch(`http://localhost:1337${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data;
};
