import firebase from "../../firebase";


export const fetchFromFirebase = () => {
     return (dispatch, getState) => {
          //..make async call
          console.log("Hi from action.js...")
          fetchMyDashboardData(dispatch);         
     }
}

const fetchMyDashboardData = async (dispatch) => {
     console.log("apicheck()...");

     var db = firebase.firestore();
     var docRef = db.collection("mydashboard").doc("data");

     docRef.get().then(function (doc) {
          if (doc.exists) {
               console.log("Document data:", doc.data());
          } else {
               console.log("No mydashboard document!");
          }

          dispatch({
               type: "SAVE_DASHBOARD_DATA",
               data: doc.data()
          })
     }).catch(function (error) {
          console.log("Error getting mydashboard document:", error);
     });
}

export const deleteFunc = () => {
     return(dispatch, getState) =>{
          dispatch({
               type: "DELETE_ALL",
               
          })
     }
}