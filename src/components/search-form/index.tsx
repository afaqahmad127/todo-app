import React, { useEffect } from 'react';
import { MainAppContext } from '../../utils';
interface SearchFormProps {
	search: string;
	setSearch: (item: string) => void;
}

export const SearchForm: React.FC<SearchFormProps> = ({
	search,
	setSearch,
}) => {
	const { tasks, setTasks } = React.useContext(MainAppContext);
	const handleSearchTask = (event: React.ChangeEvent<HTMLInputElement>) =>
		setSearch(event.target.value);

	useEffect(() => {
		console.log('search', search);
		console.log('tasks', tasks);
		if (search) {
			const filtered = tasks.filter((i) => i.includes(search));
		} else {
			setTasks(tasks);
		}
	}, [search]);

	return (
		<div>
			<label>Search Task</label>
			<div className="input-container">
				<input
					type="search"
					value={search}
					placeholder="Search here.."
					onChange={handleSearchTask}
				/>
			</div>
		</div>
	);
};
