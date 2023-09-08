const express = require('express');
const cors = require('cors');

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors(corsOptions));

app.get('/api/bios/:username', async (req, res) => {
  try {
    const username = req.params.username;
    const apiUrl = `https://torre.bio/api/bios/${username}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching data from Torre API' });
  }
});

app.get('/', (req, res) => {
  res.send('Server is up!');
});

app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
