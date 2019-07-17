export function callHasErrored(bool) {
    return {
        type: 'CALL_HAS_ERRORED',
        hasErrored: bool
    };
}
export function callIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}
export function callFetchDataSuccess(call) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        call
    };
}
