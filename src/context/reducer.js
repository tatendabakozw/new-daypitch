export const initialState = {
    user: null,
    searchItem: 'initial load',
    location: '',
    token : ''
}

function reducer(state, action) {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'REMOVE_USER':
            return{
                ...state,
                user: null
            }
        case 'SET_LOCATION':
            return {
                ...state,
                location: action.location
            }
        case 'SET_SEARCH':
            // console.log(action.search)
            return {
                ...state,
                searchItem: action.search
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            }

        default:
            return state
    }
}

export default reducer