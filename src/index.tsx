import { SmileOutlined } from '@ant-design/icons';
import { notification } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';
import './index.css';
import { MainAppContext } from './utils';
// Create a client
const queryClient = new QueryClient();
const MyMainApp = () => {
	const [api, contextHolder] = notification.useNotification();
	const [search, setSearch] = React.useState<string>('');
	const [online, setOnline] = React.useState<boolean>(false);
	const openNotification = (status: boolean) => {
		setOnline(status);
		api.open({
			message: status ? 'Online' : 'Offline',
			description: `You are currently ${status ? 'online' : 'offline'}!!`,
			icon: <SmileOutlined style={{ color: status ? 'green' : '#108ee9' }} />,
		});
	};
	React.useEffect(() => {
		window.addEventListener('load', () => {
			openNotification(navigator.onLine);
			window.addEventListener('online', () => openNotification(true));
			window.addEventListener('offline', () => openNotification(false));
		});
	}, []);
	return (
		<QueryClientProvider client={queryClient}>
			<MainAppContext.Provider
				value={{
					search,
					setSearch,
					online,
				}}
			>
				{contextHolder}
				<App />
			</MainAppContext.Provider>
		</QueryClientProvider>
	);
};

ReactDOM.render(
	<React.StrictMode>
		<MyMainApp />
	</React.StrictMode>,
	document.getElementById('root')
);
