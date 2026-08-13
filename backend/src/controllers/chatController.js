const asyncHandler = require("../middleware/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");

const {
    createOrGetChat,
    fetchChats,
    fetchMessages,
    sendMessage
} = require("../services/chatService");

const createChat = asyncHandler(async (req, res) => {

    const chat = await createOrGetChat(
        req.user.id,
        req.body.userId
    );

    return res.status(201).json(
        new ApiResponse(
            201,
            chat,
            "Chat created successfully"
        )
    );

});

const getChats = asyncHandler(async (req, res) => {

    const chats = await fetchChats(req.user.id);

    return res.status(200).json(
        new ApiResponse(
            200,
            chats,
            "Chats fetched successfully"
        )
    );

});

const getChatMessages = asyncHandler(async (req, res) => {

    const messages = await fetchMessages(
        req.params.chatId
    );

    return res.status(200).json(
        new ApiResponse(
            200,
            messages,
            "Messages fetched successfully"
        )
    );

});

const createMessage = asyncHandler(async (req, res) => {

    const message = await sendMessage(
        req.params.chatId,
        req.user.id,
        req.body.message
    );

    return res.status(201).json(
        new ApiResponse(
            201,
            message,
            "Message sent successfully"
        )
    );

});

module.exports = {
    createChat,
    getChats,
    getChatMessages,
    createMessage
};