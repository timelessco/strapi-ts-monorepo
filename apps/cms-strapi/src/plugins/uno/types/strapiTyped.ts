import { type Strapi as StrapiOriginal } from "@strapi/strapi";
import { type RequestInfo, type RequestInit, type Response } from "node-fetch";

import { type StrapiAdmin } from "./admin.js";

export type StrapiTyped = StrapiOriginal & {
	Admin: StrapiAdmin;
	fetch: (url: RequestInfo | URL, init?: RequestInit) => Promise<Response>;
};
