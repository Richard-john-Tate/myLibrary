import { elements } from "./makeElement";

const App = (function () {
	const { div, h1 } = elements;
	document.body.appendChild(
		div({ className: `header` }, h1({ className: `heading` }, `Hello, World`)),
	);
})();
