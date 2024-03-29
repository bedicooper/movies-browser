import { all, call, put, takeEvery, select } from "redux-saga/effects";
import {
    // incrementPage,
    // decrementPage,
    // goToFirstPage,
    pageNumberFromURL,
    selectPageState,
    setMovieList,
    setGenres,
    setError,
} from "./movieListSlice";
import { getPopularMovies } from "../../../utils/API/getPopularMovies";
import { getGenreList } from "../../../utils/API/getGenreList";
import { processMovieListData } from "../../../utils/API/processApiData";
import { saveDataInSessionStorage } from "../../../utils/genresSessionStorage";

function* fetchMovieListHandler() {
    try {
        const page = yield select(selectPageState);
        const [rawMovieList, rawGenreList] = yield all([
            call(getPopularMovies, page),
            call(getGenreList),
        ]);
        const movies = yield call(processMovieListData, rawMovieList, rawGenreList);
        yield all([
            call(saveDataInSessionStorage, rawGenreList),
            put(setMovieList(movies)),
            put(setGenres(rawGenreList)),
        ]);
    }
    catch (error) {
        console.error(error);
        yield put(setError({ message: error.message, status: "error" }));
    }
};

export function* watchFetchMovieList() {
    yield takeEvery(pageNumberFromURL, fetchMovieListHandler);
};