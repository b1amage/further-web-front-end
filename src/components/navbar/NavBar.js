import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import NavButton from "./NavButton";

import navItems from "../../content/navItems";

const NavBar = ({ page }) => {
	const [show, setShow] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	useEffect(() => {
		const controlNavbar = () => {
			if (typeof window !== "undefined") {
				if (window.scrollY > lastScrollY) {
					// if scroll down hide the navbar
					setShow(false);
				} else {
					// if scroll up show the navbar
					setShow(true);
				}

				// remember current page location to use in the next move
				setLastScrollY(window.scrollY);
			}
		};

		if (typeof window !== "undefined") {
			window.addEventListener("scroll", controlNavbar);

			// cleanup function
			return () => {
				window.removeEventListener("scroll", controlNavbar);
			};
		}
	}, [lastScrollY]);

	return ReactDOM.createPortal(
		<div
			className={`${
				show ? "block" : "hidden"
			} py-4 md:py-8 z-50 px-6 bg-white transition-all duration-300 dark:bg-dark-2 border dark:border-dark-3 rounded-t-[24px] border-gray fixed w-full bottom-0 flex justify-between items-center md:container md:left-1/2 md:-translate-x-1/2`}
		>
			{navItems.length > 0 &&
				navItems.map((item, index) => (
					<Link to={item.to} key={index}>
						<NavButton isActive={item.title === page}>
							<img
								src={
									item.title === page
										? item.logoActive
										: item.logo
								}
								alt="svg icon"
							/>
						</NavButton>
					</Link>
				))}
		</div>,
		document.querySelector("#root")
	);
};

export default NavBar;
