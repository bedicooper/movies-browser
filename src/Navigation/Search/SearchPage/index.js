import { useSelector } from "react-redux";
import { selectData, selectInputValue, selectPath, selectStatus, selectTotalResults } from "../searchSlice";
import { NoResults } from "../NoResults";
import Loading from "../../../common/Loading";
import Error from "../../../common/Error";
import { SearchedMovies } from "./SearchedMovies";
import { SearchedPeople } from "./SearchedPeople";

export const SearchPage = () => {
    const searchQuery = useSelector(selectInputValue);
    const searchResults = useSelector(selectData);
    const searchTotalResults = useSelector(selectTotalResults);
    const status = useSelector(selectStatus);
    const path = useSelector(selectPath);

    if (!searchResults.length && status !== "loading") {
        return (
            <NoResults
                searchQuery={searchQuery}
            />
        );
    };

    switch (status) {
        case "loading":
            return <Loading />;

        case "error":
            return <Error />;

        default:
            if (path === "movies") {
                return <SearchedMovies
                    searchQuery={searchQuery}
                    searchResults={searchResults}
                    totalResults={searchTotalResults}
                />
            };

            if (path === "people") {
                return <SearchedPeople
                    searchQuery={searchQuery}
                    searchResults={searchResults}
                    totalResults={searchTotalResults}
                />
            };
    };
};