const {
    startCall,
    endCall,
    getHistory
} = require("../models/videoModel");

const createCall = async (
    chatId,
    callerId,
    receiverId
) => {

    return await startCall(
        chatId,
        callerId,
        receiverId
    );

};

const finishCall = async (callId) => {

    return await endCall(callId);

};

const fetchHistory = async (userId) => {

    return await getHistory(userId);

};

module.exports = {
    createCall,
    finishCall,
    fetchHistory
};