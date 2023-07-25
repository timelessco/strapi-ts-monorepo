import { addAdditionalErrorMessage } from "./addAdditionalErrorMessage.js";

/**
 * Throws an error with an additional error message.
 * @param error - The original error.
 * @param errorMessage - The additional error message.
 * @returns This function never returns as it always throws an error.
 */
export function throwError(error: unknown, errorMessage: string): never {
	throw new Error(addAdditionalErrorMessage(error, errorMessage), {
		cause: error,
	});
}
