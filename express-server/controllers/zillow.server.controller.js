const Zillow = require("node-zillow");
require('dotenv').config();

//Instantiate
const zwsid = process.env.ZWSID;
console.log(zwsid);
const zillow = new Zillow(zwsid);

export const getUpdatedPropertyDetails = async (req, res) => {
  const zpid = req.url.split("/")[2];

  const parameters = {
    zpid: zpid,
    rentzestimate: true
  };

  try {
    const _data = await zillow.get("GetUpdatedPropertyDetails", parameters);

    return res.status(200).json({
      status: 200,
      data: _data,
      message: "Successfully retrieved response"
    });
  } catch (e) {
    return res.status(400).json({
      status: 400,
      message: e.message
    });
  }
};

export const getChart = async (req, res) => {
  const zpid = req.url.split("/")[2];

  const parameters = {
    zpid: zpid
  };

  parameters["unit-type"] = "dollar";

  try {
    const _data = await zillow.get("GetChart", parameters);

    return res.status(200).json({
      status: 200,
      data: _data,
      message: "Successfully retrieved response"
    });
  } catch (e) {
    return res.status(400).json({
      status: 400,
      message: e.message
    });
  }
};

export const getComps = async (req, res) => {
  const zpid = req.url.split("/")[2];

  const parameters = {
    zpid: zpid,
    count: 20
  };

  try {
    const _data = await zillow.get("GetComps", parameters);

    return res.status(200).json({
      status: 200,
      data: _data,
      message: "Successfully retrieved response"
    });
  } catch (e) {
    return res.status(400).json({
      status: 400,
      message: e.message
    });
  }
};

export const getDeepComps = async (req, res) => {
  const zpid = req.url.split("/")[2];

  const parameters = {
    zpid: zpid,
    count: 20
  };

  try {
    const _data = await zillow.get("GetDeepComps", parameters);

    return res.status(200).json({
      status: 200,
      data: _data,
      message: "Successfully retrieved response"
    });
  } catch (e) {
    return res.status(400).json({
      status: 400,
      message: e.message
    });
  }
};

export const getRegionChildren = async (req, res) => {
  const parameters = {
    state: "OR"
  };

  try {
    const _data = await zillow.get("GetRegionChildren", parameters);

    return res.status(200).json({
      status: 200,
      data: _data,
      message: "Successfully retrieved response"
    });
  } catch (e) {
    return res.status(400).json({
      status: 400,
      message: e.message
    });
  }
};

export const getZestimate = async (req, res) => {
  const zpid = req.url.split("/")[2];

  const parameters = {
    zpid: zpid,
    rentzestimate: true
  };

  try {
    const _data = await zillow.get("GetZestimate", parameters);

    return res.status(200).json({
      status: 200,
      data: _data,
      message: "Successfully retrieved response"
    });
  } catch (e) {
    return res.status(400).json({
      status: 400,
      message: e.message
    });
  }
};
