// cors-proxy.js
module.exports = async (req, res) => {
  const url = req.query.url;
  
  if (!url) {
    return res.status(400).send('Missing "url" query parameter');
  }

  try {
    const response = await fetch(url);
    const body = await response.text();
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(body);
  } catch (error) {
    res.status(500).send('Error fetching URL');
  }
};
