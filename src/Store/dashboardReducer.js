const initState = {


};



const dashboardReducer = (state = initState, actions) => {
  console.log(actions);
  if(actions.type == "SAVE_DASHBOARD_DATA"){
    console.log(actions.data);
    return {
      ...state,
      carousal: actions.data.carousal,
      wideCards: actions.data.wideCards,
      cards: actions.data.cards
    }
  }

  if(actions.type == "DELETE_ALL"){
    return {
      
    }
  }
  return state;
}

export default dashboardReducer;