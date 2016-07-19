# Slack 用のスラッシュコマンド

DreamHouse サンプルアプリケーション用の Slack スラッシュコマンドの実装です。

ボットのインスタンスを実際に作成するには、以下の手順を実行します。

### ステップ 1：DreamHouse アプリをインストールする

DreamHouse サンプルアプリケーションをまだインストールしていない場合は、[この手順](http://dreamhouseappjp.io/installation/)を実行してインストールします。

### ステップ 2：接続アプリケーションを作成する

Salesforce 接続アプリケーションをまだ作成していない場合は、以下の手順を実行して作成します。

1. Salesforce の［設定］で、クイック検索ボックスに「**アプリ**」と入力して［**アプリケーション**］リンクをクリックします。

1. ［**接続アプリケーション**］セクションで、［**新規**］をクリックし、次のように接続アプリケーションを定義します。

    - 接続アプリケーション名：MyConnectedApp（または任意の名前）
    - API 参照名：MyConnectedApp
    - 取引先責任者メール：自分のメールアドレスを入力します。
    - OAuth 設定の有効化：チェックボックスをオンにします。
    - コールバック URL：http://localhost:8200/oauthcallback.html（これは後で変更します）
    - 選択した OAuth 範囲：フルアクセス（full）
    - ［**保存**］をクリックします。

### ステップ 3：スラッシュコマンドをデプロイする

1. [Heroku ダッシュボード](https://dashboard.heroku.com/)にログインしていることを確認します。
1. 下のボタンをクリックして、スラッシュコマンドを Heroku にデプロイします。

    [![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

1. 以下の通りに環境変数を設定します。

    - **SF_CLIENT_ID**：Salesforce 接続アプリケーションのコンシューマキーを入力します。
    - **SF_CLIENT_SECRET**：Salesforce 接続アプリケーションのコンシューマの秘密を入力します。
    - **SF_USER_NAME**：Salesforce 統合ユーザーのユーザー名を入力します。
    - **SF_PASSWORD**：Salesforce 統合ユーザーのパスワードを入力します。
    - **SLACK_HOUSE_TOKEN** は、ここでは空白のままにします。

### ステップ 4：Slack でスラッシュコマンドを作成する

1. ブラウザで、Slack チームの Custom Integration ページを開きます。例：```https://<チーム名>.slack.com/apps/manage/custom-integration```（```<チーム名>```は実際のチーム名で置き換えます。）

1. ［**Slash Commands**］をクリックし、［**Add Configuration**］をクリックします。

1. ［**Choose a Command**］入力フィールドに「**/house**」と入力し、［**Add Slash Command Integration**］をクリックします。

1. ［**Integration Settings**］セクションで以下のように設定します。

    - Command：/house
    - URL：Heroku にデプロイしたアプリの URL の末尾に /house を付加します。例：```https://my-heroku-app.herokuapp.com/house```
    - Method：POST
    - トークンをコピーし、ブラウザのタブをもう 1 つ開いて、Heroku ダッシュボードにログインし、Heroku の **SLACK_HOUSE_TOKEN** 環境変数にそのトークンの値を設定します（［**Setting**］>［**Reveal Config Vars**］）
    - Customize Name：DreamHouse

    ［**Save Integration**］をクリックします。
