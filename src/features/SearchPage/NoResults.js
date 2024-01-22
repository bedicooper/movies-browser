import { Main } from "../../common/Main/Main";
import { Section, SectionTitle } from "../../common/Section/Section";
import { Wrapper } from "./styled";
import { ReactComponent as IconEmpty } from "../../assets/icon-empty.svg";

export const NoResult = ({ searchQuery }) => {

    return (
        <Main>
            <Section>
                <SectionTitle>{`Sorry, there are no results for "${searchQuery}"`}</SectionTitle>
                <Wrapper>
                    <IconEmpty />
                </Wrapper>
            </Section>
        </Main>
    );
};