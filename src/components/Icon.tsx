import type { FC, DetailedHTMLProps, HTMLAttributes } from "react";

type ReactSpanProps = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

export type IconProps = ReactSpanProps & {
    name: String
}

export const Icon: FC<IconProps> = ({name, className: _className, ...props}) => {
    const className = ['material-icons', _className].join(' ')

    return <span className={className} {...props}>{name}</span>
}