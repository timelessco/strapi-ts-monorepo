import { type StrapiTyped } from "../../types/strapiTyped.js";
import { throwError } from "../../utils/throwError.js";
import { type ServiceHandler } from "./types.js";

const getWelcomeMessage = (_strapi: StrapiTyped) => {
	return () => {
		try {
			return "Welcome to Strapi 🚀";
		} catch (error) {
			return throwError(
				error,
				`[app] Uno Service: uno.getWelcomeMessage failed`,
			);
		}
	};
};

export const unoService = ((props) => {
	const { strapi } = props;

	return {
		getWelcomeMessage: getWelcomeMessage(strapi),
	};
}) satisfies ServiceHandler;
