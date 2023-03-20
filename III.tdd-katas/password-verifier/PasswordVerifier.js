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

/*

Incompetencia desconocida. No sé lo que no sé
Incompetencia conciente. Yo sé que no sé
Competencia conciente. Aprendiendo
Competencia inconciente. Es como el talento. Es como respirar.

Cambiar la estructura sin cambiar el comportamiento. Eso es factorizar
¿Lo opuesto?
Cambiar el comportamiento sin cambiar la estructura. Se llama transformación


*/
