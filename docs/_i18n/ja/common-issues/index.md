# よくある問題

## ストアページに記載されているアバターのバージョンが入手できなくなっている

該当するアバターパッケージのバージョンがすでに利用できない場合は、[私の Booth ページ](https://hashedits.booth.pm/) にあるメールアイコンをクリックして、Booth の DM からご連絡ください。

![SendMessageButton](/img/SendMessageButton.png)

可能な限り早く互換性を維持するためのアップデートを提供できるよう努めます。

## ブレンドシェイプでアバターを調整した後、まばたき時にクリッピングが発生する

このガイドは、ブレンドシェイプを使用してモデルを調整した場合に有効です。

### カスタムモデルのメイン FBX ファイルを見つけてバックアップする

まず、モデルの頭部を含むメインの FBX ファイルを探します。手順は以下の通りです。
手順は以下の通りです：

- シーン階層で対象を左クリックして選択します
  ![UnitySelectPrefab](/img/UnitySelectPrefab.png)
- インスペクタータブを開きます（デフォルトでは左側）
  ![UnityInspectorTab](/img/UnityInspectorTab.png)
- アバターのアーマチュアコンポーネント（緑色の人型アイコン）をクリックします

- Unity のファイルエクスプローラー上で該当ファイルが表示されます

- アーマチュアコンポーネントの親ファイルを右クリックします
- `Export Package` を選択します
- 開いたウィンドウで `Include dependencies` のチェックを外します
- `Export...` をクリックします
- バックアップを保存する場所を選択します
- Unity に戻ります
- 再度そのファイルを右クリックします
- `Show In Explorer` をクリックします

### Blender を開く

- Blender を [こちら](https://www.blender.org/download/) からダウンロードします
- インストールウィザードに従ってインストールします
- Blender を起動します

### シーンをクリアする

- ビューポート内をクリックしてスタートアップ画面を消します
- `A` キーを押してすべて選択します
- `Del` キーを押してすべて削除します

### カスタムモデルをインポートする

- ウィンドウ左上に移動します
- `File` をクリックします
- `Import` をクリックします
- `FBX` をクリックします

  ![BlenderFBXImport](/img/BlenderFBXImport.png)

- カスタムモデルの保存場所を選択します

  ![BlenderImportFBXFile](/img/BlenderImportFBXFile.png)

- ウィンドウ左下の `Import FBX` ボタンをクリックします

これでカスタムモデルが Blender に読み込まれます。
`Ctrl` + `S` を押して、安全な場所に保存しておくことをおすすめします。

![CustomFBXImported](/img/BlenderCustomFBXImported.png)

### ブレンドシェイプのミックスを生成する

Unity に戻り、現在使用しているブレンドシェイプの組み合わせを確認し、Blender で再現します。

- [nekobako](https://x.com/nekobako) さんの Editor Patcher の使用をおすすめします。[こちら](vcc://vpm/addRepo?url=https%3A%2F%2Fvpm.nekobako.net/index.json) をクリックすると VCC に追加できます

- プロジェクトで `Manage Project` をクリックします

- `Editor Patcher` を検索し、`+` アイコンをクリックしてリポジトリに追加します

![AddEditorPatcher](/img/AddEditorPatcher.png)

- アバターのフェイスメッシュを選択します（ここでは `Body` という名前です）

![SelectFaceMesh](/img/SelectFaceMesh.png)

- `Blendshapes` セクションを展開します

- 検索バー横の小さな `0` をクリックして、値が 0 以外のブレンドシェイプのみ表示します

![CustomShapeMixUnity](/img/CustomShapeMixUnity.png)

- Blender でフェイスメッシュをクリックして選択します

- データプロパティタブ（緑の点が3つつながったアイコン）を開きます ![DataPropertiesIcon](/img/DataPropertiesIcon.png)

- `ShapeKeys` メニューを展開します
- `Relative` チェックボックスの上にある検索矢印をクリックします

  ![ShapeKeyMenu](/img/ShapeKeyMenu.png)

- Unity で調整したのと同じブレンドシェイプを検索します（この例では `browDownAngryRight` と `browDownAngryLeft`）

- 同じ値を設定します  ※ Blender のシェイプキーは 0〜1、Unity は 0〜100 なので注意してください

  ![ShapeKeysMenuBlendShapesSet](/img/ShapeKeysMenuBlendShapesSet.png)

- `-` ボタンの下にある小さな下向き矢印をクリックします

- `New Shape from Mix` をクリックします

  ![ShapeKeyMenuMix](/img/ShapeKeyMenuMix.png)

- 検索バー横の小さな `X` をクリックして検索をリセットし、リストの一番下までスクロールします

- `Relative` チェックボックスと同じ行にある小さな `X` をクリックします

- 作成されたシェイプキーミックスの名前をコピーします（名前をダブルクリックすると選択できます。例：`Key 241`）

  ![ShapeKeyMixCreated](/img/ShapeKeyMixCreated.png)

### 修正を適用する

- シェイプキーリストで `EyeClosed` を検索します

- Y 軸ギズモをクリック、または `Numpad 1` を押してアバターを正面向きにします

  ![Y-Gizmo](/img/Y-Gizmo.png)

- ビューポート上にマウスを置いた状態で `Tab` を押し、編集モードに入ります

- ビューポート右上の X-Ray モードを有効にします

  ![XrayMode](/img/XrayMode.png)

- 顔の右側を大まかに選択します

![RightSideSelection.png](/img/RightSideSelection.png)

- `EyeClosedRight` のシェイプキーを選択します

- ビューポート上で `Ctrl` + `V` を押します

- `Blend from Shape` を選択します

  ![BlendFromShape](/img/BlendFromShape.png)

- 小さな矢印をクリックして `Blend from Shape` メニューを展開します

  ![BlendFromShapeMenu](/img/BlendFromShapeMenu.png)

- カスタムミックスの名前（例：`Key 241`）を貼り付けます

- `Add` にチェックが入っていることを確認します

- ウェイトを `-1` に設定します

  ![BlendFromShapeCompleted](/img/BlendFromShapeCompleted.png)

  > 正しく設定されている場合、このような状態になります

- ビューポート内をクリックして選択を解除します

- 顔の左側を大まかに選択します

  ![LeftSideSelection](/img/LeftSideSelction.png)

- 同様の手順で `EyeClosedLeft` にも適用します

### 作業をエクスポートする

- ウィンドウ左上に移動します
- `File` をクリックします
- `Export` をクリックします
- `FBX` をクリックします

![BlenderFBXExport](/img/BlenderFBXExport.png)

- カスタムモデルの保存場所を選択します

- ファイルをクリックします

- Unity に戻ります

- Unity のファイルエクスプローラーでカスタム FBX ファイルを選択します

- インスペクターウィンドウを確認します

- `Convert Units` のスケーリングを確認します（例：`1M/Unit` または `1cm/Unit`）

![UnityImportScale](/img/UnityImportScale.png)

- Blender のエクスポート設定で、対応するスケーリングを選択します `1M/Unit = FBX All` & `1cm/Unit = All Local`

![BlenderApplyScaling](/img/BlenderApplyScaling.png)

- `Export FBX` をクリックします

### 完了！

## 目の回転が正しく動作しない

これは、アバターコンポーネントが正しい目のボーンを参照していない場合に発生しやすい問題です。主な原因は以下の通りです。

目のボーンが割り当てられていない

- 確認方法：Unity でアバターの FBX ファイルを選択し、`Rig` タブ → `Configure` → `Head` を選択し、目のボーンが正しく割り当てられているか確認します

- 修正方法：割り当てられていない場合は、左側の階層から正しいボーンを選択してください

目のボーン参照が欠けている

- 確認方法：主にヘッドメッシュを差し替えた場合に発生します

- 修正方法：Blender でヘッドスワップを行ってください。手順は [こちらのガイド](/customisation/apply-to-custom-avatar.md#head-swap) を参照してください

別のアニメーションが目の動きを妨げている

- 確認方法：私が提供しているプレハブと同じアニメーションコントローラーを使用し、Modular Avatar や VRCFury のコンポーネントをすべて外してください
- 修正方法： [Animation Tracking Control](https://creators.vrchat.com/avatars/state-behaviors/#animator-tracking-control) コンポーネントで `Eyes & Eyelids` が `Tracking` 状態に設定されていないか確認してください。
  その後、Modular Avatar や VRCFury のコンポーネントを1つずつ追加し、どれが問題を引き起こしているか特定します。

## パッチャースクリプトで赤いエラーが表示される

これは、OS の言語設定が英語以外になっている一部の環境でよく発生する問題です。

以下の手順で解決できます。

- Windows のコントロールパネルを開きます
- `時計と地域` を選択します
- `地域` をクリックします
- ウィンドウ上部の `管理` タブを選択します
- `Unicode 対応でないプログラムの言語` の下にある `システム ロケールの変更` をクリックします
- `English (United States)` を選択します

> モデルのパッチ適用後、設定は元に戻しても問題ありません

## アバターをアップロードするとカスタムブレンドシェイプの設定がリセットされる

これは、アバターにリラックス状態用のフェイスアニメーションが含まれており、それによって一部またはすべてのカスタムブレンドシェイプ設定が上書きされることが原因です。

この場合は、そのリラックス用アニメーションの上に、カスタム設定を記録することで修正できます。
