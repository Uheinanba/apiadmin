const request = require('request');

/**
 通过下载到本地 执行
  ssh.exec('cat > /path/to/remote/file', {
    in: fs.readFileSync('/path/to/local/file')
  }).start();
  下载到远程的文件中。
 */
const requestToLocal = (url, path) => {
  return request(url, path);
};

/* request('https://www.baidu.com', function(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body); //请求百度首页，返回的Html数据
  }
});
 */
