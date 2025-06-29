// global-teardown.js
const fs = require('fs');

module.exports = async () => {
  if (fs.existsSync('.server-pid')) {
    const pid = parseInt(fs.readFileSync('.server-pid', 'utf8'));
    process.kill(pid);
    fs.unlinkSync('.server-pid');
    console.log('🛑 Local server stopped.');
  }
};
