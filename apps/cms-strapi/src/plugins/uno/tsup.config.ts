import fs from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { defineConfig } from "tsup";

export default defineConfig((options) => {
	return {
		clean: !options.watch,
		outDir: "dist",
		entry: ["strapi-admin.ts", "strapi-server.ts"],
		format: ["cjs"],
		tsconfig: "tsconfig.build.json",
		outExtension(context) {
			if (context.format === "cjs") return { js: ".js" };

			return { js: ".mjs" };
		},
		env: {
			NODE_ENV: options.watch ? "development" : "production",
		},
		treeshake: true,
		shims: true,
		metafile: true,
		minify: !options.watch,
		async onSuccess() {
			await setupPackage();
		},
	};
});

async function setupPackage() {
	const _dirname = dirname(fileURLToPath(import.meta.url));

	// This script is called from within the dist folder. It is important to include it in .npmignore, so it will not get published.
	const sourceDirectory = _dirname;
	const destinationDirectory = join(_dirname, "dist");

	// Generate publish-ready package.json
	const source = (await fs.readFile(join(_dirname, "package.json"))).toString(
		"utf8",
	);
	const sourceObject = JSON.parse(source);

	sourceObject.scripts = {};
	sourceObject.devDependencies = {};
	sourceObject.type = "commonjs";

	await fs.writeFile(
		`${destinationDirectory}/package.json`,
		Buffer.from(JSON.stringify(sourceObject, null, 2), "utf8"),
	);
	await fs.copyFile(
		`${sourceDirectory}/README.md`,
		`${destinationDirectory}/README.md`,
	);
	await fs.copyFile(
		`${sourceDirectory}/LICENSE.md`,
		`${destinationDirectory}/LICENSE.md`,
	);
}
