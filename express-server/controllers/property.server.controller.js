const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'properties.json');

export const getProperties = async (req, res) => {
    fs.readFile(DATA_FILE, (err, data) => {
      res.setHeader('Cache-Control', 'no-cache');
      res.json(JSON.parse(data));
    });
};
