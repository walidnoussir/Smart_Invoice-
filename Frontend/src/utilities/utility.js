const baseUrl = import.meta.env.VITE_BASE_URL;
const secretKey = import.meta.env.VITE_RAWG_API_KEY;
const creatorsUrl = baseUrl + "creators?" + "key=" + secretKey;
const publisherUrl = import.meta.env.VITE_PUBLISHER_URL;
const creatorUrl = (creatorId) => {
  return `${baseUrl}creators/${creatorId}?key=${secretKey}`;
};

const stripHTML = (description) => {
  const doc = new DOMParser().parseFromString(description, "text/html");
  return doc.body.textContent || "";
};
export { creatorsUrl, baseUrl, secretKey, creatorUrl, stripHTML, publisherUrl };
