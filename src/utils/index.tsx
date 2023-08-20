import React from 'react';
interface IMainAppContext {
	search: string;
	setSearch: (task: string) => void;
	online: boolean;
}

export const MainAppContext = React.createContext<IMainAppContext>({
	search: '',
	setSearch: () => {},
	online: false,
});
