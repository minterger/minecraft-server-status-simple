const axios = require("axios");

// api java server
const apiJava = "https://api.mcsrvstat.us/2/";
// api bedrock server
const apiBedrock = "https://api.mcsrvstat.us/bedrock/2/";

/**
 * get data from request api
 * @param {String} api
 * @param {String} ip
 * @param {Number} port
 * @returns
 */
const getData = (api, ip, port) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(api + ip + ":" + port);
      resolve(response.data);
    } catch (error) {
      reject(error.response.data);
    }
  });
};

const filterData = (data, filter = []) => {
  const result = {};
  filter.forEach((element) => {
    result[element] = data[element] || false;
  });
  return result;
};

/**
 * request data from mincraft java server
 * @param {String} ip
 * @param {Number} port
 * @param {Array} show
 * @returns
 */
const statusJava = async ({ ip, port = 25565, show = [] }) => {
  try {
    const response = await getData(apiJava, ip, port);

    if (show.length > 0) {
      return filterData(response, show);
    }

    return response;
  } catch (error) {
    return error;
  }
};

/**
 * request data from mincraft bedrock server
 * @param {String} ip
 * @param {Number} port
 * @param {Array} show
 * @returns
 */
const statusBedrock = async ({ ip, port = 19132, show = [] }) => {
  try {
    const response = await getData(apiBedrock, ip, port);

    if (show.length > 0) {
      return filterData(response, show);
    }

    return response;
  } catch (error) {
    return error;
  }
};

/**
 * request data from mincraft server (java or bedrock)
 * @param {String} type
 * @param {String} ip
 * @param {Number} port
 * @param {Array} show
 * @returns
 */
const status = async ({ type, ip, port = null, show = [] }) => {
  let result = {};
  if (type === "java") {
    result = await statusJava(ip, port || 25565);
  }
  if (type === "bedrock") {
    result = await statusBedrock(ip, port || 19132);
  }
  if (show.length > 0) {
    return filterData(result, show);
  }
  return result;
};

module.exports = {
  statusJava,
  statusBedrock,
  status,
};
