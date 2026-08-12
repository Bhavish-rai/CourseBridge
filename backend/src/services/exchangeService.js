const ApiError = require("../utils/ApiError");

const {
    createExchangeRequest,
    getIncomingRequests,
    getOutgoingRequests,
    getExchangeById,
    updateExchangeStatus
} = require("../models/exchangeModel");

const sendExchangeRequest = async (data) => {

    return await createExchangeRequest(data);

};

const fetchIncomingRequests = async (userId) => {

    return await getIncomingRequests(userId);

};

const fetchOutgoingRequests = async (userId) => {

    return await getOutgoingRequests(userId);

};

const acceptExchangeRequest = async (id, userId) => {

    const exchange = await getExchangeById(id);

    if (!exchange)
        throw new ApiError(404, "Exchange request not found");

    if (exchange.receiver_id !== userId)
        throw new ApiError(403, "Unauthorized");

    return await updateExchangeStatus(id, "accepted");

};

const rejectExchangeRequest = async (id, userId) => {

    const exchange = await getExchangeById(id);

    if (!exchange)
        throw new ApiError(404, "Exchange request not found");

    if (exchange.receiver_id !== userId)
        throw new ApiError(403, "Unauthorized");

    return await updateExchangeStatus(id, "rejected");

};

const cancelExchangeRequest = async (id, userId) => {

    const exchange = await getExchangeById(id);

    if (!exchange)
        throw new ApiError(404, "Exchange request not found");

    if (exchange.sender_id !== userId)
        throw new ApiError(403, "Unauthorized");

    return await updateExchangeStatus(id, "cancelled");

};

module.exports = {
    sendExchangeRequest,
    fetchIncomingRequests,
    fetchOutgoingRequests,
    acceptExchangeRequest,
    rejectExchangeRequest,
    cancelExchangeRequest
};