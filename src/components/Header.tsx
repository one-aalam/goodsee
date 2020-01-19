import React from 'react';
import styled from 'styled-components';
import { Link } from "@reach/router"

type HeaderProps = {
    title: string;
    link?: string;
    isActive?: boolean;
}

export const Header = ({ title , isActive = true }: HeaderProps) => (
    <StyledHeader>
        <h1 className="App-header__title">
            {title}
        </h1>
        <nav>
          {/* <Link to="/">Home</Link> |{" "} */}
        </nav>
    </StyledHeader>
)

const StyledHeader = styled.div`
    /* position: fixed; */
    width: 100%;
    min-height: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: #4a5568;
      /* background:
  radial-gradient(circle at 100% 50%, transparent 20%, #4a5568 21%,
  #4a5568 34%, transparent 35%, transparent),
  radial-gradient(circle at 0% 50%, transparent 20%, #4a5568 21%, #4a5568 34%, transparent 35%, transparent) 0 -50px;
background-color: #2d3748;
background-size: 75px 100px; */
`;