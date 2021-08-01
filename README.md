## JavaScript-tutorial

### Node.js

#### nodebrew を使った環境構築
nodebrew : Node.js をインストールするだけでなくversion管理をすることもできるツール．

##### install nodebrew
[公式サイト](https://github.com/hokaccha/nodebrew)にアクセス．
```terminal
$ curl -L git.io/nodebrew | perl - setup
```
をTerminalで実行．実行後に表示されるPATH
```terminal
export PATH=$HOME/.nodebrew/current/bin:$PATH
```
をコピペして実行する．実行後に
```
$ nodebrew -v
```
を実行して以下のような結果が出てくる．
```
nodebrew 1.1.0

Usage:
    nodebrew help                         Show this message
    nodebrew install <version>            Download and install <version> (from binary)
    nodebrew compile <version>            Download and install <version> (from source)
    nodebrew install-binary <version>     Alias of `install` (For backward compatibility)
    nodebrew uninstall <version>          Uninstall <version>
    nodebrew use <version>                Use <version>
    nodebrew list                         List installed versions
    nodebrew ls                           Alias for `list`
    nodebrew ls-remote                    List remote versions
    nodebrew ls-all                       List remote and installed versions
    nodebrew alias <key> <value>          Set alias
    nodebrew unalias <key>                Remove alias
    nodebrew clean <version> | all        Remove source file
    nodebrew selfupdate                   Update nodebrew
    nodebrew migrate-package <version>    Install global NPM packages contained in <version> to current version
    nodebrew exec <version> -- <command>  Execute <command> using specified <version>

Example:
    # install
    nodebrew install v8.9.4

    # use a specific version number
    nodebrew use v8.9.4
```



##### install Node.js
```terminal
$ nodebrew install-binary latest
```
もしくは
```terminal
$ nodebrew install-binary stable
```
でinstall. latestは最新版を，stableは安定版で最新のversionをinstallする．任意のversionをinstallするときは
```terminal
$ nodebrew install-binary v8.9.1
```
のように指定する．
インストール後は
```terminal
$ nodebrew ls
```
を実行すると
```terminal
v16.6.0

current: v16.6.0
```
のようにinstallされているversionが表示できる．`current:none`はNode.jsのversionが選択されていない状態なので，使用するversionの指定は

```terminal
$ nodebrew use v16.6.0
```
のようにすれば良い．


#### use Node.js
Terminalで

```termianl
$ node
```
を実行すると，以下のようにREPLとなり
```terminal
Welcome to Node.js v16.6.0.
Type ".help" for more information.
> console.log('Hello World!')
```
のように動かすことができる．


