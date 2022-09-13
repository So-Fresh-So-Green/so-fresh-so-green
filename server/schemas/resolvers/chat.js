const { AuthenticationError, UserInputError } = require('apollo-server-express');
const Chat = require('../../models/Chat/Chat');
const Message = require('../../models/Chat/Message')

const messages = [{ _id: 1, content: 'test', sender: 'jack' }]


module.exports = {

    Query: {

        getMessages: () => messages,


        getChats: async (parent, { email }) => {
            try {
                const getUserChats = await Chat.find({ recipientId: { $all: [email] } })

                return getUserChats

            } catch (err) {
                console.log(err)
            }
        }

        // async messages() {
        //     try {
        //         const messages = await Message.findAll();
        //         return messages;
        //     } catch (err) {
        //         throw new Error(err)
        //     }
        // }
    },

    Mutation: {

        postMessageTest: async (parent, { sender, content }) => {
            const id = messages.length;
            messages.push({
                id,
                sender,
                content
            });
            return id;
        },
        // postMessage: async (parent, { content }, context) => {


        //     if (context.user) {
        //         if (body.trim() === '') {
        //             throw new Error('Post must include either a body')
        //         }
        //         const newMessage = new Message({
                    // sender: context.user.username,
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
                    recipientsId: args.recipientsId
                })
                console.log(newChat)

                return newChat;

            } catch (err) {
                console.log(err);
            }
        },

    }
}
