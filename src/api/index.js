/**
 * Created by shaolong on 2017/6/14.
 */
require('es6-promise').polyfill();
require('isomorphic-fetch');

export const fetchNews = () => {
	return fetch('/mock')
		.then((response) => {
			if (response.status >= 400) {
				throw new Error("Bad response from server");
			}
			console.log('json', response);
			return response.json();
		})
		.then((news) => {
			return news.data && JSON.parse(news.data);
		})
}