/**
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import { AnErrorOccurred } from "@strapi/helper-plugin";
import React from "react";
import { Route, Switch } from "react-router-dom";

import { PLUGIN_ID } from "../../../../utils/constants.js";
import HomePage from "../HomePage/index.js";

const App = () => {
	return (
		<div>
			<Switch>
				<Route component={HomePage} exact path={`/plugins/${PLUGIN_ID}`} />
				<Route component={AnErrorOccurred} />
			</Switch>
		</div>
	);
};

export default App;
