const baseUrl = import.meta.env.VITE_BASE_URL;
const secretKey = import.meta.env.VITE_RAWG_API_KEY;
const creatorsUrl = baseUrl + "creators?" + "key=" + secretKey;
const publisherUrl = import.meta.env.VITE_PUBLISHER_URL;
const creatorUrl = (creatorId) => {
  return `${baseUrl}creators/${creatorId}?key=${secretKey}`;
};

export { creatorsUrl, baseUrl, secretKey, creatorUrl, publisherUrl };
