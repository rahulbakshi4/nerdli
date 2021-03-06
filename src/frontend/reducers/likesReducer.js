import { LIKES_SUCCESS, LIKES_REQUEST, ADD_TO_LIKES, DELETE_FROM_LIKES } from "../constants/likes-constants";

const likesReducer = (state, action) => {
    switch (action.type) {
        case LIKES_REQUEST:
            return { ...state, loading: action.payload.status }
        case LIKES_SUCCESS:
            if (action.payload.likes) {
                return { ...state, likes: [...action.payload] }
            }
        case ADD_TO_LIKES:
            return { ...state, likes: [...action.payload] }
        case DELETE_FROM_LIKES:
            return { ...state, likes: [...action.payload] }
    }
}
export { likesReducer }
