// api/cors-proxy.js
module.exports = async (req, res) => {
  const url = req.query.url;  // 获取请求中的url参数

  // 如果没有url参数，返回400错误
  if (!url) {
    return res.status(400).send('Missing "url" query parameter');
  }

  try {
    // 从目标url获取内容
    const response = await fetch(url);
    const body = await response.text();
    
    // 设置 CORS 头部，允许任何来源访问
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'text/html');
    
    // 返回获取到的网页内容
    res.status(200).send(body);
  } catch (error) {
    // 如果获取内容失败，返回500错误
    res.status(500).send('Error fetching URL');
  }
};