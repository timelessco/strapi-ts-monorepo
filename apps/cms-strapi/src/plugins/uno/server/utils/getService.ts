import { PLUGIN_ID } from "../../utils/constants.js";
import { type ServicesHandler } from "../services/types.js";

export const getService = <T extends keyof ServicesHandler>(
	name: T,
): ReturnType<ServicesHandler[T]> => {
	return strapi.plugin(PLUGIN_ID).service(name);
};
