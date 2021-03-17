import configData from "../config.json";

/**
 * Library to get data from config file
 * @param {*} name 
 */
export default function getConfigData(name) {
    return configData[name];  
}