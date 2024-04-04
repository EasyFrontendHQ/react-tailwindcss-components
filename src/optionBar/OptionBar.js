import React, { useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";

const colorSchemes = [
	{ label: "Light", value: "light", style: { backgroundColor: "#fff" } },
	{ label: "Gray", value: "gray", style: { backgroundColor: "#d8e2ef" } },
	{
		label: "Dark Gray",
		value: "dark-gray",
		style: { backgroundColor: "#5e6e82" },
	},
	{ label: "Dark", value: "dark", style: { backgroundColor: "#000" } },
];

const primaryColorSchemes = [
	{
		label: "Primary",
		value: "primary",
		style: { backgroundColor: "rgb(0, 122, 255)" },
	},
	{
		label: "Orange",
		value: "orange",
		style: { backgroundColor: "rgb(245, 158, 11)" },
	},
	{
		label: "Red",
		value: "red",
		style: { backgroundColor: "rgb(178, 39, 39)" },
	},
];

const bootstrapHeadInfo = [
	//   { url: "../../assets/packages/bootstrap/bootstrap.min.css", type: "style" },
	{
		url: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
		type: "style",
	},
	//   { url: "../../assets/packages/bootstrap/bootstrap.bundle.min.js", type: "script" },
	{
		url: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js",
		type: "script",
	},
];
const headInfo = [
	// demo color scheme (REQUIRED)
	{
		url: "https://fonts.googleapis.com/css2?family=DM+Serif+Display&amp;display=swap",
		type: "style",
	},
	{
		url: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap",
		type: "style",
	},
	{ url: "../../assets/demo/style.css", type: "style" },

	{ url: "../../assets/packages/jquery-3.6.0.min.js", type: "script" },
	{
		url: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
		type: "style",
	},
	{ url: "../../assets/packages/fontawesome/all.min.css", type: "style" },
	// {url: '../../assets/packages/owl-carousel/owl.carousel.min.js', type: 'script'},
];

const OptionBar = ({}) => {
	document.body.classList.add("optionbar-enabled");

	const changeColorScheme = (color) => {
		document.body.classList.remove("light", "gray", "dark", "dark-gray");

		switch (color) {
			case "light":
				document.body.classList.add("light");
				window.localStorage.setItem("colorScheme", "light");
				break;
			case "gray":
				document.body.classList.add("gray");
				window.localStorage.setItem("colorScheme", "gray");
				break;
			case "dark":
				document.body.classList.add("dark");
				window.localStorage.setItem("colorScheme", "dark");
				break;
			case "dark-gray":
				document.body.classList.add("dark-gray");
				window.localStorage.setItem("colorScheme", "dark-gray");
				break;
			default:
				break;
		}
	};

	const changePrimaryColorScheme = (color) => {
		document.body.classList.remove("ezy-primary", "ezy-orange", "ezy-red");

		switch (color) {
			case "primary":
				document.body.classList.add("ezy-primary");
				window.localStorage.setItem("primaryColorScheme", "primary");
				break;
			case "orange":
				document.body.classList.add("ezy-orange");
				window.localStorage.setItem("primaryColorScheme", "orange");
				break;
			case "red":
				document.body.classList.add("ezy-red");
				window.localStorage.setItem("primaryColorScheme", "red");
				break;
			default:
				break;
		}
	};

	useEffect(() => {
		const primaryColorScheme =
			window.localStorage.getItem("primaryColorScheme");
		const colorScheme = window.localStorage.getItem("colorScheme");

		changePrimaryColorScheme(primaryColorScheme);
		changeColorScheme(colorScheme);
	}, []);

	return (
		<div className="demo-top-navbar">
			<div>
				<div className="ezy-color-scheme-group">
					{colorSchemes.map((color, i) => (
						<button
							title={color.label}
							style={color.style}
							onClick={() => changeColorScheme(color.value)}
							key={i}
						/>
					))}
				</div>
				<div className="ezy-primary-color-scheme-group">
					{primaryColorSchemes.map((color, i) => (
						<button
							title={color.label}
							style={color.style}
							onClick={() => changePrimaryColorScheme(color.value)}
							key={i}
						/>
					))}
				</div>
			</div>
			<div>
				<button
					title="Check Typo"
					onClick={() => {
						if (document.body.classList.contains("ezy-checktypo")) {
							document.body.classList.remove("ezy-checktypo");
						} else {
							document.body.classList.add("ezy-checktypo");
						}
					}}
				>
					Aa
				</button>
				{/*<Link to="/" className="back-button">*/}
				{/*	Back*/}
				{/*</Link>*/}
			</div>
		</div>
	);
};

export default OptionBar;
