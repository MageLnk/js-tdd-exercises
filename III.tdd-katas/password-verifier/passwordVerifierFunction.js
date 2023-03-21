const passwordVerifierFunction = (password) => {
  if (password === null) throw new Error("Password cannot be null");
  if (password.length <= 8) {
    throw new Error("Password should be larger than 8 chars");
  }

  const conditions = [
    { expresion: /[A-Z]/, message: "The password should contain at least one uppercase" },
    { expresion: /[a-z]/, message: "The password should contain at least one lowercase" },
    { expresion: /\d/, message: "The password should contain at least one number" },
  ];

  let passwordApproval = 0;
  let i = 0;

  while (passwordApproval < 3 && i < conditions.length) {
    const { expresion, message } = conditions[i];

    if (!expresion.test(password)) {
      throw new Error(message);
    }

    passwordApproval++;
    i++;
  }

  return "The password is Ok";
};

module.exports = passwordVerifierFunction;
