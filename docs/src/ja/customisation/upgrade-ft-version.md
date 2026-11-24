# フェイストラッキングのバージョンを更新する

定期的に、私のフェイストラッキング用アドオンは新しい知見に合わせて更新しています。以下は、既存のアバターを新しいバージョンにアップデートする手順です。


::: warning
ネイティブ版へアップグレードする場合は、`Auto-Fill Blendshapes` をクリックしないでください。
VRCSDK 3.10.6以降を使用し、[Steam版のVRCFT](https://store.steampowered.com/app/3329480/VRCFaceTracking/)を使用してください。
:::


## 標準プレハブ

<details>
<summary>私が提供するプレハブを使用している場合は、こちらを開いてください</summary>

### アバターのプレハブを作成する

Unity のファイルエクスプローラーにアバターをドラッグ＆ドロップし、ダイアログが表示された場合は `Create Original Prefab` をクリックします。

### UnityPackage としてバックアップする

プレハブを右クリックし、`Export Package ...` をクリックします。表示されたウィンドウで `Export` をクリックしてください。

![PatchingWindow](/src/img/ExportAsUnityPackage.gif)

### FBX を削除する

`Hash's_Things/AvatarName/fbx` フォルダを削除します。

### パッチャーフォルダを削除する

`Hash's_Things/AvatarName/Patcher` フォルダを削除します。

### プロジェクトに新しいフェイストラッキングパッケージをインポートする

Booth または Ko-fi からダウンロードした UnityPackage を Unity ウィンドウへドラッグ＆ドロップし、表示されたウィンドウ下部の `Import` をクリックします。

### 初回と同じようにモデルをパッチする

- Unity ウィンドウ上部のメニューから `Tools` -> `Hash` -> `AvatarName` をクリックします

![PatchingWindow](/src/img/SummonPatchingWindow.png)

> アバターによっては複数のプレハブ用オプションが表示される場合があります。好きなものを1つ選んでも、すべて実行しても問題ありません。

- 開いたウィンドウで `Patch` ボタンをクリックします

![alt text](/src/img/PatcherWindow.png)

### ベースの FT プレハブと同じアニメーションコントローラーを使用していることを確認する

- `Hash's_Things/AvatarName/prefabs` に移動します
- 右クリック -> `Properties` を選択します
- 下にスクロールしてアニメーションコントローラーを確認します
- 自分のアバターを選択します
- アニメーションコントローラーとパラメータが一致していることを確認します

### 完了！

</details>

## カスタムアバター

<details>
<summary>私が提供するプレハブを展開した、またはカスタムアバターに適用した場合は、こちらを開いてください</summary>

### アバターのプレハブを作成する

Unity のファイルエクスプローラーにアバターをドラッグ＆ドロップし、ダイアログが表示された場合は `Create Original Prefab` をクリックします。

### UnityPackage としてバックアップする

プレハブを右クリックし、`Export Package ...` をクリックし、表示されたウィンドウで `Export` をクリックします。

![PatchingWindow](/src/img/ExportAsUnityPackage.gif)

### FBX を削除する

`Hash's_Things/AvatarName/fbx` フォルダを削除します。

### パッチャーフォルダを削除する

`Hash's_Things/AvatarName/Patcher` フォルダを削除します。

### 新しいフェイストラッキングパッケージをインポートする

Booth または Ko-fi からダウンロードした UnityPackage を Unity ウィンドウへドラッグ＆ドロップし、表示されたウィンドウ下部の `Import` をクリックします。

### 初回と同じようにモデルをパッチする

- Unity ウィンドウ上部のメニューから `Tools` -> `Hash` -> `AvatarName` をクリックします

![PatchingWindow](/src/img/SummonPatchingWindow.png)

> アバターによっては複数のプレハブ用オプションが表示される場合があります。好きなものを1つ選んでも、すべて実行しても問題ありません。

- 開いたウィンドウで `Patch` ボタンをクリックします

![alt text](/src/img/PatcherWindow.png)

### Unity の設定をコピーする

- フェイストラッキングプレハブをシーンにドラッグ＆ドロップします

- プレハブを右クリックし、

- `Properties` を選択します

- 2つ目のインスペクターウィンドウを元のウィンドウの横に並べます

![InspectorsSideBySideNative](/src/img/InspectorsSideBySideNative.png)

- FT プレハブの Avatar Descriptor コンポーネントを右クリックします

![InspectorCopy](/src/img/InspectorCopy.png)

- `Copy Component` をクリックします

- 自分のプレハブを選択します

- アバターの Avatar Descriptor コンポーネントを右クリックします

![InspectorsPaste](/src/img/InspectorPaste.png)

- `Paste Component Values` をクリックします

- `Face Tracking` セクションを展開します

![DescriptorFTMeshError](/src/img/DescriptorFTMeshError.png)

- フェイストラッキング版と同じメッシュを割り当てます

![DescriptorFTMeshFixed](/src/img/DescriptorFTMeshFixed.png)

</details>
