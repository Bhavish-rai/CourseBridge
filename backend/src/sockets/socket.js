module.exports = (io) => {

    io.on("connection", (socket) => {

        console.log("User Connected:", socket.id);

        socket.on("join", (chatId) => {

            socket.join(chatId);

        });

        socket.on("sendMessage", (data) => {

            io.to(data.chatId).emit("receiveMessage", data);

        });

        socket.on("typing", (data) => {

            socket.to(data.chatId).emit("typing", data);

        });

        socket.on("stopTyping", (data) => {

            socket.to(data.chatId).emit("stopTyping", data);

        });

        // ============================
        // Video Call Signalling
        // ============================

        socket.on("callUser", (data) => {

            io.to(data.receiverSocketId).emit("incomingCall", {
                callerId: data.callerId,
                callerName: data.callerName,
                offer: data.offer
            });

        });

        socket.on("answerCall", (data) => {

            io.to(data.callerSocketId).emit("callAnswered", {
                answer: data.answer
            });

        });

        socket.on("iceCandidate", (data) => {

            io.to(data.targetSocketId).emit("iceCandidate", {
                candidate: data.candidate
            });

        });

        socket.on("endCall", (data) => {

            io.to(data.targetSocketId).emit("callEnded");

        });

        socket.on("disconnect", () => {

            console.log("User Disconnected:", socket.id);

        });

    });

};