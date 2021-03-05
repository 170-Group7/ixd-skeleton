//THIS FILE HAS NOT BEEN TESTED!
import {auth, db} from './firebase-init.js';

const DB_URL = 'https://team7-10f0b-default-rtdb.firebaseio.com/';
const USERS = 'users/';
const CONVERSATIONS = 'conversations/';
const MESSAGES = 'messages/';
const EMAIL = 'email/';
const FRIENDS = 'friends/';
const UIDS = 'uids/';
const EMAILS = 'emails/';

//Returns all the user objects
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

//Adds user with email bEmail as friend of user (currentUser) with userEmail vice versa.
// Alert is shown if friend is not found. 
const friend = async (userEmail, bEmail) => {
    let userUid, bUid;
    let userFriends, bFriends;
    let userNumFriends, bNumFriends;

    userUid = await getUid(userEmail);
    bUid = await getUid(bEmail);

    if(!bUid) {
        alert('Friend not found. Try Again');
        return;
    }

    await db.ref(`${USERS}${userUid}/${FRIENDS}`).once('value')
        .then((snapshot) => {
            userFriends = snapshot.val();
        })
        .catch((e) => {
            alert(e);
            return;
        });
    
    await db.ref(`${USERS}${bUid}/${FRIENDS}`).once('value')
        .then((snapshot) => {
            bFriends = snapshot.val();
        })
        .catch((e) => {
            alert(e);
            return;
        });
    
    userNumFriends = userFriends.length;
    bNumFriends = bFriends.length;

    let alreadyFriends = false;
    userFriends.forEach((friend) => {
        if(bUid == friend) {
            alreadyFriends = true;
        }
    });

    if(!alreadyFriends){
        await db.ref(`${USERS}${userUid}/${FRIENDS}${userNumFriends}`).set(bUid)
            .catch((e) => alert(e));
        
        await db.ref(`${USERS}${bUid}/${FRIENDS}${bNumFriends}`).set(userUid)
            .catch((e) => alert(e));
        alert('Added friend!'); 
        location.reload();
    }
    else {
        alert('You\'re already friends!');
    }
}

const getEmail = async (uid) => {
    //TODO
}

//Returns the uid of the user with the given email
const getUid = async (email) => {
    let uid;
    let emailEncoded = encodeEmail(email); 
    await db.ref(`${UIDS}${emailEncoded}`).once('value')
        .then((snapshot) => {
            uid = snapshot.val();
        })
        .catch(() => {
            uid = null
        });
    return uid;
}

//Encodes email to a database key friendly string
const encodeEmail = (email) => {
    return encodeURIComponent(email).replace('.', 'dot');
}

export {DB_URL,
        USERS,
        CONVERSATIONS,
        getUsers,
        getConversations,
        getMessages,
        getFriends,
        friend,
        getEmail,
        getUid};