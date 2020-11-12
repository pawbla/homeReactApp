import configData from "../config.json";

export default function getConfigData(name) {
    return configData[name];  
}