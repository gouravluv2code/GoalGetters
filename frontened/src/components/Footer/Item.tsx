import React from 'react'

type Link = {
    name: string;
    link: string;
};

type Props = {
    Links: Link[];
    title: string;
};

export const Item = ({ Links, title }: Props) => {
    return (
        <ul className="mx-auto max-w-md">
            <h1 className="mb-1 font-semibold text-center">{title}</h1>
            {
                Links.map((link) => {
                   return (
                    <li key={link.name}>
                        <a href={link.link} className="text-gray-400 hover:text-teal-400 duration-300 text-sm- cursor-pointer leading-16 text-left">{link.name}</a>
                    </li>
                   )
                })
            }
            
        </ul>
    )
}
