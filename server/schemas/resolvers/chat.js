const { AuthenticationError, UserInputError } = require('apollo-server-express');
const Chat = require('../../models/Chat/Chat');
const Message = require('../../models/Chat/Message')



module.exports = {

    Query: {

        async getMessages() {
            try {
                const messages = await Message.find().sort({ createdAt: -1 }).populate('sender');
                return messages;
            } catch (err) {
                throw new Error(err)
            }
        },


        async getChats() {
            try {
                const chats = await Chat.find()
                    .populate('recipientsId')
                    .populate('messages');
                return chats;
            } catch (err) {
                throw new Error(err)
            }
        }

    },



    Mutation: {

        // postMessageTest: async (parent, { sender, content }) => {
        //     const id = messages.length;
        //     messages.push({
        //         id,
        //         sender,
        //         content
        //     });
        //     return id;
        // },
        // postMessage: async (parent, { content }, context) => {


        //     if (context.user) {
        //         if (body.trim() === '') {
        //             throw new Error('Post must include either a body')
        //         }
        //         const newMessage = new Message({
        //             // sender: context.user.username,
        //             content,
        //         });

        //         const message = await newMessage.save();
        //     }
        // },

        postMessage: async (parent, args) => {
            try {
                const updatedChat = await Chat.findOneAndUpdate(
                    { recipientsId: { $all: args.recipientsId } },
                    {
                        $push: {
                            messages:
                            {
                                sender: args.sender,
                                content: args.content
                            }
                        }
                    },
                    {
                        new: true
                    })
                console.log(updatedChat)
                console.log(updatedChat.messages[updatedChat.messages.length - 1])

                return updatedChat;

            } catch (err) {
                console.log(err)
            }
        },

        addChat: async (parent, args) => {
            try {
                const newChat = await Chat.create({
                    messages: [],
                    recipientsId: ''
                })
                console.log(newChat)

                return newChat;

            } catch (err) {
                console.log(err);
            }
        },

    }
}
