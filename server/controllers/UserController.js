const db = require("../db/connection");

const UserController = {
  register: (req, res) => {
    const { username,email,password } = req.body;

    // Check if the email already exists in the 'users' table
    db.query(
      'SELECT * FROM users WHERE email = ?',
      [email],
      (error, results) => {
        if (error) {
          console.error('Error checking email: ', error);
          res.status(500).json({ message: 'Internal server error' });
        } else {
          if (results.length > 0) {
            // Email already exists, return an error response
            res.status(409).json({ message: 'Email already exists' });
          } else {
            // Insert the new user into the 'users' table
            db.query(
              'INSERT INTO users (username, email,password) VALUES (?, ?, ?)',
              [username,email,password],
              (error, results) => {
                if (error) {
                  console.error('Error registering user: ', error);
                  res.status(500).json({ message: 'Internal server error' });
                } else {
                  res.status(200).json({ message: 'User registered successfully' });
                }
              }
            );
          }
        }
      }
    );
  },

//   LOGIN

  login: (req, res) => {
    const { username, password } = req.body;

    // Check if the user exists in the 'users' table
    db.query(
      'SELECT * FROM users WHERE username = ?',
      [username],
      (error, results) => {
        if (error) {
          console.error('Error logging in: ', error);
          res.status(500).json({ message: 'Internal server error' });
        } else {
          if (results.length === 0) {
            // User not found, return an error response
            res.status(404).json({ message: 'User not found' });
          } else {
            const user = results[0];

            // Check if the password is correct
            if (user.password !== password) {
              res.status(401).json({ message: 'Invalid password' });
            } else {
              // User authentication successful
              res.status(200).json({ message: 'Login successful', user });
            }
          }
        }
      }
    );
  },

};

module.exports = UserController;
