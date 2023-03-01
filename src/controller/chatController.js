const ChatModel = require("../model/chatModel");

//get all products

const CreatChat = async (req, res) => {
  const newChat = new ChatModel({
    members: [req.body.senderId, req.body.receiverId],
  });
console.log(newChat, '>>>>')
  try {
    const result = await newChat.save();
    res.status(200).json(result);
  } catch (error) {
    res.json({ message: error });
  }
};

const UserChat = async (req, res) => {
  try {
    const chat = await ChatModel.find({
        members: {$in: [req.params.userId]}
    });
    res.status(200).json(chat);
  } catch (error) {
    res.json({ message: error });
  }
};

const FindChat = async (req, res) => {
    try {
      const chat = await ChatModel.findOne({
          members: {$all: [req.params.firstId, req.params.secondId]}
      });
      res.status(200).json(chat);
    } catch (error) {
      res.json({ message: error });
    }
  };

module.exports = {
  CreatChat,
  UserChat,
  FindChat
};
