const verifyPasswordContent = (password: string, value: string) => [...password].some(char => value.includes(char));

export {
  verifyPasswordContent
};