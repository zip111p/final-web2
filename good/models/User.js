// models/User.js
const bcrypt = require('bcrypt');

class User {
    constructor(db) {
        this.collection = db.collection('users');
    }

    async create(username, email, password, role = 'user') {
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Validate role
        if (!['user', 'admin'].includes(role)) {
            throw new Error('Invalid role. Must be "user" or "admin"');
        }
        
        const user = {
            username,
            email,
            password: hashedPassword,
            createdAt: new Date(),
            role: role // 'user' or 'admin'
        };
        
        const result = await this.collection.insertOne(user);
        return { id: result.insertedId, ...user, password: undefined };
    }

    async findByEmail(email) {
        return await this.collection.findOne({ email });
    }

    async findById(id) {
        return await this.collection.findOne({ _id: id });
    }

    async verifyPassword(user, password) {
        return await bcrypt.compare(password, user.password);
    }
}

module.exports = User;