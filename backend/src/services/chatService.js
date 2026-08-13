const {
    createChat,
    getUserChats,
    getMessages,
    saveMessage
} = require("../models/chatModel");

const createOrGetChat = async (user1Id, user2Id) => {

    return await createChat(user1Id, user2Id);

};

const fetchChats = async (userId) => {

    return await getUserChats(userId);

};

const fetchMessages = async (chatId) => {

    return await getMessages(chatId);

};

const sendMessage = async (chatId, senderId, message) => {

    return await saveMessage(chatId, senderId, message);

};

module.exports = {
    createOrGetChat,
    fetchChats,
    fetchMessages,
    sendMessage
};