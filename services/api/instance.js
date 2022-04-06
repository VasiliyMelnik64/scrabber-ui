import axios from "axios";
import { defaultConfig } from "../default/config";

const createInstance = (config) => {
  const resConfig = {
    ...defaultConfig,
    ...config,
  };

  const instance = axios.create(resConfig);

  return instance;
};

export default createInstance;
