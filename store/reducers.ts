import { combineReducers } from "redux";

const initState = {
    posts: []
}

const postReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            console.log(action.payload)
            return { ...state, posts: action.payload,  }
        case 'ADD_POST':
            console.log(action.payload)
            return { ...state, posts: [ action.payload, ...state.posts ]  }
    }
       return state
}

export const rootReducer = combineReducers({
    postReducer,
})

