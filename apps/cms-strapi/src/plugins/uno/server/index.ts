import bootstrap from "./bootstrap.js";
import config from "./config/index.js";
import contentTypes from "./content-types/index.js";
import controllers from "./controllers/index.js";
import destroy from "./destroy.js";
import middlewares from "./middlewares/index.js";
import policies from "./policies/index.js";
import register from "./register.js";
import routes from "./routes/index.js";
import services from "./services/index.js";

export default {
	register,
	bootstrap,
	destroy,
	config,
	controllers,
	routes,
	services,
	contentTypes,
	policies,
	middlewares,
};
