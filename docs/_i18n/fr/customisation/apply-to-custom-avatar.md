# Appliquer à un avatar personnalisé

Vous avez donc un avatar personnalisé et souhaitez utiliser mon face-tracking dessus. Voici un guide qui vous explique comment faire.

## Remplacement de la tête

Vous devrez remplacer la tête de votre modèle personnalisé par celle qui dispose des blendshapes de face-tracking et des bonnes weights.
Voici quelques étapes à suivre pour y parvenir.

### Localisez le fichier FBX principal de votre modèle personnalisé et sauvegardez-le.

Vous devez d'abord trouver le fichier FBX principal qui contient la tête de votre modèle.
Pour ce faire :

- Sélectionnez-le dans la hiérarchie de votre scène en cliquant dessus avec le bouton gauche de la souris :
  ![UnitySelectPrefab](/img/UnitySelectPrefab.png)
- Allez dans l'onglet Inspecteur (par défaut, à gauche).
  ![UnityInspectorTab](/img/UnityInspectorTab.png)
- Cliquez sur le composant Armature de l'avatar (la petite icône verte représentant une personne).

- Cela affichera le fichier dans l'explorateur de fichiers Unity

- Cliquez avec le bouton droit sur le fichier parent du composant « avatar armature »
- Exporter le package
- Décochez `Include dependencies` dans la fenêtre qui s'ouvre
- Appuyez sur `Export...`
- Sélectionnez l'emplacement où vous souhaitez stocker votre sauvegarde
- Revenez à Unity
- Cliquez à nouveau avec le bouton droit sur le fichier
- Cliquez sur `Show In Explorer`

### Ouvrez Blender

- Téléchargez Blender [ici](https://www.blender.org/download/)
- Suivez l'assistant d'installation
- Ouvrez Blender

### Effacez la scène

- Cliquez n'importe où dans la fenêtre pour supprimer l'écran de démarrage
- Appuyez sur `A` pour tout sélectionner
- Appuyez sur `Suppr` pour tout supprimer

### Importez votre modèle personnalisé

- Dirigez-vous vers le coin supérieur gauche de votre fenêtre
- Cliquez sur `File`
- Cliquez sur `Import`
- Cliquez sur `FBX`

![BlenderFBXImport](/img/BlenderFBXImport.png)

- Sélectionnez l'emplacement de votre modèle personnalisé

![BlenderImportFBXFile](/img/BlenderImportFBXFile.png)

- Appuyez sur le bouton `Import FBX` en bas à gauche de la fenêtre.

Votre modèle personnalisé devrait maintenant être dans Blender !
N'hésitez pas à l'enregistrer dans un endroit sûr en appuyant sur `Ctrl`+`S` pour sauvegarder votre progression :)

![CustomFBXImported](/img/BlenderCustomFBXImported.png)

### Importer le modèle de face-tracking

Mêmes étapes que précédemment

- Dirigez-vous en haut à gauche de votre fenêtre
- Cliquez sur `File`
- Cliquez sur `Import`
- Cliquez sur `FBX`

- Sélectionnez l'emplacement du modèle de face-tracking (sous Hash's_Things/AvatarName/fbx)

- Appuyez sur le bouton `Import FBX` en bas à gauche de la fenêtre.

![BlenderFTFBXImported](/img/BlenderFTFBXImported.png)

### Correspondance des matériaux

- Développez ce qui se trouve sous l'armature qui devrait s'appeler `Armature.001` et sélectionnez le mesh de la tête avec le face-tracking (appelé `Body.001` la plupart du temps).

- Sélectionnez l'onglet Matériaux ![MaterialsTabIcon](/img/MaterialsTabIcon.png)

- Cliquez sur l'icône noire des materials pour modifier le material actuellement sélectionné

![BrowseMaterials](/img/BrowseMaterials.png)

- Sélectionnez la version du material sans le « .001 » à la fin de son nom.

![SelectMatWo.001](/img/SelectMatWo.001.png)

- Sélectionnez le material ci-dessous.

![SelectMaterialBellow](/img/SelectMaterialBellow.png)

- Répétez le processus pour les autres materials

### Attribuez l'armature de l'avatar personnalisé au mesh de la tête avec face-tracking

- Développez ce qui se trouve sous l'armature qui devrait être nommée `Armature.001` et sélectionnez le mesh de la tête avec le face-tracking (appelé `Body.001` la plupart du temps).

- Sélectionnez l'onglet "modifiers" ![ModifiersTabIcon](/img/ModifiersTabIcon.png)

- Cliquez sur le champ Objet

![ObjectField](/img/ObjectField.png)

- Sélectionnez `Armature`

### Reparentez la tête

- Sélectionnez le mesh de la tête avec le face-tracking

- Faites-le glisser au-dessus de l'armature d'origine

- Avant de relâcher, maintenez les touches `Shift` + `Alt` enfoncées

- Relâchez le clic gauche

### Supprimer le reste du fbx du face-tracking

- Sélectionnez `Armature.001`

- Maintenez la touche `Shift` enfoncée

- Maintenez la touche `↓` enfoncée jusqu'à ce que tout soit sélectionné

- Appuyez sur `Del`

### Exportez votre travail

- Dirigez-vous en haut à gauche de votre fenêtre
- Cliquez sur `File`
- Cliquez sur `Export`
- Cliquez sur `FBX`

![BlenderFBXExport](/img/BlenderFBXExport.png)

- Sélectionnez l'emplacement de votre modèle personnalisé

- Cliquez sur le fichier

- Revenez à Unity

- Sélectionnez votre fichier FBX personnalisé dans l'explorateur de fichiers Unity

- Regardez la fenêtre de l'inspecteur

- Notez l'échelle de conversion des unités (ici, il s'agit de `1M/Unit`, mais cela peut également être `1cm/Unit`)

![UnityImportScale](/img/UnityImportScale.png)

- Dans la fenêtre Blender Export, sélectionnez l'échelle d'exportation appropriée `1M/Unit = FBX All` et `1cm/Unit = All Local`.

![BlenderApplyScaling](/img/BlenderApplyScaling.png)

- Appuyez sur `Export FBX`.

### Faire correspondre la rotation des yeux à partir du fbx du face-tracking

- Sélectionnez le fbx du face-tracking dans Unity
- Allez dans l'onglet Inspecteur
- Cliquez sur `Rig`
- Cliquez sur `Configure...`
- Cliquez sur `Muscles & Settings`
- Dans le groupe `Per-Muscle Settings`, cliquez sur `Head` et développez les éléments suivants : `Eye Down-Up`, `Eye In-Out`, `Eye Down-Up`, `Eye In-Out`
- Faites une capture d'écran pour mémoriser les paramètres

![MusclesSettings](/img/MusclesSettings.png)

- Appuyez sur `Done`

- Répétez la même opération Pour accéder aux paramètres des muscles oculaires sur votre fbx personnalisé

- Entrez les paramètres que vous avez capturés précédemment

## Attribuez le menu, les paramètres et les contrôleurs d'animation

- Glissez-déposez le prefab de face-tracking dans votre scène

- Cliquez dessus avec le bouton droit de la souris

- Cliquez sur `Properties`

- Placez la deuxième fenêtre d'inspection côte à côte avec la fenêtre d'origine.

![InspectorsSideBySide](/img/InspectorsSideBySide.png)

- Sélectionnez votre prefab.

- Cliquez sur `Playable Layers` dans les deux fenêtres d'inspection.

- Cliquez sur « Additive animation controller » dans la fenêtre d'inspection du prefab de face-tracking.

![AnimationControllerHighlight](/img/AnimationControllerHighlight.png)

- Glissez-déposez le contrôleur d'animation mis en surbrillance dans l'emplacement additif de votre prefab

- Procédez de la même manière pour le contrôleur FX

- Faites défiler les deux inspecteurs jusqu'en bas et cliquez sur Expressions

- Remplacez les menus de la même manière

## Fusionner avec des configurations existantes : logique supplémentaire

Cette section est intéressante si vous disposez d'une logique de contrôleur d'animation existante qui permet d'activer des boutons ou des systèmes personnalisés sur votre avatar.

Modular Avatar n'est pas pris en charge car il ne réorganise pas l'ID des layer drivers de VRC, ce qui perturbe ma logique de smoothing.

### VRCFury

Veuillez noter que je ne fournirai pas d'assistance pour cette méthode de fusion de mes contrôleurs d'animation.

::: warning ATTENTION
Vérifiez que votre animateur respecte les points suivants :

- Il ne dispose d'aucun état qui définit la section `Eyes & Eyelids` d'un  [Animator Tracking Control](https://creators.vrchat.com/avatars/state-behaviors/#animator-tracking-control) animation state behavior sur une valeur autre que `No Change`.
- Utilise `FacialExpressionsDisabled` pour supprimer tous les gestes (toutes les transitions de gesture normales doivent avoir une condition sur `FacialExpressionsDisabled` == `false` et avoir un état par défaut avec une seule condition d'état : `FacialExpressionsDisabled` == `true`)
:::

- Ajoutez VRCFury à votre liste de dépôts en cliquant [ici](vcc://vpm/addRepo?url=https%3A%2F%2Fvcc.vrcfury.com)
- Cliquez sur `Manage Project`
- Recherchez VRCFury
- Cliquez sur le bouton `+`
  ![AddVRCFurry](/img/AddVRCFurry.png)
- Revenez à Unity
- Cliquez avec le bouton droit sur votre avatar
- Cliquez sur `Create Empty`
- Donnez-lui un nom qui a du sens (par exemple : `VRCFHashFT`)
- Cliquez sur le bouton `Add Component`
- Recherchez `Full Controller`

  ![SearchFullController](/img/SearchFullController.png)

- Cliquez sur le texte `Full Controller (VRCFury)` pour ajouter le composant

- Cliquez deux fois sur le bouton `+` sous la section Controller
- Attribuez les contrôleurs `FTOnly` et `Additive ET` qui se trouvent sous `Hash's_Things/AvatarName/anim/controllers`

- Cliquez sur le bouton `+` sous la section Menu
- Attribuez le menu SimpleFTControls sous Fichier
- Écrivez `FT` sous Prefix
- Cliquez sur le bouton `+` sous la section parameters
- Attribuez les paramètres FTOnly
- Cliquez sur Options avancées
- Cliquez sur le bouton `+` sous global parameters
- Écrivez `*`

- Facultatif

    - Ajoutez un composant `Override Menu Icon`.
    - Écrivez `FT` dans le champ Menu Path.
    - Cliquez sur la cible à côté de l'emplacement de l'icône.
    - Recherchez `FaceTrackingIcon2`.

- Voici à quoi cela devrait ressembler :

![VRCFuryComponentFilled](/img/VRCFuryComponentFilled.png)

### Manuel

- Assurez-vous que `Avatars 3.0 Manager` a été ajouté aux paquets de votre projet

![AddAV3Manager](/img/AddAV3Manager.png)

#### FX

- Ouvrez votre animateur en sélectionnant votre avatar, faites défiler jusqu'à `playable layers` et double-cliquez sur l'élément à côté de `FX`.

  ![SelectFX](/img/SelectFX.png)

- Dupliquez-le en le sélectionnant et en appuyant sur `Ctrl` + `D`.

- Identifiez et supprimez tout ce qui ne fait pas partie du contrôleur `FX` par défaut.

  - Pour ce faire, vous devrez comparer ce que vous avez ajouté au-dessus de votre contrôleur FX en ouvrant votre contrôleur d'animation et celui par défaut.

    ![FXControllerDiff](/img/FXControllerDiff.png)

    > Ici, par exemple, seule le layer `DressBand` a été ajoutée.

    ![FXControllerPostDeletion](/img/FXControllerPostDeletion.png)

    > Voici à quoi ressemble le mien après avoir supprimé les autres calques

::: warning ATTENTION
Assurez-vous qu'aucun état ne définit la section `Eyes & Eyelids` d'un [Animator Tracking Control](https://creators.vrchat.com/avatars/state-behaviors/#animator-tracking-control) animation state behavior sur une valeur autre que `No Change`
:::

- Attribuez l'animateur de face-tracking qui correspond au nom de votre contrôleur FX avec FT à la fin.

- Ouvrez la fenêtre d'AV3 Emulator.

![OpenAV3MWindow](/img/OpenAV3MWindow.png)

- Glissez-déposez votre avatar dans l'emplacement prévu à cet effet.

- Cliquez sur FX.

![AV3MWindowFXClick](/img/AV3MWindowFXClick.png)

- Faites défiler vers le bas

![AV3MWindowFXScrolledDown](/img/AV3MWindowFXScrolledDown.png)

- Cliquez sur `Add Controller to merge`

- Glissez-déposez la copie de votre contrôleur FX contenant uniquement votre logique d'animation

- Cliquez sur `Clear All Suffixes`

  ![AV3MClearAllSuffixes](/img/AV3MClearAllSufixes.png)

- Cliquez sur `Merge on copy`

- Vous avez terminé avec l'animateur !

#### Paramètres

- Remplacez vos paramètres par ceux qui correspondent au nom de vos paramètres avec FT à la fin.
- Extrayez votre logique personnalisée VRCAvatarParameters dans un autre fichier.
- Ouvrez la fenêtre Avatar 3.0 Manager.
- Glissez-déposez votre avatar.
- Cliquez sur l'onglet parameters.

![AV3MParametersTab](/img/AV3MParametersTab.png)

- Ajoutez vos paramètres isolés.
- Cliquez sur `Copy parameters`

#### Menus

- Sélectionnez votre menu existant en double-cliquant sur l'élément à côté du menu dans le menu déroulant « Expression » de l'avatar descriptor.
- Cliquez sur le bouton `+`.

![MenuAddButton](/img/MenuAddButton.png)

- Renommez le menu en `FT`.

- Cliquez sur la petite cible près de l'icône, recherchez `Face` et attribuez le logo VRCFT blanc

- Sélectionnez `SubMenu` comme type

- Cliquez sur la petite cible à côté du sous-menu, recherchez `simple` et attribuez le sous-menu simple

![MenuCompleted](/img/MenuCompleated.png)