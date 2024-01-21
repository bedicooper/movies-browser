import { call, put, takeLatest, select, all } from "redux-saga/effects";
import {
    fetchDataSuccess,
    selectPersonId,
    fetchDataError,
    getDetailsForPerson,
    setPeopleCredits,
    setGenres,
} from "./peopleDetailsSlice";
import { 
    getPeopleDetails, 
    getPeopleCredits, 
} from "../../../utils/API/getPeopleDetails";
import { getGenreList } from "../../../utils/API/getGenreList";
import {
    processPersonData,
    processPersonCreditsData,
} from "../../../utils/API/processApiData";

function* fetchPersonDetailsHandler() {
    try {
        const id = yield select(selectPersonId);
        const [rawDetails, rawCredits, rawGenreList] = yield all([
            call(getPeopleDetails, id),
            call(getPeopleCredits, id),
            call(getGenreList),
        ]);  
        const [details, credits] = yield all([
            call(processPersonData, rawDetails),
            call(processPersonCreditsData, rawCredits, rawGenreList),
        ]);
        yield all([
            put(fetchDataSuccess(details)),
            put(setPeopleCredits(credits)),
            put(setGenres(rawGenreList)),
        ]);

    } catch (error) {
        console.error(error);
        yield put(fetchDataError(error.message));
    }
}

export function* watchFetchPersonDetails() {
    yield takeLatest(getDetailsForPerson.type, fetchPersonDetailsHandler);
}