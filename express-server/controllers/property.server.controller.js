const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'properties.json');

export const getProperties = async (req, res) => {
    fs.readFile(DATA_FILE, (err, data) => {
      res.setHeader('Cache-Control', 'no-cache');
      res.json(JSON.parse(data));
    });
};

export const createProperty = async (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    const properties = JSON.parse(data);
    const newProperty = {
      zpid: req.body.zpid,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
      description: req.body.description,
      image: req.body.image,
      elapsed: 0,
      runningSince: null,
    };
    properties.push(newProperty);
    fs.writeFile(DATA_FILE, JSON.stringify(properties, null, 4), () => {
      res.setHeader('Cache-Control', 'no-cache');
      res.json(properties);
    });
  });
}

export const updateProperty = async (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    const properties = JSON.parse(data);
    properties.forEach((property) => {
      if (property.zpid === req.body.zpid) {
        property.address = req.body.address;
        property.city = req.body.city;
        property.state = req.body.state;
        property.zip = req.body.zip;
        property.description = req.body.description;
        property.image = req.body.image;
      }
    });
    fs.writeFile(DATA_FILE, JSON.stringify(properties, null, 4), () => {
      res.json({});
    });
  });
}

export const deleteProperty = async (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    let properties = JSON.parse(data);
    properties = properties.reduce((memo, property) => {
      if (property.zpid === req.body.zpid) {
        return memo;
      } else {
        return memo.concat(property);
      }
    }, []);
    fs.writeFile(DATA_FILE, JSON.stringify(properties, null, 4), () => {
      res.json({});
    });
  });
}

