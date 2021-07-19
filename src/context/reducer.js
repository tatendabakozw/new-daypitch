export const initialState = {
    user: null,
    searchItem: 'initial load',
    location: ''
}

function reducer(state, action) {
    switch (action.type) {
        case 'SET_USER':
            localStorage.setItem('daypitchuser', JSON.stringify(action.user))
            return {
                ...state,
                user: action.user
            }
        case 'REMOVE_USER':
            localStorage.removeItem('daypitchuser')
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

        default:
            return state
    }
}

export default reducer