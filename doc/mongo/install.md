### 使用brew 安装mongo
- 
```
  brew install mongodb
```
- 
启动mongodb之前需要新建一个mongodb默认的数据写入目录
```
  mkdir -p /data/db
  sudo chmod -R 777 /data/db
```
- 启动mongodb服务
```
  mongod
```
- 进入mongodb的客户端连接
```
  > mongo
  > show dbs
```
###  图形化管理工具
- 使用robomongo 进行可视化管理
