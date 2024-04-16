// models/Message.js
const { db } = require('../config/firebaseConfig');


class Message {
    static collection = db.collection('messages');

    static async addMessage({ room, username, text }) {
        return this.collection.add({
            room,
            username,
            text,
            timestamp: admin.firestore.FieldValue.serverTimestamp()
        });
    }

    static async getMessagesByRoom(room) {
        const snapshot = await this.collection.where('room', '==', room).orderBy('timestamp').get();
        return snapshot.docs.map(doc => doc.data());
    }
}

module.exports = Message;
