
const state = {
    friends: []
}

const action = {
    type: "ADD_FRIEND",
    friend: {
        name: "Chrome Boi",
        hometown: "NYC",
        id: 1
    }
}

export function manageFriends(state, action){
    switch (action.type){
        case "ADD_FRIEND":
            return {friend: state.friend}
        default:
            return state
    }
}
