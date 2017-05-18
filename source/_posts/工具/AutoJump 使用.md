title: 工具

date: 2017-05-18 10:05:20

tags: 工具, Mac


## AutoJump 使用

- `brew install autojump`

- 在 `.zshrc` 中找到 `plugins=`，在后面添加(没有刚直接添加)

  ``` shell 
  plugins=(git autojump)
  ```

- 然后继续在上述文件中添加

  ```shell
  [[ -s $(brew --prefix)/etc/profile.d/autojump.sh ]] && . $(brew --prefix)/etc/profile.d/autojump.sh
  ```

- source ~/.zshrc