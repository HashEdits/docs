# カスタムアバターに適用する

カスタムアバターを持っていて、そこに私のフェイストラッキングを適用したい場合の手順を説明します。

## ヘッドスワップ（頭部の差し替え）

フェイストラッキング用のブレンドシェイプと正しいウェイトを持つ頭部に差し替える必要があります。
以下はその手順です。

### カスタムモデルのメイン FBX ファイルを見つけてバックアップする

まず、モデルの頭部を含むメインの FBX ファイルを探します。
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
- インストールウィザードに従ってセットアップします
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

- 左下の `Import FBX` ボタンをクリックします

これでカスタムモデルが Blender に読み込まれます。
`Ctrl` + `S` を押して、安全な場所に保存しておくことをおすすめします :)

![CustomFBXImported](/img/BlenderCustomFBXImported.png)

### フェイストラッキングモデルをインポートする

手順は先ほどと同じです。

- ウィンドウ左上に移動します
- `File` をクリックします
- `Import` をクリックします
- `FBX` をクリックします

- フェイストラッキングモデルの保存場所を選択します（`Hash's_Things/AvatarName/fbx` 配下）

- 左下の `Import FBX` ボタンをクリックします

![BlenderFTFBXImported](/img/BlenderFTFBXImported.png)

### マテリアルを一致させる

- `Armature.001` の下を展開し、フェイストラッキング用の頭部メッシュ（通常 `Body.001`）を選択します

- マテリアルタブを選択します ![MaterialsTabIcon](/img/MaterialsTabIcon.png)

- 黒いマテリアルアイコンをクリックして、現在のマテリアルを変更します

![BrowseMaterials](/img/BrowseMaterials.png)

- 名前の末尾に `.001` が付いていないマテリアルを選択します

![SelectMatWo.001](/img/SelectMatWo.001.png)

- 下に表示されるマテリアルを選択します

![SelectMaterialBellow](/img/SelectMaterialBellow.png)

- 残りのマテリアルについても同様に行います

### フェイストラッキング頭部にカスタムアバターのアーマチュアを割り当てる

- `Armature.001` の下を展開し、フェイストラッキング頭部メッシュ（通常 `Body.001`）を選択します

- モディファイアタブを選択します ![ModifiersTabIcon](/img/ModifiersTabIcon.png)

- `Object` フィールドをクリックします

![ObjectField](/img/ObjectField.png)

- `Armature` を選択します

### 頭部を再ペアレントする

- フェイストラッキング頭部メッシュを選択します

- 元のアーマチュアの上にドラッグします

- ドロップする前に `Shift` + `Alt` を押し続けます

- 左クリックを離します

### フェイストラッキング FBX の残りを削除する

- `Armature.001` を選択します

- `Shift` を押し続けます

- `↓` を押し続けてすべて選択します

- `Del` を押します

### 作業をエクスポートする

- ウィンドウ左上に移動します
- `File` をクリックします
- `Export` をクリックします
- `FBX` をクリックします

![BlenderFBXExport](/img/BlenderFBXExport.png)

- カスタムモデルの保存場所を選択します

- ファイルをクリックします

- Unity に戻ります

- Unity のファイルエクスプローラーでカスタム FBX を選択します

- インスペクターを確認します

- `Convert Units` のスケール値をメモします（例：`1M/Unit` または `1cm/Unit`）

![UnityImportScale](/img/UnityImportScale.png)

- Blender のエクスポート設定で対応するスケールを選択します `1M/Unit = FBX All` & `1cm/Unit = All Local`

![BlenderApplyScaling](/img/BlenderApplyScaling.png)

- `Export FBX` をクリックします

### フェイストラッキング FBX から目の回転設定を一致させる

- Unity でフェイストラッキング FBX を選択します
- インスペクタータブを開きます
- `Rig` をクリックします
- `Configure...` をクリックします
- `Muscles & Settings` をクリックします
- `Per-Muscle Settings` 内の `Head` を展開し、以下を表示します： `Eye Down-Up`, `Eye In-Out`, `Eye Down-Up`, `Eye In-Out`
- 設定を忘れないようスクリーンショットを撮ります

![MusclesSettings](/img/MusclesSettings.png)

- `Done` をクリックします

- 同様に、カスタム FBX 側でも目の筋肉設定を開きます

- 先ほどのスクリーンショットと同じ値を入力します

## メニュー・パラメータ・アニメーションコントローラーを割り当てる

- フェイストラッキングのプレハブをシーンにドラッグ＆ドロップします

- 右クリックします

- `Properties` をクリックします

- 2つのインスペクターを横並びに表示します

- 設定が完了したら `Done` をクリックし、ポップアップで `Apply` をクリックします

![InspectorsSideBySide](/img/InspectorsSideBySide.png)

- 自分のプレハブを選択します

- 両方のインスペクターで `Playable Layers` をクリックします

- FT プレハブ側の `Additive` アニメーションコントローラーをクリックします

![AnimationControllerHighlight](/img/AnimationControllerHighlight.png)

- それを自分のプレハブの Additive スロットにドラッグ＆ドロップします

- FX コントローラーも同様に設定します

- 両方のインスペクターを一番下までスクロールし、`Expressions` をクリックします

- 同様にメニューを置き換えます

## 既存セットアップと統合する（高度な設定）

すでにカスタムトグルやシステムを持つアニメーションロジックがある場合に有用です。

Modular Avatar は、VRC レイヤードライバの ID 順を変更してしまい、スムージング処理が壊れるため非対応です。

### VRCFury

<details>
<summary>クリックして詳細を表示</summary>

この統合方法についてはサポートを提供しません。

::: warning
以下を満たしていることを確認してください：

- `Animator Tracking Control` の `Eyes & Eyelids` が `No Change` 以外に設定されていない
- `FacialExpressionsDisabled` を使用してジェスチャーを制御している（通常のジェスチャー遷移は `FacialExpressionsDisabled == false`、デフォルト状態は `FacialExpressionsDisabled == true` のみ）
:::

- [ここをクリック](vcc://vpm/addRepo?url=https%3A%2F%2Fvcc.vrcfury.com) して VRCFury をリポジトリに追加
- `Manage Project` をクリック
- VRCFury を検索
- `+` をクリック
  ![AddVRCFurry](/img/AddVRCFurry.png)
- Unity に戻る
- アバターを右クリック
- `Create Empty` をクリック
- 分かりやすい名前を付ける（例：`VRCFHashFT`）
- `Add Component` をクリック
- `Full Controller` を検索

![SearchFullController](/img/SearchFullController.png)

- `Full Controller (VRCFury)` を追加

- Controller セクションで `+` を2回クリック
- `FTOnly` と `Additive ET` を割り当て `Hash's_Things/AvatarName/anim/controllers`

- Menu セクションで `+` をクリック
- `SimpleFTControls` メニューを割り当て
- Prefix に `FT` を入力
- Parameters セクションで `+` をクリックし
- FTOnly parameters を割り当て
- Advanced options を開く
- Global parameters セクションで `+` をクリックし
- Global parameters に `*` を入力

- オプション

- `Override Menu Icon` を追加
- Menu Path に `FT` を入力
- アイコン欄のターゲットをクリック
- `FaceTrackingIcon2` を検索

これがそのように見えるはずです:

![VRCFuryComponentFilled](/img/VRCFuryComponentFilled.png)
</details>

### 手動設定

<details>
<summary>クリックして詳細を表示</summary>

- プロジェクトに `Avatars 3.0 Manager` が追加されていることを確認

![AddAV3Manager](/img/AddAV3Manager.png)

#### FX

- アバターを選択し、`Playable Layers` -> `FX` の横をダブルクリック

    ![SelectFX](/img/SelectFX.png)

- `Ctrl` + `D` で複製

- デフォルト `FX` 以外のレイヤーを削除

    - そのためには、アニメーションコントローラーとデフォルトのコントローラーを開いて、FXコントローラーの上に追加した内容を比較する必要があります。

        ![FXControllerDiff](/img/FXControllerDiff.png)

        > ここでは例として、`DressBand`レイヤーのみが追加されています。

        ![FXControllerPostDeletion](/img/FXControllerPostDeletion.png)

        > 残りのレイヤーを削除した後の私の作品はこんな感じです。

::: warning
`Eyes & Eyelids` が `No Change` 以外に設定されていないことを確認してください
:::

- FX コントローラー名の末尾に `FT` が付いた、対応するフェイストラッキング用アニメーターを割り当てます

- AV3 Emulator ウィンドウを開きます

  ![OpenAV3MWindow](/img/OpenAV3MWindow.png)

- アバターをアバタースロットにドラッグ＆ドロップします

- `FX` をクリックします

![AV3MWindowFXClick](/img/AV3MWindowFXClick.png)

- 一番下までスクロールします

  ![AV3MWindowFXScrolledDown](/img/AV3MWindowFXScrolledDown.png)

- `Add Controller to merge` をクリックします

- アニメーションロジックのみを含む、複製した FX コントローラーをドラッグ＆ドロップします

- `Clear all suffixes` をクリックします

  ![AV3MClearAllSuffixes](/img/AV3MClearAllSufixes.png)

- `Merge on copy` をクリックします

- これでアニメーターの設定は完了です！

#### パラメータ

- パラメータ名の末尾に `FT` が付いたものに切り替えます
- カスタムロジック用の `VRCAvatarParameters` を別ファイルに抽出します
- Avatar 3.0 Manager ウィンドウを開きます
- アバターをドラッグ＆ドロップします
- `Parameters` タブをクリックします

![AV3MParametersTab](/img/AV3MParametersTab.png)

- 分離したパラメータを追加します
- `Copy parameters` をクリックします

#### メニュー

- アバターディスクリプターの Expression ドロップダウン内にある Menu の横の項目をダブルクリックし、既存のメニューを選択します
- `+` ボタンをクリックします

![MenuAddButton](/img/MenuAddButton.png)

- メニュー名を `FT` に変更します

- アイコン横の小さなターゲットをクリックし、`Face` を検索して白い VRCFT ロゴを割り当てます

- タイプに `SubMenu` を選択します

- サブメニュー横の小さなターゲットをクリックし、`simple` を検索してシンプルなサブメニューを割り当てます

![MenuCompleted](/img/MenuCompleated.png)

</details>

## 完了！

これで、フェイストラッキング付きのカスタムアバターを VRChat にアップロードする準備が整いました。問題が発生した場合は、[私の Booth ページ](https://hashedits.booth.pm/) のメールアイコンから Booth DM にてご連絡ください。

![SendMessageButton](/img/SendMessageButton.png)