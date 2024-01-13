import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
    selectStatus,
    selectDetails,
    getDetailsForPerson,
    selectPersonCast,
    selectPersonCrew,
} from "./peopleDetailsSlice";
import { DetailsTile, ListTileLarge } from "../../../common/Tile/index";
import { Section, SectionTitle } from '../../../common/Section/Section';
import { SectionWrapper } from "../../movies/MovieDetails/styled";
import { getGenreList } from "../../movies/MovieList/getGenreList";
import { LargeListWrapper } from "../../../common/Tile/styled";
import { Main } from "../../../common/Main/Main";

const PersonDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getDetailsForPerson({ personId: id }));
    }, [id, dispatch]);

    const details = useSelector(selectDetails);
    const status = useSelector(selectStatus);
    const actorCast = useSelector(selectPersonCast);
    const actorCrew = useSelector(selectPersonCrew);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const fetchGenres = async () => {
            const genresData = await getGenreList();
            setGenres(genresData.genres);
        };
        fetchGenres();
    }, []);

    const nameGenres = (genreIds) => {
        if (!genres || genres.length === 0) {
            return [];
        }

        return genreIds.map((id) => {
            const genre = genres.find((genre) => genre.id === id);
            return genre ? genre.name : '';
        });
    };

    const getReleaseYear = (releaseDate) => {
        const date = new Date(releaseDate);
        return date.getFullYear();
    };

    const formatVote = (vote) => vote.toLocaleString(
        'pl-PL',
        {
            maximumFractionDigits: 1,
        }
    );

    return (
        status === "loading" ? <div>Loading...</div>
            : status === "error" ? <div>Error!</div>
                : details ? (
                    <Main>
                        <DetailsTile
                            posterPath={details.profile_path}
                            title={details.name}
                            description={details.biography}
                            firstData={details.birthday}
                            secondData={details.place_of_birth}
                        />

                        <Section>
                            <SectionTitle>Movies - cast ({actorCast.length})</SectionTitle>
                            <SectionWrapper>
                                <LargeListWrapper>
                                    {actorCast.map((cast) => (
                                        <li key={cast.credit_id}>
                                            <ListTileLarge
                                                posterPath={cast.backdrop_path}
                                                title={cast.title}
                                                subtitle={getReleaseYear(cast.release_date)}
                                                tags={nameGenres(cast.genre_ids)}
                                                voteCount={cast.vote_count}
                                                ratingValue={formatVote(cast.vote_average)}
                                            />
                                        </li>
                                    ))}
                                </LargeListWrapper>
                            </SectionWrapper>
                        </Section>

                        <Section>
                            <SectionTitle>Movies - crew ({actorCrew.length})</SectionTitle>
                            <SectionWrapper>
                                <LargeListWrapper>
                                    {actorCrew.map((crew) => (
                                        <li key={crew.credit_id}>
                                            <ListTileLarge
                                                posterPath={crew.backdrop_path}
                                                title={crew.title}
                                                subtitle={getReleaseYear(crew.release_date)}
                                                tags={nameGenres(crew.genre_ids)}
                                                voteCount={crew.vote_count}
                                                ratingValue={formatVote(crew.vote_average)}
                                            />
                                        </li>
                                    ))}
                                </LargeListWrapper>
                            </SectionWrapper>
                        </Section>
                    </Main>
                ) : (
                    <div>No details available</div>
                )
    );
};

export default PersonDetails;