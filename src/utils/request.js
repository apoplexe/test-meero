export default async url => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "x-api-key": "60e2bb66-188d-49ff-8021-00874cbfad67" // FIXME: use variable d'environnement
    }
  }).then(response => response.json());

  return response;
};
