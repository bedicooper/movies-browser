import { call, put, takeEvery, select } from 'redux-saga/effects'
import {
    pageNumberFromURL,
    setPeopleList,
    selectPageState,
    setError,
} from './peopleSlice'
import { getPopularPeople } from '../../../utils/API/getPopularPeople';

function* fetchPeopleListHandler() {
    try {
        const page = yield select(selectPageState)
        const rawPeopleList = yield call(getPopularPeople, page);
        yield put(setPeopleList(rawPeopleList));
    } catch (error) {
        console.error(error);
        yield put(setError({ message: error.message, status: "error" }));
    }
}

export function* peopleSaga() {
    yield takeEvery(pageNumberFromURL, fetchPeopleListHandler);
}