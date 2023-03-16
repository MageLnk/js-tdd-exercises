class PasswordVerifier {
  Verify(password) {
    if (password === null) throw new Error("Password cannot be null");

    let passwordApproval = 0;

    if (password.length <= 8) throw new Error("Password should be larger than 8 chars");
    passwordApproval++;

    if (!/[A-Z]/.test(password)) throw new Error("The password should be contain at least one uppercase");
    passwordApproval++;

    if (!/[a-z]/.test(password)) throw new Error("The password should be contain at least one lowercase");
    passwordApproval++;

    if (!/\d/.test(password)) throw new Error("The password should be contain at least one number");
    passwordApproval++;

    if (passwordApproval > 2) {
      return "The password is Ok";
    }
  }
}

module.exports = PasswordVerifier;
