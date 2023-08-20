import React from 'react';
import { Link } from 'react-router-dom';
import { TaskView } from '../../components';
import { ArrowLeft } from '../../components/icons';

export const TaskDetail: React.FC = () => {
	return (
		<>
			<div className="landing-page-layout">
				<div className="input-container">
					<Link to={`/`}>{ArrowLeft}</Link>
					<h1 className="heading-1">Task View</h1>
				</div>
				<TaskView />
			</div>
		</>
	);
};
