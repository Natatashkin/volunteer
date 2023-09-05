import classNames from "classnames";
import Link from "next/link";
import styles from "./linkButton.module.scss";

export interface ILinkButtonProps {
  variant: "outlined" | "filled" | "hero";
  link: string;
  title: string;
}

const LinkButton = ({ title, link, variant }: ILinkButtonProps) => {
  return (
    <Link
      href={link}
      className={classNames(styles.linkButton, {
        [styles.linkButton__outlined]: variant === "outlined",
        [styles.linkButton__filled]: variant === "filled",
        [styles.linkButton__hero]: variant === "hero",
      })}
    >
      {title}
    </Link>
  );
};

export default LinkButton;
