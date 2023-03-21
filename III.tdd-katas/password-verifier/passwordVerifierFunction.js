const passwordVerifierFunction = (password) => {
  //if (password === null) throw new Error("Password cannot be null");
  //if (password.length <= 8) {
  //  throw new Error("Password should be larger than 8 chars");
  //}

  const conditions = [
    { expresion: (value) => !(value === null), message: "Password cannot be null" },
    { expresion: (value) => /[a-z]/.test(value), message: "The password should contain at least one lowercase" },
    { expresion: (value) => !(value.length <= 8), message: "Password should be larger than 8 chars" },
    { expresion: (value) => /[A-Z]/.test(value), message: "The password should contain at least one uppercase" },
    { expresion: (value) => /\d/.test(value), message: "The password should contain at least one number" },
  ];

  let i = 0;

  while (i < conditions.length) {
    const { expresion, message } = conditions[i];

    if (!expresion(password)) {
      throw new Error(message);
    }

    i++;
  }

  return "The password is Ok";
};

module.exports = passwordVerifierFunction;
