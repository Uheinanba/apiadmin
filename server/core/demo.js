var SSH = require('simple-ssh');

var ssh = new SSH({
  host: 'firstshare.co',
  user: 'fxiaoke',
  pass: '170323Xiaoke!@#',
});

ssh
  .on('error', function(err) {
    console.log('连接失败', err);
    ssh.end();
  })
  .on('ready', () => {
    console.log('ssh连接成功');
  });
