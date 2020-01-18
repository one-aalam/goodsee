import React from 'react';

type HeaderProps = {
    title: string;
    link?: string;
    isActive?: boolean;
}

export const Header = ({ title , isActive = true }: HeaderProps) => (
    <div className="App-header">
        <h1 className="App-header__title">
            {title}
        </h1>
    </div>
)