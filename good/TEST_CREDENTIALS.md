# Test Credentials for Movie Library Defense

## Admin Account (Full Permissions)
- **Email:** admin@movielibrary.com
- **Password:** admin123
- **Role:** Administrator
- **Permissions:** Can create, edit, delete any movie. Full user management.

## Regular User Accounts (View Only)

### User 1
- **Email:** john@example.com
- **Password:** password123
- **Role:** User
- **Permissions:** Can only view movies. Cannot add/edit/delete.

### User 2
- **Email:** jane@example.com
- **Password:** password456
- **Role:** User
- **Permissions:** Can only view movies. Cannot add/edit/delete.

---

## How to Generate These Credentials

These test credentials are automatically seeded into the MongoDB database when you run:

```bash
node seed.js
```

This command:
1. Clears existing user and movie collections
2. Creates 3 test users with the credentials above
3. Creates 23 sample movies
4. Displays all credentials in the console

---

## Where Credentials Are Stored

**File:** `seed.js` (Lines 21-34)

All passwords are **hashed with bcrypt** (10 salt rounds) in the database. Plain text passwords shown here are only for testing purposes.

---

## How to Use During Defense

1. **Start the server:**
   ```bash
   npm start
   ```

2. **Open browser:**
   ```
   http://localhost:3000
   ```

3. **Login as Admin:**
   - Email: admin@movielibrary.com
   - Password: admin123
   - Demonstrate full CRUD operations

4. **Logout and login as Regular User:**
   - Email: john@example.com
   - Password: password123
   - Show that regular users can only view, not modify

---

## Security Notes

- Passwords are hashed with **bcrypt** before storage
- Test credentials should be changed in production
- Use `.env` file for sensitive configuration
- No hardcoded secrets in source code
