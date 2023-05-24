import pluginPkg from "../../package.json";

const pluginId = pluginPkg.name.replace(
	// eslint-disable-next-line regexp/no-unused-capturing-group
	/^(@[^,.-][\w,-]+\/|strapi-)plugin-/iu,
	"",
);

export default pluginId;
