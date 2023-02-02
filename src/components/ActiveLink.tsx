import { CSSProperties, FC } from "react";

import Link from "next/link"
import { useRouter } from "next/router";

import { UrlObject } from 'url';

declare type Url = string | UrlObject;

interface Props {
    href: Url;
    text: string;
}

const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline',
}

export const ActiveLink: FC<Props> = ({ href, text}) => {
    const { asPath } = useRouter();
 
    return (
        <Link href={href} style={asPath === href ? style : {}}>{text}</Link>
    )
}
