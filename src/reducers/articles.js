export const articles = (state = { articles: 'hello' }, action) => {
    console.log('in the reducer', action)

    switch (action.type) {
        case 'GET_ARTICLES':
            return action.payload;
        default:
            return state;
    }

}

