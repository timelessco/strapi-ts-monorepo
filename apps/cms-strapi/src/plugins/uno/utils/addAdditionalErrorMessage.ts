import { getErrorMessage } from "./getErrorMessage.js";

/**
 * Adds additional error message to the existing error message.
 * @param {unknown} error - The error object.
 * @param {string} errorMessage - The additional error message to be added.
 * @returns {string} - The updated error message.
 */
export function addAdditionalErrorMessage(
	error: unknown,
	errorMessage: string,
): string {
	return `${errorMessage} - ${getErrorMessage(error)}`;
}
