module.exports = {
    allAccess: async (req, res) => {
        try {
        res.status(200).send("Public Content.");
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    },
    userBoard: async (req, res) => {
        try {
        res.status(200).send("User Content.");
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    },
    adminBoard: async (req, res) => {
        try {
        res.status(200).send("Admin Content.");
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    },
    moderatorBoard: async (req, res) => {
        try {
        res.status(200).send("Moderator Content.");
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    },
};
// exports.allAccess = (req, res) => {
//     res.status(200).send("Public Content.");
//   };
  
//   exports.userBoard = (req, res) => {
//     res.status(200).send("User Content.");
//   };
  
//   exports.adminBoard = (req, res) => {
//     res.status(200).send("Admin Content.");
//   };
  
//   exports.moderatorBoard = (req, res) => {
//     res.status(200).send("Moderator Content.");
//   };