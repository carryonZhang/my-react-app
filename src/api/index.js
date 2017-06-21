/**
 * Created by shaolong on 2017/6/14.
 */
require('es6-promise').polyfill();
require('isomorphic-fetch');

export const fetchNews = () => {
	return fetch('/dota2')
		.then((response) => {
			if (response.status >= 400) {
				throw new Error("Bad response from server");
			}
			console.log('response news', response);
			return response.json();
		})
		.then((news) => {
			return news;
		})
}

export const fetchNewsDetail = (id) => {
	return fetch(`/dota2/news_detail?news_id=${id}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
	})
		.then((response) => {
			if (response.status >= 400) {
				throw new Error("Bad response from server");
			}
			console.log('response detail', response);
			return response.json();
		})
		.then((detail) => {
			console.log('根据id接收到的detail', detail);
			return detail;
		})
}