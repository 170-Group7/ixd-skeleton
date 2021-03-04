//THIS FILE HAS NOT BEEN TESTED!
import {auth, db} from './firebase-init.js';

const DB_URL = 'https://team7-10f0b-default-rtdb.firebaseio.com/';
const USERS = 'users/';
const CONVERSATIONS = 'conversations/';
const MESSAGES = 'messages/';
const EMAIL = 'email/';
const FRIENDS = 'friends/';

const getUsers = async () => {
    let users;
    await db.ref(USERS).once('value')
        .then((snapshot) => {
            users = snapshot.val();
        })
        .catch((e) => alert(e));
    return users;
}

//Returns the current users conversations
const getConversations = async () => {
    let conversations;
    let currUser = auth.currentUser;
    let userUid = currUser.uid;
    await db.ref(`${USERS}${userUid}/${CONVERSATIONS}`).once('value')
        .then((snapshot) => {
            conversations = snapshot.val();
        })
        .catch((e) => alert(e));
    return conversations;
}

//Returns the current users messages from specified conversation
const getMessages = async (conversationId) => {
    let currUser = auth.currentUser;
    let userUid = currUser.uid;
    const conversations = await getConversations();

    //check conversationId
    return conversations[conversationId].messages;
}

//Returns the current users friends
const getFriends = async () => {
    let friends;
    let currUser = auth.currentUser;
    let userUid = currUser.uid;
    await db.ref(`${USERS}${userUid}/${FRIENDS}`).once('value')
        .then((snapshot) => {
            friends = snapshot.val();
        }) 
        .catch((e) => alert(e));
    return friends;
}

export {DB_URL,
        USERS,
        CONVERSATIONS,
        getUsers,
        getConversations,
        getMessages,
        getFriends};