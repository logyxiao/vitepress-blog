---
date: 2021-10-29
title: Git账号相关配置
tags:
- git
- 常用
describe:
---
# Git账号相关配置
## **1. 查看是否已经存在了**

打开电脑终端，输入以下命令：ls -al ~/.ssh

如果没有 ~/.ssh 文件夹，则需要手动创建一个

## **2.步骤2. 生成/设置SSH Key**

继续上一步可能出现的情况

**（1）情况一**：终端出现文件id_rsa.pub 或 id_dsa.pub，则表示该电脑已经存在SSH Key，此时可继续输入命令：`pbcopy < ~/.ssh/id_rsa.pub`

这样你需要的SSH Key 就已经复制到粘贴板上了，然后进行步骤3

**（2）情况二**：终端未出现id_rsa.pub 或 id_dsa.pub文件，表示该电脑还没有配置SSH Key，此时需要输入命令：`ssh-keygen -t rsa -C "your_email@example.com"`

（注意，这里的  [your_email@example.com](https://links.jianshu.com/go?to=mailto%3Ayour_email%40example.com) 是你自己的邮箱，选一般的常用的邮箱即可，笔者当时用的是腾讯企业邮箱，就出现了一点小问题，所以不常用的邮箱一般不推荐） 默认会在相应路径下（/your_home_path）生成`id_rsa`和`id_rsa.pub`两个文件，此时终端会显示：
`Generating public/private rsa key pair. Enter file in which to save the key (/your_home_path/.ssh/id_rsa):`

连续回车即可，也可能会让你输入密码，密码就是你的开机密码

此时再输入命令：ls -al ~/.ssh 就会出现id_rsa.pub 和 id_dsa.pub两个文件，然后重复情况一的步骤即输入以下命令再进行步骤3即可：`pbcopy < ~/.ssh/id_rsa.pub`

## **步骤3.将SSH Key添加到GitLab中就可以了**

## 问题**解决：git SSL certificate problem: unable to get local issuer certificate**

`git config --global http.sslVerify false`

## Github 账号配置

1. 生成一个github的ssh key

```bash
ssh-keygen -t rsa -C "你的github邮箱" -f ~/.ssh/github_rsa
```

2. 复制 ssh key

```bash
pbcopy < ~/.ssh/github_rsa.pub
```

3. 在 git 官网上右上角点击头像 --> 点击settings --> 点击 SSH and GPG keys --> 点击 New SSH key --> 粘贴 id_rsa.pub

4. 在~/.ssh/目录下创建一个config文件，分别配置公司gitlab的ssh key 和 自己个人的 ssh key

```bash
Host gitlab
	HostName 公司的代码仓库服务器地址
	User gitlab用户名
	IdentityFile ~/.ssh/id_rsa
Host github.com
	HostName github.com
	User github用户名
	IdentityFile ~/.ssh/github_rsa
```

5. 至此，可以分别测试一下了你的ssh 是否能连通了

```
ssh -T git@gitlab
ssh -T git@github.com

```

6. 如果出现类似这样的字段就表明你的ssh key可以用了

```
Hi XXX! You've successfully authenticated, but GitHub does not provide shell access.

```

7.  强迫症的福音

前面2.3中提到 ~/.ssh/config 文件中的User 并不等同于我们的git账户名。有可能你之前设置过

```
git config --global user.name "公司gitlab实名"
```

```
git config --global user.name "公司gitlab实名"
```

然后你发现你传代码到github的时候，也是显示的这个实名，让你觉得有点不爽。你可以继续到你本地的github仓库项目文件夹下去设置一个本地的用户名

```
git config --local user.name "github用户名"

```

再推送，就可以显示对应的用户名了。

这里什么时候用global 什么时候用local 其实取决于你自己用哪个账户用得多一点，比如你在公司的电脑上，你就可以把公司的gitlab用户名加 --global 配置，而自己个人的github加 --local。如果你是在你自己家里的电脑上，就可以是相反的操作了。
