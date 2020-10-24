import firebase from "../../firebase";

export const fetchFromFirebase = (docName) => {
     return (dispatch, getState) => {
          //..make async call
          // console.log("Hi from action.js...")
          
          fetchMyDashboardData(dispatch, docName);         
     }
}

const fetchMyDashboardData = async (dispatch, docName) => {

     var db = firebase.firestore();
     var docRef = db.collection("Case Studies").doc(docName);

     docRef.get().then(function (doc) {
          // if (doc.exists) {
          //      console.log("Document data:", doc.data());
          // } else {
          //      console.log("No mydashboard document!");
          // }

          dispatch({
               type: "SAVE_VIEWCASESTUDY_DATA",
               data: doc.data()
          })
     }).catch(function (error) {
          console.log("Error getting caseStudy document:", error);
     });
}

export const deleteFunc = () => {
     return(dispatch, getState) =>{
          dispatch({
               type: "DELETE_ALL",
               
          })
     }
}