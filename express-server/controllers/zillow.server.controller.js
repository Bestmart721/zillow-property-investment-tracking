var Zillow = require("node-zillow");
//Instantiate
// var your-zws-id = process.env.ZWSID
// var zillow = new Zillow('X1-ZWz1gy3v1sml8r_2f38x', options);
var zillow = new Zillow("X1-ZWz1gy3v1sml8r_2f38x");

export const getUpdatedPropertyDetails = async (req, res) => {
  let zpid = req.url.split("/")[2];

  var parameters = {
    zpid: zpid,
    rentzestimate: true
  };

  try {
    let _data = await zillow.get("GetUpdatedPropertyDetails", parameters);

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
  let zpid = req.url.split("/")[2];

  var parameters = {
    zpid: zpid
  };

  parameters["unit-type"] = "dollar";

  try {
    let _data = await zillow.get("GetChart", parameters);

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
  let zpid = req.url.split("/")[2];

  var parameters = {
    zpid: zpid,
    count: 20
  };

  try {
    let _data = await zillow.get("GetComps", parameters);

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
  let zpid = req.url.split("/")[2];

  var parameters = {
    zpid: zpid,
    count: 20
  };

  try {
    let _data = await zillow.get("GetDeepComps", parameters);

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
  let zpid = req.url.split("/")[2];

  var parameters = {
    state: "OR"
  };

  try {
    let _data = await zillow.get("GetRegionChildren", parameters);

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
  let zpid = req.url.split("/")[2];

  var parameters = {
    zpid: zpid,
    rentzestimate: true
  };

  try {
    let _data = await zillow.get("GetZestimate", parameters);

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
