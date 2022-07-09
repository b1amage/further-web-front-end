import React, { useState, useEffect } from "react";
import NavButton from "./NavButton";
import navItems from "../../content/navItems";
import ReactDOM from "react-dom";

const NavBar = () => {
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
			} py-4 z-50 px-6 bg-white border rounded-t-[24px] border-gray fixed w-full bottom-0 flex justify-between items-center`}
		>
			{navItems.length > 0 &&
				navItems.map((item, index) => (
					<NavButton key={index} isActive={item.isActive}>
						<img src={item.logo} alt="svg icon" />
					</NavButton>
				))}
		</div>,
		document.querySelector("#root")
	);
};

export default NavBar;
