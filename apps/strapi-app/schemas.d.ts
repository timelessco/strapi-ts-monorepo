import {
	BigIntegerAttribute,
	BooleanAttribute,
	CollectionTypeSchema,
	ComponentAttribute,
	ComponentSchema,
	DateTimeAttribute,
	DecimalAttribute,
	DefaultTo,
	EmailAttribute,
	EnumerationAttribute,
	IntegerAttribute,
	JSONAttribute,
	MediaAttribute,
	PasswordAttribute,
	PrivateAttribute,
	RelationAttribute,
	RequiredAttribute,
	RichTextAttribute,
	SetMinMax,
	SetMinMaxLength,
	SingleTypeSchema,
	StringAttribute,
	TextAttribute,
	UniqueAttribute,
} from "@strapi/strapi";

export interface AdminPermission extends CollectionTypeSchema {
	info: {
		name: "Permission";
		description: "";
		singularName: "permission";
		pluralName: "permissions";
		displayName: "Permission";
	};
	pluginOptions: {
		"content-manager": {
			visible: false;
		};
		"content-type-builder": {
			visible: false;
		};
	};
	attributes: {
		action: StringAttribute &
			RequiredAttribute &
			SetMinMaxLength<{
				minLength: 1;
			}>;
		subject: StringAttribute &
			SetMinMaxLength<{
				minLength: 1;
			}>;
		properties: JSONAttribute & DefaultTo<{}>;
		conditions: JSONAttribute & DefaultTo<[]>;
		role: RelationAttribute<"admin::permission", "manyToOne", "admin::role">;
		createdAt: DateTimeAttribute;
		updatedAt: DateTimeAttribute;
		createdBy: RelationAttribute<
			"admin::permission",
			"oneToOne",
			"admin::user"
		> &
			PrivateAttribute;
		updatedBy: RelationAttribute<
			"admin::permission",
			"oneToOne",
			"admin::user"
		> &
			PrivateAttribute;
	};
}

export interface AdminUser extends CollectionTypeSchema {
	info: {
		name: "User";
		description: "";
		singularName: "user";
		pluralName: "users";
		displayName: "User";
	};
	pluginOptions: {
		"content-manager": {
			visible: false;
		};
		"content-type-builder": {
			visible: false;
		};
	};
	attributes: {
		firstname: StringAttribute &
			SetMinMaxLength<{
				minLength: 1;
			}>;
		lastname: StringAttribute &
			SetMinMaxLength<{
				minLength: 1;
			}>;
		username: StringAttribute;
		email: EmailAttribute &
			RequiredAttribute &
			PrivateAttribute &
			UniqueAttribute &
			SetMinMaxLength<{
				minLength: 6;
			}>;
		password: PasswordAttribute &
			PrivateAttribute &
			SetMinMaxLength<{
				minLength: 6;
			}>;
		resetPasswordToken: StringAttribute & PrivateAttribute;
		registrationToken: StringAttribute & PrivateAttribute;
		isActive: BooleanAttribute & PrivateAttribute & DefaultTo<false>;
		roles: RelationAttribute<"admin::user", "manyToMany", "admin::role"> &
			PrivateAttribute;
		blocked: BooleanAttribute & PrivateAttribute & DefaultTo<false>;
		preferedLanguage: StringAttribute;
		createdAt: DateTimeAttribute;
		updatedAt: DateTimeAttribute;
		createdBy: RelationAttribute<"admin::user", "oneToOne", "admin::user"> &
			PrivateAttribute;
		updatedBy: RelationAttribute<"admin::user", "oneToOne", "admin::user"> &
			PrivateAttribute;
	};
}

export interface AdminRole extends CollectionTypeSchema {
	info: {
		name: "Role";
		description: "";
		singularName: "role";
		pluralName: "roles";
		displayName: "Role";
	};
	pluginOptions: {
		"content-manager": {
			visible: false;
		};
		"content-type-builder": {
			visible: false;
		};
	};
	attributes: {
		name: StringAttribute &
			RequiredAttribute &
			UniqueAttribute &
			SetMinMaxLength<{
				minLength: 1;
			}>;
		code: StringAttribute &
			RequiredAttribute &
			UniqueAttribute &
			SetMinMaxLength<{
				minLength: 1;
			}>;
		description: StringAttribute;
		users: RelationAttribute<"admin::role", "manyToMany", "admin::user">;
		permissions: RelationAttribute<
			"admin::role",
			"oneToMany",
			"admin::permission"
		>;
		createdAt: DateTimeAttribute;
		updatedAt: DateTimeAttribute;
		createdBy: RelationAttribute<"admin::role", "oneToOne", "admin::user"> &
			PrivateAttribute;
		updatedBy: RelationAttribute<"admin::role", "oneToOne", "admin::user"> &
			PrivateAttribute;
	};
}

export interface AdminApiToken extends CollectionTypeSchema {
	info: {
		name: "Api Token";
		singularName: "api-token";
		pluralName: "api-tokens";
		displayName: "Api Token";
		description: "";
	};
	pluginOptions: {
		"content-manager": {
			visible: false;
		};
		"content-type-builder": {
			visible: false;
		};
	};
	attributes: {
		name: StringAttribute &
			RequiredAttribute &
			UniqueAttribute &
			SetMinMaxLength<{
				minLength: 1;
			}>;
		description: StringAttribute &
			SetMinMaxLength<{
				minLength: 1;
			}> &
			DefaultTo<"">;
		type: EnumerationAttribute<["read-only", "full-access", "custom"]> &
			RequiredAttribute &
			DefaultTo<"read-only">;
		accessKey: StringAttribute &
			RequiredAttribute &
			SetMinMaxLength<{
				minLength: 1;
			}>;
		lastUsedAt: DateTimeAttribute;
		permissions: RelationAttribute<
			"admin::api-token",
			"oneToMany",
			"admin::api-token-permission"
		>;
		expiresAt: DateTimeAttribute;
		lifespan: BigIntegerAttribute;
		createdAt: DateTimeAttribute;
		updatedAt: DateTimeAttribute;
		createdBy: RelationAttribute<
			"admin::api-token",
			"oneToOne",
			"admin::user"
		> &
			PrivateAttribute;
		updatedBy: RelationAttribute<
			"admin::api-token",
			"oneToOne",
			"admin::user"
		> &
			PrivateAttribute;
	};
}

export interface AdminApiTokenPermission extends CollectionTypeSchema {
	info: {
		name: "API Token Permission";
		description: "";
		singularName: "api-token-permission";
		pluralName: "api-token-permissions";
		displayName: "API Token Permission";
	};
	pluginOptions: {
		"content-manager": {
			visible: false;
		};
		"content-type-builder": {
			visible: false;
		};
	};
	attributes: {
		action: StringAttribute &
			RequiredAttribute &
			SetMinMaxLength<{
				minLength: 1;
			}>;
		token: RelationAttribute<
			"admin::api-token-permission",
			"manyToOne",
			"admin::api-token"
		>;
		createdAt: DateTimeAttribute;
		updatedAt: DateTimeAttribute;
		createdBy: RelationAttribute<
			"admin::api-token-permission",
			"oneToOne",
			"admin::user"
		> &
			PrivateAttribute;
		updatedBy: RelationAttribute<
			"admin::api-token-permission",
			"oneToOne",
			"admin::user"
		> &
			PrivateAttribute;
	};
}

export interface AdminTransferToken extends CollectionTypeSchema {
	info: {
		name: "Transfer Token";
		singularName: "transfer-token";
		pluralName: "transfer-tokens";
		displayName: "Transfer Token";
		description: "";
	};
	pluginOptions: {
		"content-manager": {
			visible: false;
		};
		"content-type-builder": {
			visible: false;
		};
	};
	attributes: {
		name: StringAttribute &
			RequiredAttribute &
			UniqueAttribute &
			SetMinMaxLength<{
				minLength: 1;
			}>;
		description: StringAttribute &
			SetMinMaxLength<{
				minLength: 1;
			}> &
			DefaultTo<"">;
		accessKey: StringAttribute &
			RequiredAttribute &
			SetMinMaxLength<{
				minLength: 1;
			}>;
		lastUsedAt: DateTimeAttribute;
		permissions: RelationAttribute<
			"admin::transfer-token",
			"oneToMany",
			"admin::transfer-token-permission"
		>;
		expiresAt: DateTimeAttribute;
		lifespan: BigIntegerAttribute;
		createdAt: DateTimeAttribute;
		updatedAt: DateTimeAttribute;
		createdBy: RelationAttribute<
			"admin::transfer-token",
			"oneToOne",
			"admin::user"
		> &
			PrivateAttribute;
		updatedBy: RelationAttribute<
			"admin::transfer-token",
			"oneToOne",
			"admin::user"
		> &
			PrivateAttribute;
	};
}

export interface AdminTransferTokenPermission extends CollectionTypeSchema {
	info: {
		name: "Transfer Token Permission";
		description: "";
		singularName: "transfer-token-permission";
		pluralName: "transfer-token-permissions";
		displayName: "Transfer Token Permission";
	};
	pluginOptions: {
		"content-manager": {
			visible: false;
		};
		"content-type-builder": {
			visible: false;
		};
	};
	attributes: {
		action: StringAttribute &
			RequiredAttribute &
			SetMinMaxLength<{
				minLength: 1;
			}>;
		token: RelationAttribute<
			"admin::transfer-token-permission",
			"manyToOne",
			"admin::transfer-token"
		>;
		createdAt: DateTimeAttribute;
		updatedAt: DateTimeAttribute;
		createdBy: RelationAttribute<
			"admin::transfer-token-permission",
			"oneToOne",
			"admin::user"
		> &
			PrivateAttribute;
		updatedBy: RelationAttribute<
			"admin::transfer-token-permission",
			"oneToOne",
			"admin::user"
		> &
			PrivateAttribute;
	};
}

export interface PluginUploadFile extends CollectionTypeSchema {
	info: {
		singularName: "file";
		pluralName: "files";
		displayName: "File";
		description: "";
	};
	pluginOptions: {
		"content-manager": {
			visible: false;
		};
		"content-type-builder": {
			visible: false;
		};
	};
	attributes: {
		name: StringAttribute & RequiredAttribute;
		alternativeText: StringAttribute;
		caption: StringAttribute;
		width: IntegerAttribute;
		height: IntegerAttribute;
		formats: JSONAttribute;
		hash: StringAttribute & RequiredAttribute;
		ext: StringAttribute;
		mime: StringAttribute & RequiredAttribute;
		size: DecimalAttribute & RequiredAttribute;
		url: StringAttribute & RequiredAttribute;
		previewUrl: StringAttribute;
		provider: StringAttribute & RequiredAttribute;
		provider_metadata: JSONAttribute;
		related: RelationAttribute<"plugin::upload.file", "morphToMany">;
		folder: RelationAttribute<
			"plugin::upload.file",
			"manyToOne",
			"plugin::upload.folder"
		> &
			PrivateAttribute;
		folderPath: StringAttribute &
			RequiredAttribute &
			PrivateAttribute &
			SetMinMax<{
				min: 1;
			}>;
		createdAt: DateTimeAttribute;
		updatedAt: DateTimeAttribute;
		createdBy: RelationAttribute<
			"plugin::upload.file",
			"oneToOne",
			"admin::user"
		> &
			PrivateAttribute;
		updatedBy: RelationAttribute<
			"plugin::upload.file",
			"oneToOne",
			"admin::user"
		> &
			PrivateAttribute;
	};
}

export interface PluginUploadFolder extends CollectionTypeSchema {
	info: {
		singularName: "folder";
		pluralName: "folders";
		displayName: "Folder";
	};
	pluginOptions: {
		"content-manager": {
			visible: false;
		};
		"content-type-builder": {
			visible: false;
		};
	};
	attributes: {
		name: StringAttribute &
			RequiredAttribute &
			SetMinMax<{
				min: 1;
			}>;
		pathId: IntegerAttribute & RequiredAttribute & UniqueAttribute;
		parent: RelationAttribute<
			"plugin::upload.folder",
			"manyToOne",
			"plugin::upload.folder"
		>;
		children: RelationAttribute<
			"plugin::upload.folder",
			"oneToMany",
			"plugin::upload.folder"
		>;
		files: RelationAttribute<
			"plugin::upload.folder",
			"oneToMany",
			"plugin::upload.file"
		>;
		path: StringAttribute &
			RequiredAttribute &
			SetMinMax<{
				min: 1;
			}>;
		createdAt: DateTimeAttribute;
		updatedAt: DateTimeAttribute;
		createdBy: RelationAttribute<
			"plugin::upload.folder",
			"oneToOne",
			"admin::user"
		> &
			PrivateAttribute;
		updatedBy: RelationAttribute<
			"plugin::upload.folder",
			"oneToOne",
			"admin::user"
		> &
			PrivateAttribute;
	};
}

export interface PluginI18NLocale extends CollectionTypeSchema {
	info: {
		singularName: "locale";
		pluralName: "locales";
		collectionName: "locales";
		displayName: "Locale";
		description: "";
	};
	options: {
		draftAndPublish: false;
	};
	pluginOptions: {
		"content-manager": {
			visible: false;
		};
		"content-type-builder": {
			visible: false;
		};
	};
	attributes: {
		name: StringAttribute &
			SetMinMax<{
				min: 1;
				max: 50;
			}>;
		code: StringAttribute & UniqueAttribute;
		createdAt: DateTimeAttribute;
		updatedAt: DateTimeAttribute;
		createdBy: RelationAttribute<
			"plugin::i18n.locale",
			"oneToOne",
			"admin::user"
		> &
			PrivateAttribute;
		updatedBy: RelationAttribute<
			"plugin::i18n.locale",
			"oneToOne",
			"admin::user"
		> &
			PrivateAttribute;
	};
}

export interface ApiBrandingBranding extends SingleTypeSchema {
	info: {
		singularName: "branding";
		pluralName: "brandings";
		displayName: "Branding";
		description: "";
	};
	options: {
		draftAndPublish: true;
	};
	attributes: {
		websiteLogo: MediaAttribute & RequiredAttribute;
		watchPageLogo: MediaAttribute & RequiredAttribute;
		createdAt: DateTimeAttribute;
		updatedAt: DateTimeAttribute;
		publishedAt: DateTimeAttribute;
		createdBy: RelationAttribute<
			"api::branding.branding",
			"oneToOne",
			"admin::user"
		> &
			PrivateAttribute;
		updatedBy: RelationAttribute<
			"api::branding.branding",
			"oneToOne",
			"admin::user"
		> &
			PrivateAttribute;
	};
}

export interface ApiEpisodeEpisode extends CollectionTypeSchema {
	info: {
		singularName: "episode";
		pluralName: "episodes";
		displayName: "Episodes";
		description: "";
	};
	options: {
		draftAndPublish: true;
	};
	attributes: {
		key: StringAttribute & RequiredAttribute & UniqueAttribute;
		name: StringAttribute;
		description: TextAttribute;
		season: IntegerAttribute;
		episode: IntegerAttribute;
		originalAirDate: StringAttribute;
		banner: ComponentAttribute<"shows.image">;
		show: RelationAttribute<
			"api::episode.episode",
			"manyToOne",
			"api::show.show"
		>;
		createdAt: DateTimeAttribute;
		updatedAt: DateTimeAttribute;
		publishedAt: DateTimeAttribute;
		createdBy: RelationAttribute<
			"api::episode.episode",
			"oneToOne",
			"admin::user"
		> &
			PrivateAttribute;
		updatedBy: RelationAttribute<
			"api::episode.episode",
			"oneToOne",
			"admin::user"
		> &
			PrivateAttribute;
	};
}

export interface ApiFooterFooter extends SingleTypeSchema {
	info: {
		singularName: "footer";
		pluralName: "footers";
		displayName: "Footer";
		description: "";
	};
	options: {
		draftAndPublish: true;
	};
	attributes: {
		links: ComponentAttribute<"website.link", true>;
		createdAt: DateTimeAttribute;
		updatedAt: DateTimeAttribute;
		publishedAt: DateTimeAttribute;
		createdBy: RelationAttribute<
			"api::footer.footer",
			"oneToOne",
			"admin::user"
		> &
			PrivateAttribute;
		updatedBy: RelationAttribute<
			"api::footer.footer",
			"oneToOne",
			"admin::user"
		> &
			PrivateAttribute;
	};
}

export interface ApiGenreGenre extends CollectionTypeSchema {
	info: {
		singularName: "genre";
		pluralName: "genres";
		displayName: "Genres";
		description: "";
	};
	options: {
		draftAndPublish: true;
	};
	attributes: {
		key: StringAttribute & RequiredAttribute & UniqueAttribute;
		name: StringAttribute & RequiredAttribute;
		shows: RelationAttribute<
			"api::genre.genre",
			"manyToMany",
			"api::show.show"
		>;
		createdAt: DateTimeAttribute;
		updatedAt: DateTimeAttribute;
		publishedAt: DateTimeAttribute;
		createdBy: RelationAttribute<
			"api::genre.genre",
			"oneToOne",
			"admin::user"
		> &
			PrivateAttribute;
		updatedBy: RelationAttribute<
			"api::genre.genre",
			"oneToOne",
			"admin::user"
		> &
			PrivateAttribute;
	};
}

export interface ApiShowShow extends CollectionTypeSchema {
	info: {
		singularName: "show";
		pluralName: "shows";
		displayName: "Shows";
		description: "";
	};
	options: {
		draftAndPublish: true;
	};
	attributes: {
		key: StringAttribute & RequiredAttribute & UniqueAttribute;
		name: StringAttribute & RequiredAttribute;
		sync: BooleanAttribute & RequiredAttribute & DefaultTo<false>;
		releaseYear: IntegerAttribute;
		episodic: BooleanAttribute & DefaultTo<false>;
		poster: ComponentAttribute<"shows.image">;
		banner: ComponentAttribute<"shows.image">;
		description: TextAttribute;
		htmlDescription: RichTextAttribute;
		genres: RelationAttribute<
			"api::show.show",
			"manyToMany",
			"api::genre.genre"
		>;
		castAndCrew: ComponentAttribute<"shows.cast-and-crew", true>;
		accolade: ComponentAttribute<"shows.accolade", true>;
		socialLink: ComponentAttribute<"shows.social-link", true>;
		episodes: RelationAttribute<
			"api::show.show",
			"oneToMany",
			"api::episode.episode"
		>;
		createdAt: DateTimeAttribute;
		updatedAt: DateTimeAttribute;
		publishedAt: DateTimeAttribute;
		createdBy: RelationAttribute<"api::show.show", "oneToOne", "admin::user"> &
			PrivateAttribute;
		updatedBy: RelationAttribute<"api::show.show", "oneToOne", "admin::user"> &
			PrivateAttribute;
	};
}

export interface ShowsAccolade extends ComponentSchema {
	info: {
		displayName: "Accolade";
	};
	attributes: {
		quote: TextAttribute;
		person: StringAttribute;
	};
}

export interface ShowsCastAndCrew extends ComponentSchema {
	info: {
		displayName: "Cast and Crew";
		description: "";
	};
	attributes: {
		name: StringAttribute;
		role: StringAttribute;
	};
}

export interface ShowsImage extends ComponentSchema {
	info: {
		displayName: "Image";
	};
	attributes: {
		url: StringAttribute;
		blurhash: StringAttribute;
		width: IntegerAttribute;
		height: IntegerAttribute;
	};
}

export interface ShowsSocialLink extends ComponentSchema {
	info: {
		displayName: "Social Link";
		description: "";
	};
	attributes: {
		type: EnumerationAttribute<
			[
				"Facebook",
				"Twitter",
				"Instagram",
				"LinkedIn",
				"YouTube",
				"Vimeo",
				"Others",
			]
		>;
		url: StringAttribute;
	};
}

export interface WebsiteLink extends ComponentSchema {
	info: {
		displayName: "Link";
		description: "";
	};
	attributes: {
		url: StringAttribute & RequiredAttribute;
		label: StringAttribute & RequiredAttribute;
		target: EnumerationAttribute<["New page", "Same page"]> &
			RequiredAttribute &
			DefaultTo<"New page">;
	};
}

declare global {
	namespace Strapi {
		interface Schemas {
			"admin::permission": AdminPermission;
			"admin::user": AdminUser;
			"admin::role": AdminRole;
			"admin::api-token": AdminApiToken;
			"admin::api-token-permission": AdminApiTokenPermission;
			"admin::transfer-token": AdminTransferToken;
			"admin::transfer-token-permission": AdminTransferTokenPermission;
			"plugin::upload.file": PluginUploadFile;
			"plugin::upload.folder": PluginUploadFolder;
			"plugin::i18n.locale": PluginI18NLocale;
			"api::branding.branding": ApiBrandingBranding;
			"api::episode.episode": ApiEpisodeEpisode;
			"api::footer.footer": ApiFooterFooter;
			"api::genre.genre": ApiGenreGenre;
			"api::show.show": ApiShowShow;
			"shows.accolade": ShowsAccolade;
			"shows.cast-and-crew": ShowsCastAndCrew;
			"shows.image": ShowsImage;
			"shows.social-link": ShowsSocialLink;
			"website.link": WebsiteLink;
		}
	}
}
