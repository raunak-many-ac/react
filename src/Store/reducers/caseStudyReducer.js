const initState = {
};

const caseStudyReducer = (state = initState, actions) => {

  if (actions.type == "SAVE_VIEWCASESTUDY_DATA") {

    return {
      ...state,
      feature: actions.data.feature,
      source: actions.data.source,
      title: actions.data.title,
      article: actions.data.article,
      url: actions.data.url
    }
  }

  //..set "state" to be an empty object
  if (actions.type == "DELETE_ALL") {
    return {

    }
  }
  return state;
}

export default caseStudyReducer;