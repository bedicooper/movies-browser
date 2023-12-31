import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { 
  setMovieId, 
  selectLoading, 
  selectMovieDetails, 
  selectMovieCast, 
  selectMovieCrew 
} from '../movieSlice';
import { posterURL } from '../../../utils/API/APIURLS';
import { Main } from '../../../common/Main/Main';
import { SpinnerIcon, Container } from '../../../common/Loading/Loading';
import Rating from '../../../common/Rating/Rating';
import { Section, SectionTitle } from '../../../common/Section/Section';
import {
  Description,
  NoPersonIcon,
  SmallTile,
  SmallTileImage,
  SmallTileImageContainer,
  SmallTileSubTitle,
  SmallTileTitle,
  Tile,
  TileContent,
  TileData,
  TileDataContent,
  TileDataTitle,
  TileImage,
  TileSubTitle,
  TileTag,
  TileTags,
  TileTitle,
} from '../../../common/Tile/Tile';
import {
  Header,
  Backdrop,
  Vignette,
  TitleContainer,
  TitlePrimary,
  SectionWrapper,
} from './styled';

function MovieDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMovieId(id))
  }, []);

  const loading = useSelector(selectLoading);
  const movieDetails = useSelector(selectMovieDetails);
  const movieCast = useSelector(selectMovieCast);
  const movieCrew = useSelector(selectMovieCrew);

  return loading ? (
    <>
      <Container><SpinnerIcon /></Container>
    </>
  ) : (
    <>
      <Header>
        {movieDetails.backdropPath &&
          <Backdrop $background={movieDetails.backdropURL}>
            <Vignette />
            <TitleContainer>
              <TitlePrimary>{movieDetails.title}</TitlePrimary>
              <Rating
                voteCount={movieDetails.votes}
                ratingValue={movieDetails.rating}
                isOnBackdrop={true}
                isOnMainTile={false}
              />
            </TitleContainer>
          </Backdrop>
        }
      </Header>
      <Main>
        <Tile>
          <TileImage src={movieDetails.posterURL} />
          <TileContent>
            <TileTitle>{movieDetails.title}</TileTitle>
            <TileSubTitle>{movieDetails.releaseYear}</TileSubTitle>
            <TileData>
              <TileDataContent>
                <TileDataTitle>Production:</TileDataTitle>
                {movieDetails.production}
              </TileDataContent>
              <TileDataContent>
                <TileDataTitle>Release date:</TileDataTitle>
                {movieDetails.releaseDate}
              </TileDataContent>
            </TileData>
            <TileTags>
              {movieDetails.genres.map(({ name }) => (
                <TileTag>{name}</TileTag>
              ))}
            </TileTags>
            <Rating
              voteCount={movieDetails.votes}
              ratingValue={movieDetails.rating}
              isOnBackdrop={false}
              isOnMainTile={true}
            />            
          </TileContent>
          <Description>{movieDetails.description}</Description>
        </Tile>
        <Section>
          <SectionTitle>Cast</SectionTitle>
          <SectionWrapper>
            {movieCast.slice(4, 16).map((actor) => (
              <li key={actor.credit_id}>
                <SmallTile>
                  <SmallTileImageContainer>
                    {actor.profile_path
                      ?
                      <SmallTileImage
                        src={`${posterURL}${actor.profile_path}`}
                      />
                      :
                      <NoPersonIcon />
                    }
                  </SmallTileImageContainer>
                  <SmallTileTitle>{actor.name}</SmallTileTitle>
                  <SmallTileSubTitle>{actor.character}</SmallTileSubTitle>
                </SmallTile>
              </li>
            ))}
          </SectionWrapper>
        </Section>
        <Section>
          <SectionTitle>Crew</SectionTitle>
          <SectionWrapper>
            {movieCrew.slice(0, 6).map((crew) => (
              <li key={crew.credit_id}>
                <SmallTile>
                  <SmallTileImageContainer>
                    {crew.profile_path
                      ?
                      <SmallTileImage
                        src={`${posterURL}${crew.profile_path}`}
                      />
                      :
                      <NoPersonIcon />
                    }
                  </SmallTileImageContainer>
                  <SmallTileTitle>{crew.name}</SmallTileTitle>
                  <SmallTileSubTitle>{crew.job}</SmallTileSubTitle>
                </SmallTile>
              </li>
            ))}
          </SectionWrapper>
        </Section>
      </Main>
    </>
  )
};

export default MovieDetails;
