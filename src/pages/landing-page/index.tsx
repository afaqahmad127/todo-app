import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { SearchForm } from '../../components';
import { ToDoService } from '../../service';
import { ITodoTasks } from '../../types';
import { MainAppContext } from '../../utils';

export const LandingPage: React.FC = () => {
	const columns: ColumnsType<ITodoTasks> = [
		{
			title: 'Title',
			dataIndex: 'title',
			key: 'title',
			width: '80%',
			render: (text, data: ITodoTasks) => (
				<Link to={`/tasks/${data.id}`}>{text}</Link>
			),
			sorter: (a, b) => a.title.localeCompare(b.title),
		},
		{
			title: 'Complete',
			dataIndex: 'complete',
			key: 'complete',
			render: (_, data: ITodoTasks) => (
				<Link to={`/tasks/${data.completed}`}>
					{data.completed ? '✅' : '❌'}
				</Link>
			),
		},
	];
	const { search, setSearch, online } = React.useContext(MainAppContext);
	const { isLoading, isError, data, error } = useQuery<ITodoTasks[]>({
		queryKey: ['todos'],
		queryFn: ToDoService.getAll,
		enabled: online,
	});

	let dataSource = data?.filter((i) => i.title.includes(search.toLowerCase()));

	return (
		<div className="landing-page-layout">
			<h1 className="heading-1">Landing Page</h1>
			<div className="add-task-form">
				<SearchForm
					search={search}
					setSearch={setSearch}
				/>
			</div>
			<div style={{ minWidth: '40%' }}>
				{online ? (
					<Table
						dataSource={dataSource}
						columns={columns}
						loading={isLoading}
					/>
				) : (
					"You're currently offline!!"
				)}
			</div>
		</div>
	);
};
