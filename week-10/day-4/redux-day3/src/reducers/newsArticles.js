import { FILL_INFO } from "../action-types/newsarticle-types";
const initialState = []

const newsArticles = (state=initialState, action) => {
    switch (action.type) {
        case FILL_INFO:
            return [{name: "news"}]
        default:
            return state;
    }
}
export default newsArticles;