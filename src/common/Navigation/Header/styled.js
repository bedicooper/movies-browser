import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { ReactComponent as WebsiteLogo } from "../../../assets/icon-video.svg"


export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    gap: 12px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        gap: 8px;
        justify-content: space-between;
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px){
        justify-content: center;
        flex-wrap: wrap;
    };
`

export const StyledLink = styled(Link)`
    text-decoration: none;
`

export const Logo = styled(WebsiteLogo)`
    width: 40px;
    height: 40px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        width: 17px;
        height: 17px;
    };
`

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: -1.5px;
    color: ${({ theme }) => theme.color.white};
    text-transform: capitalize;
    min-width: fit-content;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        font-size: 13px;
        line-height: 130%;
        letter-spacing: -0.5px;
    };

`

export const StyledList = styled.ul`
    margin: 23px 78px 23px 68px;
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 16px;
    color: ${({ theme }) => theme.color.white};
    padding: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        margin-left: 8px;
        margin-right: 8px;
        gap: 12px
    };

    @media (max-width: 767px){
        gap: 12px;
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px){
        margin: 0;
    };

`

export const StyledNavLink = styled(NavLink)`
    display: block;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    line-height: 46px;
    padding: 0px 24px;
    color: ${({ theme }) => theme.color.white};
    border: 1px solid transparent;
    border-radius: 24px;
    transition: 0.2s ease-in-out;

    &:hover {
        background: radial-gradient(ellipse farthest-side at center, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0) 100%);
    }

    &.active{
        border: 1px solid ${({ theme }) => theme.color.white};
        background: none;
        cursor: default;
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        font-size: 12px;
        line-height: 32px;
        padding: 0px 12px;
        
        &.active{
            border-radius: 29px;
        };
    };
`;