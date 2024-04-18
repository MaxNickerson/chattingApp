const { db, admin } = require('../config/firebaseConfig'); // Import admin from your Firebase config if it exports admin

class Message {
    static collection = db.collection('messages');

    static async addMessage({ room, username, text }) {
        return this.collection.add({
            room,
            username,
            text,
            timestamp: admin.firestore.FieldValue.serverTimestamp() // Now admin should be defined
        });
    }

    static async getMessagesByRoom(room) {
        const snapshot = await this.collection.where('room', '==', room).orderBy('timestamp').get();
        return snapshot.docs.map(doc => doc.data());
    }
}

module.exports = Message;
