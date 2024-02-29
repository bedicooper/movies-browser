import { toMovieList, toPeopleList } from "../../../app/routes";
import { StyledHeader, Logo, Title, StyledList, StyledNavLink, StyledLink } from "./styled";
export const Header = () => (
    <StyledHeader>
        <StyledLink to="/">
            <StyledList>
                <Logo />
                <Title>Movies Browser</Title>
            </StyledList>

        </StyledLink>
        <nav>
            <StyledList>
                <li><StyledNavLink to={toMovieList()}>Movies</StyledNavLink></li>
                <li><StyledNavLink to={toPeopleList()}>People</StyledNavLink></li>
            </StyledList>
        </nav>
    </StyledHeader >
);