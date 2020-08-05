const ADD_MESSAGE = 'ADD_MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Igor' },
        { id: 2, name: 'Egor' },
        { id: 3, name: 'Nina' },
        { id: 4, name: 'Georgiy' },
        { id: 5, name: 'Ivan' },
    ],
    messages: [
        { text: "Wow!" },
        { text: "Great" },
        { text: "Sorry" },
        { text: "Ok" }
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGE: {
            let body = action.messageInput;
            return {
                ...state,
                messages: [...state.messages, {text: body} ]
            };
        }
        default: {
            return state;
        } 
    }
};

export const actionCreatorAddPost = (messageInput) => {
    return {
        type: ADD_MESSAGE,
        messageInput
    };
};

export default dialogsReducer;