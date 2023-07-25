import { unoService } from "./uno.js";

export default {
	uno: unoService,
};

export type Services = {
	uno: typeof unoService;
};
