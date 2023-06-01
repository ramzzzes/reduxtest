const counterReducer = (state = 0,action) => {
    switch (action.type){
        case "INCREMENT":
            return state + action.payload 
        case "DECREMENT":
            return state - action.payload
        case "ZERO":
            return 0
        default:
            return state
    }
  }

  export default counterReducer
