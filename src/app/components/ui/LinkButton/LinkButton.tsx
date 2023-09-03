import React from 'react'
import Link from 'next/link';
import styles from "./linkButton.module.scss";
import classNames from 'classnames';

export interface ILinkButtonProps {
	variant: "outlined" | "filled";
	link: string;
	title: string;
}

const LinkButton = ({ title, link, variant }: ILinkButtonProps) => {

	console.log(variant);
	
	return (
		<Link href={link} className={classNames(styles.linkButton, {
			[styles.linkButton__outlined]: variant === "outlined",
			[styles.linkButton__filled]: variant === "filled",
			}
		)}>{title}</Link>
	)
}

export default LinkButton;