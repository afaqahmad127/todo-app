import { Skeleton } from 'antd';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { ToDoService } from '../../service';
import { ITodoTasks } from '../../types';
import { MainAppContext } from '../../utils';
interface ITaskView {
	[key: string]: string | undefined;
}
export const TaskView: React.FC = () => {
	const { online } = React.useContext(MainAppContext);
	const { id } = useParams<ITaskView>();
	const { isLoading, isError, data, error } = useQuery<ITodoTasks>({
		queryKey: [`todos_${id!}`],
		queryFn: () => ToDoService.getById(id!),
		enabled: online,
	});

	return (
		<>
			<p className="task-name">Task detail:</p>
			<div
				style={{
					minHeight: '50%',
					minWidth: '25%',
					display: 'flex',
					flexDirection: 'column',
					justifyItems: 'center',
					alignContent: 'center',
					justifyContent: 'center',
					alignItems: 'flex-start',
				}}
			>
				<Skeleton
					loading={isLoading}
					active
				/>
				{!isLoading && online && (
					<>
						<div>
							<span style={{ fontWeight: 'bold' }}>Id: </span>
							<span>{data?.id}</span>
						</div>
						<div>
							<span style={{ fontWeight: 'bold' }}>Title: </span>
							<span>{data?.title}</span>
						</div>
						<div>
							<span style={{ fontWeight: 'bold' }}>UserId: </span>
							<span>{data?.userId}</span>
						</div>
						<div>
							<span style={{ fontWeight: 'bold' }}>Status: </span>
							<span>{data?.completed ? 'Completed!!' : 'Not completed!!'}</span>
						</div>
					</>
				)}
				{online || "You're currently offline!!"}
			</div>
		</>
	);
};
