import { clientNavigation } from "@utils/clientNavigation";
import { AnchorHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface NavButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string;
	navStyle?: "hard" | "client";
}

/**
 * The NavButton component is a React component that renders a clickable button (anchor) with
 * different behaviors based on the navStyle prop.
 * @returns The `NavButton` component is returning an `<a>` element with the specified `className`,
 * `href`, `target`, and other props. The content of the `<a>` element is the `children` prop. The
 * specific styling and behavior of the `<a>` element depends on the value of the `navStyle` prop. If
 * `navStyle` is "hard" or undefined, the
 */
const NavButton = ({
	className,
	href,
	target,
	navStyle,
	children,
	...rest
}: NavButtonProps) => {
	if (navStyle === "client") {
		if (target !== undefined) {
			console.warn(
				"NavButton with navStyle='client' does not support target. Use navStyle='hard' instead."
			);
		}

		return (
			<a
				className={twMerge(
					"px-4 py-2 no-underline hover:no-underline",
					className
				)}
				href={href}
				onClick={(e) => {
					e.preventDefault();
					clientNavigation(href);
				}}
				{...rest}
			>
				{children}
			</a>
		);
	} else {
		return (
			<a
				className={twMerge(
					"px-4 py-2 no-underline hover:no-underline",
					className
				)}
				href={href}
				target={target}
				{...rest}
			>
				{children}
			</a>
		);
	}
};

export default NavButton;
