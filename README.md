# Hatena-Blog-Theme-Boilerplate

Boilerplate は、はてなブログのデザインCSSカスタマイズの土台に適したデザインテーマです。

はてなブログの必要最小限の見た目が調整されています。このテーマをもとにしてCSSを書くと比較的楽にデザインテーマが作れます。
「オリジナルテーマの制作にチャレンジしたいけど、0から作るのが大変」という方は、このデザインテーマをもとにしてCSSを書くと比較的楽にテーマが作れます。

*Boilerplateは自己責任でご利用ください。お問い合わせははてなブログのサポートフォームではなく、本リポジトリのIssueにお願いします。*

# CSSのダウンロード

最新のバージョンから `boilerplate.css` をダウンロードしてください。

- <https://github.com/hatena/Hatena-Blog-Theme-Boilerplate/releases>

# セットアップ

SCSSで開発する場合は、下記の手順でリポジトリのcloneとモジュールのインストールを行います。

## Required Component

- [Node.js](http://nodejs.org/)

## モジュールのインストール

```
$ git clone git@github.com:hatena/Hatena-Blog-Theme-Boilerplate.git
$ cd Hatena-Blog-Theme-Boilerplate
$ npm install
```

# 通常のテーマ開発

下記のコマンドで、SCSSファイル変更の監視とコンパイルを行います。

```
$ npm start
```

また、コンパイル後 `build/boilerplate.css` が作られます。

つづいて、[はてなブログ](http://blog.hatena.ne.jp/)でテーマ検証に使うブログを1つ用意します。ブログの「設定」->「詳細設定」にアクセスし、「headに要素を追加」欄に下記を貼り付けて保存します。

```
<link rel="stylesheet" href="http://localhost:3000/boilerplate.css"/>
<script async src="http://localhost:3000/browser-sync/browser-sync-client.js"></script>
```

以降は、ブログを開いた状態でSCSSファイルを保存すると、変更したスタイルが自動的に反映されます。

## （オプション）レスポンシブデザインのテーマ開発

レスポンシブデザインのテーマを開発する場合、ブログの「デザイン設定」->「カスタマイズ」にアクセスし、「デザインCSS」欄の先頭に下記のコメントを挿入してください。

```
/* Responsive: yes */
```

ヘルプ: [レスポンシブデザインのテーマを作成する際の注意点 - はてなブログ ヘルプ](http://help.hatenablog.com/entry/theme/custom-theme#responsive)

# 構成

```
boilerplate/
┣┳ scss/
┃┗┳ lib/
┃ ┗ boilerplate.scss
┗┳ build/
 ┗ boilerplate.css
```

# ライセンス

このCSSおよびSCSSファイルはMITライセンスのもと自由に複製・再配布できます。 記事本文の書式やコメント欄のスタイルなど、必要な部分だけをコピーして使ってもかまいません。 このデザインテーマをもとにしたテーマの配布も自由です。

# 過去のバージョン

- <https://github.com/hatena/Hatena-Blog-Theme-Boilerplate-Less>
  - BoilerplateのLessバージョンです。（開発終了）