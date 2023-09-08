# Hatena-Blog-Theme-Boilerplate

Boilerplate は、はてなブログのデザインCSSカスタマイズの土台に適したデザインテーマです。

はてなブログの必要最小限の見た目が調整されています。「オリジナルテーマの制作にチャレンジしたいけど、0から作るのが大変」という方は、このデザインテーマをもとにしてCSSを書くと比較的楽にテーマが作れます。

*Boilerplateは自己責任でご利用ください。お問い合わせははてなブログのサポートフォームではなく、本リポジトリのIssueにお願いします。*

デザインテーマの制作にあたっては下記ヘルプページも参考にしてください。

- [デザインテーマ制作の手引き - はてなブログ ヘルプ](https://help.hatenablog.com/entry/theme/custom-theme)

# CSSのダウンロード

最新のバージョンから `boilerplate.css` をダウンロードしてください。

- <https://github.com/hatena/Hatena-Blog-Theme-Boilerplate/releases>

# セットアップ

SCSSで開発する場合は、下記の手順でリポジトリのcloneとモジュールのインストールを行います。

## 必須コンポーネント

- [Node.js](https://nodejs.org/)

## モジュールのインストール

``` console
$ git clone https://github.com/hatena/Hatena-Blog-Theme-Boilerplate.git
$ cd Hatena-Blog-Theme-Boilerplate
$ npm install
```

# テーマ開発の手順

## 開発サーバーの利用

開発サーバーを利用することで、SCSSの変更をリアルタイムにブログに反映させながらテーマの開発を行えます。

下記のコマンドで、開発サーバーを起動します。

``` console
$ npm start
```

つづいて、[はてなブログ](https://blog.hatena.ne.jp/)の設定を行います。

1. テーマの動作確認に使うブログを1つ用意します。（普段お使いのブログとは別にブログを作成してください。）
2. 1.のブログの「デザイン設定」にアクセスし、「カスタマイズ」タブの「デザインCSS」の内容を下記に置き換えて保存します。
    ``` css
    /* Responsive: yes */
    ```
3. 1.のブログの「設定」->「詳細設定」にアクセスし、「&lt;head&gt;要素にメタデータを追加」を下記に置き換えて保存します。
    ``` html
    <script type="module" src="http://localhost:5173/@vite/client"></script>
    <link rel="stylesheet" type="text/css" href="http://localhost:5173/scss/boilerplate.scss" />
    ```

以上の設定が完了すると、動作確認用のブログに開発中のテーマが反映されます。ブログにアクセスし、表示を確認しながらテーマの開発を行なってください。

## コンパイル

テーマの開発が完了したら、下記のコマンドでSCSSをコンパイルします。コンパイルの結果は `build/boilderplate.css` に出力されます。

``` console
$ npm run build
```

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
