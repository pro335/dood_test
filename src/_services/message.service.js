import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { db } from "../firebase.config";

export const messageService = {
    getAllMessages,
    addMessage,
};

function getAllMessages() {
    return new Promise((resolve, reject) => {
        resolve();
    });
}

function addMessage(msg) {
    return new Promise((resolve, reject) => {
        db.collection("messages")
            .add(msg)
            .then(() => {
                resolve();
            })
            .catch((error) => {
                console.log(error);
                reject("Message create error!");
            });
    });
}

