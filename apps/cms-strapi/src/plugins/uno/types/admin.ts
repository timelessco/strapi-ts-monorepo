/* eslint-disable @typescript-eslint/no-explicit-any */
type StrapiAdminBootstrapApp = {
	injectContentManagerComponent: (
		containerName: string,
		blockName: string,
		component: {
			Component: React.ComponentType;
			name: string;
		},
	) => void;
};

type InitializerProps = {
	setPlugin: (id: string) => void;
};

export type InitializerType = (props: InitializerProps) => null;

type StrapiAdminRegisterApp = {
	addMenuLink?: (menuLink: {
		Component: () => Promise<React.ComponentType>;
		icon: React.ComponentType;
		intlLabel: {
			defaultMessage: string;
			id: string;
		};
		to: string;
	}) => void;
	registerPlugin: (plugin: {
		id: string;
		initializer: InitializerType;
		isReady: boolean;
		name: string;
	}) => void;
};

type StrapiAdminRegisterTradApp = {
	locales: any[];
};

type StrapiAdminRegisterTradAppReturnType = Array<{ data: any; locale: any }>;

export type StrapiAdmin = {
	bootstrap: (app: StrapiAdminBootstrapApp) => void;
	register: (app: StrapiAdminRegisterApp) => void;
	registerTrads: (
		app: StrapiAdminRegisterTradApp,
	) => Promise<StrapiAdminRegisterTradAppReturnType>;
};
