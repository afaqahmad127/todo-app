import { ITodoTasks } from '../../types';
import { MyAxios } from '../axios';

export const ToDoService = {
	getAll: () =>
		new Promise<ITodoTasks[]>((resolve, reject) => {
			let config = {
				method: 'get',
				maxBodyLength: Infinity,
				url: '/todos',
			};
			MyAxios.request(config)
				.then((response) => resolve(response.data))
				.catch((error) => reject(error));
		}),
	getById: (id: string) =>
		new Promise<ITodoTasks>((resolve, reject) => {
			let config = {
				method: 'get',
				maxBodyLength: Infinity,
				url: `/todos/${id}`,
			};
			MyAxios.request(config)
				.then((response) => resolve(response.data))
				.catch((error) => reject(error));
		}),
};
