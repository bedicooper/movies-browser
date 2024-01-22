import { Main } from "../../common/Main/Main";
import { Section, SectionTitle } from "../../common/Section/Section";
import { StyledLink } from "../../common/Tile/styled";
import { ListTileSmall } from "../../common/Tile";
import { SmallListWrapper } from "../../common/Tile/styled";

export const SearchedPeople = ({ searchQuery, searchResults, totalResults }) => {

    return (
        <Main>
            <Section>
                <SectionTitle>{`Search result for "${searchQuery}" (${totalResults})`}</SectionTitle>
                <SmallListWrapper>
                    {searchResults.map((person) => (
                        <li key={person.id}>
                            <StyledLink to={`/people/${person.id}`}>
                                <ListTileSmall
                                    posterPath={person.profile_path}
                                    title={person.name}
                                />
                            </StyledLink>
                        </li>
                    ))}
                </SmallListWrapper>
            </Section>
        </Main>
    );
};