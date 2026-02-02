# セットアップ

このドキュメントのこのセクションでは、VRChatアバター制作の事前知識がなくても、Hash のフェイストラッキング用アドオンをインストールする方法を解説します。

## Booth / Ko-fi からアドオンをダウンロード

Booth でアドオンを購入した場合は、ダウンロードボタンをクリックし、アーカイブを解凍してください。

## 対応するアバターのバージョンをダウンロード

アドオンのストアページを確認すると、対応しているアバターのバージョンが記載されています。

そのバージョンのアバターも Booth からダウンロードしてください。

該当するアバターパッケージのバージョンがすでに入手できない場合は、[私の Booth ページ](https://hashedits.booth.pm/) にあるメールアイコンをクリックして、Booth の DM からご連絡ください。

![SendMessageButton](/img/SendMessageButton.png)

## Unity を開く

[VRChat Creator Companion](https://vcc.docs.vrchat.com/) を起動し、プロジェクトを作成または開きます。

（新しくプロジェクトを作成する場合は、VRChat のデフォルトである `Unity 2022 Avatar Project` を使用し、分かりやすい名前を付けてください）

## アバターをインポート

上記でダウンロードしたアバターの `.unitypackage` ファイルを、Unity エディターのプロジェクトウィンドウにドラッグ＆ドロップします。

表示されるウィンドウで `Import` をクリックしてください。

## アドオンをインポート

私のアドオンの `.unitypackage` ファイルを、Unity エディターのプロジェクトウィンドウにドラッグ＆ドロップします。

表示されるウィンドウで `Import` をクリックしてください。

## フェイストラッキングモデルを生成

- Unity ウィンドウ上部のメニューから `Tools` -> `Hash` -> `AvatarName` をクリックします。

![PatchingWindow](/img/SummonPatchingWindow.png)

> アバターによっては複数のプレハブ用オプションが表示される場合があります。好きなものを1つ選んでも、すべて実行しても問題ありません。

- 開いたウィンドウで `Patch` ボタンをクリックします。

![alt text](/img/PatcherWindow.png)

## プレハブをシーンに配置

- `Assets` / `Hash's_Things` / `AvatarName` / `prefab` に移動します。

![PrefabSelection](/img/PrefabSelection.png)

- 使用したいプレハブをシーンにドラッグ＆ドロップします。

## VRChat にアップロード

- Unity ウィンドウ上部の `VRCSDK` -> `Show Control Panel` をクリックして、VRChatSDK ウィンドウを開きます
- VRChat アカウントでログインします
- `Builder` タブを開きます
- アバター名を入力します
- アバターのプレビュー画像を撮影します
- ウィンドウ下部の利用規約に同意します
- 大きな `Build & Publish` ボタンをクリックします

## VRCFT を起動

- VRCFT は [Steam](https://store.steampowered.com/app/3329480/VRCFaceTracking/) から入手できます

- モジュールレジストリから、使用しているトラッキングデバイス用のモジュールをダウンロードしてください

> 詳細な設定方法については、[こちらのドキュメント](https://docs.vrcft.io/docs/intro/getting-started) を参照してください

## VRChat を起動

VRChat は [Steam](https://store.steampowered.com/app/438100/VRChat/) から入手できます。

## アバターに切り替える

- アバタータブを開きます
- `Uploaded` タブに移動します
- 作成したアバターをクリックします
- 3D プレビューの下にあるチェックボックスをクリックして、アバターに切り替えます

## 完了

## さらに詳しく知りたい場合

このドキュメントを参照して、[カスタムアバターへのアドオンの適用方法](/customisation/apply-to-custom-avatar.md) や、[よくある問題の対処法](/common-issues/) を確認してください。
