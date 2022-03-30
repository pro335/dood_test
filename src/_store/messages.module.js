import { messageService } from '../_services';
import { db } from "../firebase.config";

const state = {
    all: {
        items: []
    }
};

const actions = {
    getAllMessages({ commit }) {
        commit('getAllMessagesRequest');
        db.collection("messages").onSnapshot((snapshotChange) => {
            let messages = [];
            snapshotChange.forEach((doc) => {
                messages.push({
                    name: doc.data().name,
                    content: doc.data().content,
                });
            });
            commit('getAllMessagesSuccess', messages);
        });
    },

    addMessage({ commit }, newChat) {
        messageService.addMessage(newChat);
    },

    delete({ commit }, id) {
        commit('deleteRequest', id);

        userService.delete(id)
            .then(
                message => commit('deleteSuccess', id),
                error => commit('deleteFailure', { id, error: error.toString() })
            );
    }
};

const mutations = {
    getAllMessagesRequest(state) {
        state.all = { loading: true };
    },
    getAllMessagesSuccess(state, messages) {
        state.all = { items: messages };
    },
    getAllMessagesFailure(state, error) {
        state.all = { error };
    },
    deleteRequest(state, email) {
        // add 'deleting:true' property to message being deleted
        state.all.items = state.all.items.map(message =>
            message.email === email
                ? { ...message, deleting: true }
                : message
        )
    },
    deleteSuccess(state, id) {
        // remove deleted message from state
        state.all.items = state.all.items.filter(message => message.email !== id)
    },
    deleteFailure(state, { id, error }) {
        // remove 'deleting:true' property and add 'deleteError:[error]' property to message 
        state.all.items = state.items.map(message => {
            if (message.email === id) {
                // make copy of message without 'deleting:true' property
                const { deleting, ...messageCopy } = message;
                // return copy of message with 'deleteError:[error]' property
                return { ...messageCopy, deleteError: error };
            }

            return message;
        })
    },
    addMessage(state, newChat) {
        state.all.items = [
            ...state.all.items,
            {
                avatar: "",
                name: newChat.name,
                content: newChat.content,
            }
        ]
    },
};

export const messages = {
    namespaced: true,
    state,
    actions,
    mutations
};
