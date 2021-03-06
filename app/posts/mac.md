---
date: 2021-10-29
title: 个人Mac配置
tags:
  - Mac
  - 常用
describe: 个人Mac电脑配置
---

## 常用软件

1. Mac 自动化软件: [Keyboard Maestro](https://wild-flame.github.io/guides/docs/mac-os-x-setup-guide/Others) (必备软件)
2. Markdown 编辑器:[Typora](https://typora.io/)
3. 云文件同步[坚果云](https://www.jianguoyun.com/)
4. 代码编辑:[Visual Studio Code](https://go.microsoft.com/fwlink/?LinkID=534106)
5. 抓包软件-1:[Charles](https://www.charlesproxy.com/)
6. 抓包软件-2:[proxyman](https://proxyman.io)
7. 按键显示:[keycastr](https://github.com/keycastr/keycastr/releases)
8. 图片压缩:[imageoptim](https://imageoptim.com/howto.html)
9. Git 版本管理:[SourceTree](http://www.sourcetreeapp.com/)
10. FTP:[Filezila](https://filezilla-project.org/)
11. 数据库:[Navicat](http://www.navicat.com.cn/)
12. 制图工具(开源免费):[diagrams](https://www.diagrams.net/)
13. 制图工具(收费):[gliffy](https://www.gliffy.com/)
14. 时间记录软件: [toggl](https://toggl.com)
15. 笔记软件: [joplin](https://joplinapp.org)
16. 视频下载软件: [dowine4](https://software.charliemonroe.net/downie/)

## 终端配置

1.  [item2](https://iterm2.com/)

2.  [on-my-zsh](https://ohmyz.sh/)

    ```bash
    $ sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
    or
    $ sh -c "$(wget https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"
    ```

3.  ```
    xcode-select --install
    ```

4.  ```
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
    ```

### 开启终端代理

## 开启终端代理

1. 测试终端是否翻墙: curl www.google.com

2. vim ~/.zshrc

3. ```bash
   function proxy_on(){
   	export http_proxy="http://127.0.0.1:41091"
   	export https_proxy="http://127.0.0.1:41091"
     export ALL_PROXY='socks5://127.0.0.1:1087'
       echo '*** 开始终端代理 ***'
   }

   function proxy_off(){
   	unset http_proxy
   	unset https_proxy
   	unset ALL_PROXY
       echo '*** 关闭终端代理 ***'
   }
   ```

4. source ~/.zshrc

