const userReducer = (state = 0,action) => {
    switch (action.type){
        case "INCREMENT":
            return state + 10
        case "DECREMENT":
            return state - 10
        default:
            return state
    }
  }

  export default userReducer
