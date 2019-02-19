const ADD_COMMENT = "DM/PRODUCT_PAGE/ADD_COMMENT";
const ADD_NEW_POST ="DM/PRODUCT_PAGE/ADD_NEW_POST";

let initialState = {
    comments: [
        {
            id: 1,
            text: "Я купил этот телефон, а он не работает"
        },
        {
            id: 2,
            text: "Отличный телефон, все четко работает"
        },
        {
            id: 3,
            text: "Все нормик"
        }
    ],
    newPostText: ""
};

const ProductPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            let newComment = {
                id: state.comments.length+1,
                text: state.newPostText
            };
            if (newComment.text !== "") {
                state.comments.push(newComment);
            }
            state.newPostText = "";
            return state;
        case ADD_NEW_POST:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
};

export const addNewPostActionCreator = (text) => {
    return {
        type: ADD_NEW_POST,
        newText: text
    }
};

export const addComentActionCreator = () => {
    return {
        type: ADD_COMMENT
    }
};

export default ProductPageReducer;