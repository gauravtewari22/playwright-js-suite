// utils/helpers.js
function generateRandomEmail() {
  return `user_${Math.floor(Math.random() * 10000)}@test.com`;
}

module.exports = { generateRandomEmail };
