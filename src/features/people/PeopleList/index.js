import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import {
  incrementPage,
  decrementPage,
  goToFirstPage,
  goToLastPage,
  pageNumberFromURL,
  selectPageState,
  selectPeopleList,
} from '../peopleSlice';
import { posterURL } from '../../../utils/API/APIURLS';
import { Main } from '../../../common/Main/Main';
import { Section, SectionTitle } from "../../../common/Section/Section";
import { SectionWrapper } from "./styled";
import { NoPersonIcon, SmallTile, SmallTileImage, SmallTileImageContainer, SmallTileTitle } from '../../../common/Tile/Tile';
import Pagination from '../../../common/Pagination';

function PeopleList() {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectPageState);
  const peopleList = useSelector(selectPeopleList);

  const history = useHistory();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('page');

  useEffect(() => {
    if (query < 1) {
      searchParams.set('page', 1);
    } else {
      dispatch(pageNumberFromURL(Math.floor(query)));
    }
  }, [query]);

  useEffect(() => {

    history.push(`${location.pathname}?page=${currentPage}`);
  }, [currentPage]);

  return (
    <Main>
      <Section>
        <SectionTitle>
          Popular People
        </SectionTitle>
        <SectionWrapper>
          {peopleList.map((person) => (
            <li key={person.id}>
              <SmallTile>
                <SmallTileImageContainer>
                  {person.profile_path
                    ?
                    <SmallTileImage
                      src={`${posterURL}${person.profile_path}`}
                    />
                    :
                    <NoPersonIcon />
                  }
                </SmallTileImageContainer>
                <SmallTileTitle>{person.name}</SmallTileTitle>
              </SmallTile>
            </li>
          ))}
        </SectionWrapper>
      </Section>
      <Pagination
        currentPage={currentPage}
        goToFirstPage={goToFirstPage}
        incrementPage={incrementPage}
        decrementPage={decrementPage}
        goToLastPage={goToLastPage}
      />
    </Main>
  )
};

export default PeopleList;