# PHP即时通讯系统单人多人聊天IM视频会议实时音视频红包功能

#### 介绍
workman构建即时通讯，含单人多人聊天，IM视频会议，实时音视频以及红包转账功能

#### 软件架构
软件架构说明
1.后台采用PHP的workman框架实现tcp服务器搭建
2.运行环境请选择BT(宝塔)面板，最新版
3.前端使用uniapp框架可打包成H5和安卓以及ios端
4.data目录为数据库文件目录，其中im目录为mongodb数据库文件

#### 环境要求
PHP 7.3
redis 5.0
swoole 4.0
mysql 5.7

#### 安装教程
1.宝塔开放28018 8383 1236端口；修改mongodb 端口为28018 （端口任意）

2.php安装扩展fileinfo redis Swoole4 mongodb   删除全部禁用函数

3.服务器上/www/wwwroot下新建im目录，将该项目目录下所有文件上传到服务器im目录下

4.修改以下几个配置文件成你服务器中的对应配置
  /www/wwwroot/im/http/app/im/common/controller/ActionBegin1.php  修改GatwayWork服务地址
  /www/wwwroot/im/http/config/database.php 修改数据库信息
  /www/wwwroot/im/socket/app/im/common/controller/Main.php 修改数据库信息
  /www/wwwroot/im/socket/app/im/common/controller/Config.php 修改IP

5.mongodb安装之后依次执行以下命令
  cd /www/server
  cd mongodb
  cd bin
  ./mongorestore -h 127.0.0.1:28018 -d im -dir /www/wwwroot/mongodb/im  #(数据存放目录)

6.安装yasm，依次执行以下命令
  wget http://www.tortall.net/projects/yasm/releases/yasm-1.3.0.tar.gz
  tar -zxvf yasm-1.3.0.tar.gz
  cd yasm-1.3.0
  ./configure make && make install
  ./configure && make && make install
  cd ../
  cd ffmpeg
  ./configure && make && make install
  
7.ffmpeg安装，依次执行以下命令
  wget http://www.ffmpeg.org/releases/ffmpeg-3.4.tar.gz
  mv ffmpeg-3.4.tar.gz /opt
  cd /opt
  tar -xvf ffmpeg-3.4.tar.gz
  
8.启动服务
  cd /www/wwwroot/im/socket
  php start.php start   
  或者   
  nohup php /www/wwwroot/im/socket/start.php start >/dev/null 2>&1 &
  
9.前端打包之后拿到h5页面扔进public目录即可

#### 使用说明

前端资源链接：https://gitee.com/osacr/im-web


#### 特别注意，该项目仅限于php程序员交流学习，切勿商用！切勿用于违法运营！

#### 特技

1.  使用 Readme\_XXX.md 来支持不同的语言，例如 Readme\_en.md, Readme\_zh.md
2.  Gitee 官方博客 [blog.gitee.com](https://blog.gitee.com)
3.  你可以 [https://gitee.com/explore](https://gitee.com/explore) 这个地址来了解 Gitee 上的优秀开源项目
4.  [GVP](https://gitee.com/gvp) 全称是 Gitee 最有价值开源项目，是综合评定出的优秀开源项目
5.  Gitee 官方提供的使用手册 [https://gitee.com/help](https://gitee.com/help)
6.  Gitee 封面人物是一档用来展示 Gitee 会员风采的栏目 [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)
