export function fixBody() {
	const body = document.getElementsByTagName('body')[0];
	const html = document.getElementsByTagName('html')[0];
	body.setAttribute('class', 'no-scroll');
	html.setAttribute('class', 'no-scroll');
}

export function unFixBody() {
	const body = document.getElementsByTagName('body')[0];
	const html = document.getElementsByTagName('html')[0];
	body.setAttribute('class', '');
	html.setAttribute('class', '');
}
