export const articlesFail = (state = '', action) => {
    switch (action.type) {
        case ('GET_ARTICLES_FAIL'):
            console.log('in the fail reducer', action)
            return action.payload
        default:
            return state
    }
}
