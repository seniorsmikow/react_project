const ADD_POST = 'ADD-POST';
const UPDATE_TEXT = 'UPDATE_TEXT';

const postsReducer = (state, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                text: state.inputText,
                like: 0
            };
            state.posts.push(newPost);
            state.inputText = '';
            return state;
        case UPDATE_TEXT: 
            state.inputText = action.newText;
            return state;
        default:
            return state;
    }
        
};

export default postsReducer;