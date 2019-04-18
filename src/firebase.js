import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA_6rixF8UWvKdgTWbH0xLiVkeKcusO8Kg",
    authDomain: "nba-full-c6d50.firebaseapp.com",
    databaseURL: "https://nba-full-c6d50.firebaseio.com",
    projectId: "nba-full-c6d50",
    storageBucket: "nba-full-c6d50.appspot.com",
    messagingSenderId: "2780491334"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref('articles');
const firebaseTeams = firebaseDB.ref('teams');
const firebaseVideos = firebaseDB.ref('videos');

const firebaseLooper = (snapshot) =>  {
    const data = [];
    snapshot.forEach((childSnapshot)=>{
        data.push({
            ...childSnapshot.val(),
            id:childSnapshot.key
        })
    });
    return data;
}

export {
    firebase,
    firebaseDB,
    firebaseArticles,
    firebaseVideos,
    firebaseTeams,
    firebaseLooper
}