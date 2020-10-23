const initState = {


};

const dashboardReducer = (state = initState, actions) => {
  
  if(actions.type == "SAVE_DASHBOARD_DATA"){
    
    return {
      ...state,
      carousal: actions.data.carousal,
      wideCards: actions.data.wideCards,
      cards: actions.data.cards
    }
  }

  //..set "state" to be an empty object
  if(actions.type == "DELETE_ALL"){
    return {
      
    }
  }
  return state;
}

export default dashboardReducer;