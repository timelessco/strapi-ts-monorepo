import { type Common } from "@strapi/strapi";

import { type StrapiTyped } from "../../types/strapiTyped.js";
import type controllers from "./index.js";

type ControllersType = typeof controllers;
type KeyofControllersType = keyof ControllersType;
type ValueofControllersType = ReturnType<ControllersType[KeyofControllersType]>;
type ControllersHandlersType = {
	[key in KeyofControllersType]: ValueofControllersType;
};

export type ControllersHandler =
	`${keyof ControllersHandlersType}.${keyof ControllersHandlersType[keyof ControllersHandlersType]}`;

export type ControllerHandler = (props: {
	strapi: StrapiTyped;
}) => Record<string, Common.ControllerHandler>;
