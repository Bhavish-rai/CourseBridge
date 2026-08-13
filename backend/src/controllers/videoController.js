const asyncHandler = require("../middleware/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");

const {
    createCall,
    finishCall,
    fetchHistory
} = require("../services/videoService");

const startVideoCall = asyncHandler(async (req, res) => {

    const call = await createCall(
        req.body.chatId,
        req.user.id,
        req.body.receiverId
    );

    return res.status(201).json(
        new ApiResponse(
            201,
            call,
            "Video call started successfully"
        )
    );

});

const endVideoCall = asyncHandler(async (req, res) => {

    const call = await finishCall(req.params.callId);

    return res.status(200).json(
        new ApiResponse(
            200,
            call,
            "Video call ended successfully"
        )
    );

});

const getCallHistory = asyncHandler(async (req, res) => {

    const history = await fetchHistory(req.user.id);

    return res.status(200).json(
        new ApiResponse(
            200,
            history,
            "Call history fetched successfully"
        )
    );

});

module.exports = {
    startVideoCall,
    endVideoCall,
    getCallHistory
};