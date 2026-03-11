const fetch = require("node-fetch");

exports.handler = async (event) => {

  const url = event.queryStringParameters.url;

  if (!url) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "URL required" })
    };
  }

  try {

    const api = "https://p.oceansaver.in/ajax/download.php?format=mp4&url=" + encodeURIComponent(url);

    const res = await fetch(api);
    const data = await res.text();

    return {
      statusCode: 200,
      body: data
    };

  } catch (err) {

    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.toString() })
    };

  }

};
