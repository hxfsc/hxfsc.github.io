title: 如何在终端使用VSCode, Sublime, Atom打开当前工程目录
date: 2018-05-20 11:07:20
tags: 前端, 前端工程
---

# 使用VSCode, Sublime, Atom打开当前工程目录

- 使用 `sudo vi ~/.zshrc`打开zshell的配置文件

- 在文件里面加入下面三行
```shell
alias atom='/Applications/Atom.app/Contents/MacOS/Atom'
alias subl='/Applications/SublimeText.app/Contents/SharedSupport/bin/subl'
alias vscode='/Applications/Visual\ Studio\ Code.app/Contents/Resources/app/bin/code'
```
- 然后 `source ~/.zshrc` 即可使用 `vscode ./` 打开当前目录了
