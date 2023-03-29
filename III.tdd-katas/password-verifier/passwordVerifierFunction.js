const passwordVerifierFunction = (password) => {
  const conditions = [
    { expresion: (value) => !(value === null), message: "Password cannot be null" },
    { expresion: (value) => /[a-z]/.test(value), message: "The password should contain at least one lowercase" },
    { expresion: (value) => !(value.length <= 8), message: "Password should be larger than 8 chars" },
    { expresion: (value) => /[A-Z]/.test(value), message: "The password should contain at least one uppercase" },
    { expresion: (value) => /\d/.test(value), message: "The password should contain at least one number" },
  ];

  for (elements of conditions) {
    const { expresion, message } = elements;

    if (!expresion(password)) {
      throw new Error(message);
    }
  }

  return "The password is Ok";
};

module.exports = passwordVerifierFunction;
