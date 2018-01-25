#!/usr/bin/env node

const execShCmd = (ssh, cmd) =>
  new Promise((resolve, reject) => {
    ssh.on('error', function(err) {
      reject({ err, type: 0 });
      ssh.end();
    });
    ssh
      .exec(cmd, {
        out: stdout => console.log(stdout),
        exit: code => code === 0 && resolve(),
        err: err => reject({ err, type: 1 }),
      })
      .start();
  });

const shAuth = ssh =>
  new Promise((resolve, reject) => {
    ssh
      .on('error', error => {
        console.log('失败', error);
        reject(error);
        ssh.end();
      })
      .on('ready', () => {
        console.log('成功');
        resolve();
      })
      .exec('pwd')
      .start();
  });

module.exports = {
  execShCmd,
  shAuth,
};
