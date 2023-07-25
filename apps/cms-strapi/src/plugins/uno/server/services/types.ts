import { type StrapiTyped } from "../../types/strapiTyped.js";
import type services from "./index.js";

export type ServiceHandler = (props: {
	strapi: StrapiTyped;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
}) => Record<string, any>;

export type ServicesHandler = typeof services;
