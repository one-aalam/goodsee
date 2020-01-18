import React from 'react';

type HeaderProps = {
    title: string;
    link?: string;
    isActive?: boolean;
}

export const Header = ({ title , isActive = true }: HeaderProps) => (
    <div className="Header">
        <h1 className="Header__title">
            {title}
        </h1>
    </div>
)