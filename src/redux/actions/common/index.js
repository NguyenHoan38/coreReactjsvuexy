export const setLoading = data => {
    console.log('setLoading', data)
    return async dispatch => {
        dispatch({
            type: 'SET_LOADING',
            data
        })
    }
}