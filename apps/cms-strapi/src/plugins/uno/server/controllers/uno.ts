import { type Common } from "@strapi/strapi";

import { type StrapiTyped } from "../../types/strapiTyped.js";
import { throwError } from "../../utils/throwError.js";
import { getService } from "../utils/getService.js";
import { type ControllerHandler } from "./types.js";

const index = (_strapi: StrapiTyped) => {
	return (async (context) => {
		try {
			const unoService = getService("uno");
			const welcomeMessage = unoService.getWelcomeMessage();
			context.body = welcomeMessage;

			return undefined;
		} catch (error) {
			return throwError(error, `[app] Uno Controller: uno.index failed`);
		}
	}) satisfies Common.ControllerHandler;
};

export const unoController = ((props) => {
	const { strapi } = props;

	return {
		index: index(strapi),
	};
}) satisfies ControllerHandler;
