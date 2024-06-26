import jwt from "jsonwebtoken";

class Token {
  static async generateAccessToken(id, name, email) {
    return new Promise((resolve, reject) => {
      const payload = {
        userid: id,
        username: name,
        email: email,
      };
      const options = {
        issuer: "Subham Joshi",
        expiresIn: "24h",
      };
      const secreykey =
        "d624065e66687f08b304877acb2b5a968c0ed94a56824e98bd79c16191843dae";

      jwt.sign(payload, secreykey, options, (err, token) => {
        if (err) {
          reject(err);
        } else {
          resolve(token);
        }
      });
    });
  }
}

export default Token;
