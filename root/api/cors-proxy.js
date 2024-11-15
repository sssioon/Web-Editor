export default async function handler(req, res) {
    const { url } = req.query;

    if (!url) {
        res.status(400).json({ error: 'URL is required' });
        return;
    }

    try {
        const response = await fetch(url);
        const data = await response.text();

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Content-Type', 'text/html');
        res.status(200).send(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching the URL' });
    }
}
