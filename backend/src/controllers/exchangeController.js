const asyncHandler = require("../middleware/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");

const {
    sendExchangeRequest,
    fetchIncomingRequests,
    fetchOutgoingRequests,
    acceptExchangeRequest,
    rejectExchangeRequest,
    cancelExchangeRequest
} = require("../services/exchangeService");

const createExchange = asyncHandler(async (req, res) => {

    const exchange = await sendExchangeRequest({
        senderId: req.user.id,
        receiverId: req.body.receiverId,
        senderCourseId: req.body.senderCourseId,
        receiverCourseId: req.body.receiverCourseId,
        message: req.body.message
    });

    return res.status(201).json(
        new ApiResponse(
            201,
            exchange,
            "Exchange request sent successfully"
        )
    );

});

const getIncoming = asyncHandler(async (req, res) => {

    const requests = await fetchIncomingRequests(req.user.id);

    return res.status(200).json(
        new ApiResponse(
            200,
            requests,
            "Incoming requests fetched successfully"
        )
    );

});

const getOutgoing = asyncHandler(async (req, res) => {

    const requests = await fetchOutgoingRequests(req.user.id);

    return res.status(200).json(
        new ApiResponse(
            200,
            requests,
            "Outgoing requests fetched successfully"
        )
    );

});

const acceptRequest = asyncHandler(async (req, res) => {

    const exchange = await acceptExchangeRequest(
        req.params.id,
        req.user.id
    );

    return res.status(200).json(
        new ApiResponse(
            200,
            exchange,
            "Exchange request accepted"
        )
    );

});

const rejectRequest = asyncHandler(async (req, res) => {

    const exchange = await rejectExchangeRequest(
        req.params.id,
        req.user.id
    );

    return res.status(200).json(
        new ApiResponse(
            200,
            exchange,
            "Exchange request rejected"
        )
    );

});

const cancelRequest = asyncHandler(async (req, res) => {

    const exchange = await cancelExchangeRequest(
        req.params.id,
        req.user.id
    );

    return res.status(200).json(
        new ApiResponse(
            200,
            exchange,
            "Exchange request cancelled"
        )
    );

});

module.exports = {
    createExchange,
    getIncoming,
    getOutgoing,
    acceptRequest,
    rejectRequest,
    cancelRequest
};