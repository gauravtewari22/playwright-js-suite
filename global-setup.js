// global-setup.js
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

module.exports = async () => {
  const server = spawn(
    'npx',
    ['http-server', 'public', '-p', '3000', '--silent'],
    { stdio: 'ignore', shell: true }
  );

  // Save server PID for teardown
  fs.writeFileSync('.server-pid', server.pid.toString());

  console.log('✅ Local server started on http://localhost:3000');

  // Wait a bit to ensure server is ready
  await new Promise(res => setTimeout(res, 5000));
};
