import { useEffect, useRef } from "react";

import { type InitializerType } from "../../../types/admin.js";
import { PLUGIN_ID } from "../../../utils/constants.js";

export const Initializer = ((props) => {
	const { setPlugin } = props;
	const ref = useRef(setPlugin);

	useEffect(() => {
		ref.current(PLUGIN_ID);
	}, []);

	return null;
}) satisfies InitializerType;
