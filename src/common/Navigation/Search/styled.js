import styled from "styled-components";
import { ReactComponent as searchIcon } from "../../../assets/icon-search.svg";

export const Wrapper = styled.label`
    width: 432px;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 33px;
    border: 1px solid ${({ theme }) => theme.color.gray};
    padding: 11px 23px;
    display: flex;
    gap: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        padding: 13px 15px;
        gap: 8px;
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px){
        margin-top: 16px;
    };
`;

export const Input = styled.input`
    width:100%;
    font-size: 16px;
    color: ${({ theme }) => theme.color.darkGray};
    border: none;
    padding: 0;

    &:focus{
        outline: none;
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        font-size: 13px;
    };
`;

export const Icon = styled(searchIcon)`
        width: 24px;
        height: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
        width: 16px;
        height: 16px;
    };
`;