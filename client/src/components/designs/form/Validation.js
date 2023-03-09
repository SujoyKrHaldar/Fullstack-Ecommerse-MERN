export const emailValidation = (e, setMessage) => {
  if (!e.target.value) {
    setMessage("Email can't be empty.");
    return;
  }
  if (!e.target.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    setMessage("Invalid email id.");
    return;
  }
  setMessage(false);
};

export const passwordValidation = (e, setMessage) => {
  if (!e.target.value) {
    setMessage("Password can't be empty.");
    return;
  }
  if (e.target.value.length < 5) {
    setMessage("Password must have more than 5 characters.");
    return;
  }
  if (e.target.value.length > 12) {
    setMessage("Password must have less than 12 characters.");
    return;
  }
  setMessage(false);
};
