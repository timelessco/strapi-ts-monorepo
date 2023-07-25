import { type ID } from "@strapi/database";
import { type Attribute } from "@strapi/strapi";
import { type EntityService } from "@strapi/strapi/lib/services/entity-service/index.js";
import { type UID } from "@strapi/strapi/lib/types/core/common/index.js";

export type UIDCollectionType = UID.CollectionType;

export type CollectionTypeAttributes<T extends UID.CollectionType> =
	Attribute.GetValues<T> & {
		id: ID;
	};

let strapiEntityServiceFindOne: EntityService["findOne"];
export type StrapiFindOneEntityService<
	T extends UIDCollectionType,
	K extends CollectionTypeAttributes<T> = CollectionTypeAttributes<T>,
> = typeof strapiEntityServiceFindOne<T, K>;

export type StrapiEntityServiceEntityId = ID;

export type StrapiEntityServiceParameters<
	T extends UIDCollectionType,
	K extends CollectionTypeAttributes<T> = CollectionTypeAttributes<T>,
> = Parameters<StrapiFindOneEntityService<T, K>>[2];
