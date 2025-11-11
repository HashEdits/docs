# Problèmes courants

## La version de l'avatar indiquée sur la page de la boutique n'est plus disponible.

Si la version spécifique du pack d'avatar n'est plus disponible, veuillez me contacter via les messages privés Booth [ici](https://hashedits.booth.pm/conversations).

Je ferai de mon mieux pour fournir une mise à jour afin de maintenir la compatibilité aussi rapidement que possible.

## J'ai ajusté mon avatar avec des blendshapes et un clipping se produit lorsque je cligne des yeux

Ce guide est utile si vous avez ajusté votre modèle avec des blendshapes.

### Localisez le fichier FBX principal de votre modèle personnalisé et sauvegardez-le.

Vous devez d'abord trouver le fichier FBX principal qui contient la tête de votre modèle.
Pour ce faire :

- Sélectionnez-le dans la hiérarchie de votre scène en cliquant dessus avec le bouton gauche de la souris :
  ![UnitySelectPrefab](/img/UnitySelectPrefab.png)
- Allez dans l'onglet Inspecteur (par défaut, à gauche).
  ![UnityInspectorTab](/img/UnityInspectorTab.png)
- Cliquez sur le composant Armature de l'avatar (la petite icône verte représentant une personne).

- Cela fera apparaître le fichier dans l'explorateur de fichiers Unity

- Cliquez avec le bouton droit sur le fichier parent du composant « avatar armature »
- Exporter le package
- Décochez `Include dependencies` dans la fenêtre qui s'ouvre
- Appuyez sur `Exporter...`
- Sélectionnez l'emplacement où vous souhaitez stocker votre sauvegarde
- Revenez à Unity
- Cliquez à nouveau avec le bouton droit sur le fichier
- Cliquez sur `Show In Explorer`

### Ouvrez Blender

- Téléchargez Blender [ici](https://www.blender.org/download/)
- Suivez l'assistant d'installation
- Ouvrez Blender

### Nettoyer la scène

- Cliquez n'importe où dans la fenêtre pour supprimer l'écran de démarrage.
- Appuyez sur `A` pour tout sélectionner.
- Appuyez sur `Suppr` pour tout supprimer.

### Importer votre modèle personnalisé

- Placez-vous en haut à gauche de votre fenêtre.
- Cliquez sur `File`.
- Cliquez sur `Import`.
- Cliquez sur `FBX`

  ![BlenderFBXImport](/img/BlenderFBXImport.png)

- Sélectionnez l'emplacement de votre modèle personnalisé.

  ![BlenderImportFBXFile](/img/BlenderImportFBXFile.png)

- Appuyez sur le bouton `Import FBX` en bas à gauche de la fenêtre.

Votre modèle personnalisé devrait maintenant être dans Blender !
N'hésitez pas à l'enregistrer dans un endroit sûr en appuyant sur `Ctrl` + `S` pour enregistrer votre progression.

![CustomFBXImported](/img/BlenderCustomFBXImported.png)

### Générez un mélange de vos blendshapes.

De retour dans Unity, notez votre mélange de blendshapes et reproduisez-le dans Blender.

- Je vous suggère d'utiliser l'Editor Patcher de [nekobako](https://x.com/nekobako). Voici [ici](vcc://vpm/addRepo?url=https%3A%2F%2Fvpm.nekobako.net/index.json) un lien qui l'ajoutera à votre VCC

- Cliquez sur `Manage Project` dans votre projet

- Recherchez `Editor Patcher` et cliquez sur l'icône `+` pour l'ajouter à vos dépôts.

![AddEditorPatcher](/img/AddEditorPatcher.png)

- Sélectionnez le mesh de votre visage sur votre avatar (ici, il s'appelle `Body`)

![SelectFaceMesh](/img/SelectFaceMesh.png)

- Développez la section « Blendshapes »

- Appuyez sur le petit `0` à côté de la barre de recherche pour n'afficher que les blendshapes qui ne sont pas égales à zéro

![CustomShapeMixUnity](/img/CustomShapeMixUnity.png)

- Sélectionnez le mesh de votre visage dans Blender en cliquant simplement dessus du viewport

- Pour sélectionner la valeur dans Blender, allez dans l'onglet des propriétés des données (3 points verts reliés entre eux) ![DataPropertiesIcon](/img/DataPropertiesIcon.png)

- Développez le menu ShapeKeys
- Cliquez sur la flèche de recherche juste au-dessus de la case à cocher `Relative`

  ![ShapeKeyMenu](/img/ShapeKeyMenu.png)

- Recherchez les mêmes blendshapes que vous avez personnalisés dans Unity (dans mon cas, il s'agit de `browDownAngryRight` et `browDownAngryLeft`)

- Définissez-les sur les mêmes valeurs (attention, les shapekeys de Blender vont de 0 à 1, tandis que ceux de Unity vont de 0 à 100)

  ![ShapeKeysMenuBlendShapesSet](/img/ShapeKeysMenuBlendShapesSet.png)

- Cliquez sur la petite flèche vers le bas sous le bouton `-`.

- Cliquez sur `New Shape from mix`.

  ![ShapeKeyMenuMix](/img/ShapeKeyMenuMix.png)

- Appuyez sur le petit `X` près de la barre de recherche et faites défiler vers le bas de la liste pour réinitialiser votre recherche.

- Appuyez sur le petit `X` sur la même ligne que la case à cocher `Relative`.

- Faites défiler vers le bas jusqu'à `Copy the name of your shapekey mix` (vous pouvez double-cliquer sur le nom pour sélectionner le texte) (dans mon cas, c'est `Key 241`).

  ![ShapeKeyMixCreated](/img/ShapeKeyMixCreated.png)

### Application de la correction

- Recherchez `EyeClosed` dans la liste des shapekeys de la même manière que vous avez recherché vos shapekeys personnalisés

- Cliquez sur le Gizmo `Y-` ou appuyez sur `Numpad 1` pour que l'avatar regarde vers l'avant

  ![Y-Gizmo](/img/Y-Gizmo.png)

- Passez en mode édition en appuyant sur la touche `Tab` tout en plaçant votre souris sur le point de vue.

- Cliquez sur le bouton `Xray Mode` situé dans le coin supérieur droit de votre point de vue.

![XrayMode](/img/XrayMode.png)

- Sélectionnez approximativement le côté droit de votre visage.

![RightSideSelection.png](/img/RightSideSelection.png)

- Sélectionnez la ShapeKey `EyeClosedRight`

- Appuyez sur `Ctrl` + `V` au-dessus du viewport

- Sélectionnez `Blend from Shape`

  ![BlendFromShape](/img/BlendFromShape.png)

- Cliquez sur la petite flèche pour développer le menu `Blend from Shape`

  ![BlendFromShapeMenu](/img/BlendFromShapeMenu.png)

- Collez le nom de votre mélange personnalisé (`Key 241` pour moi)

- Assurez-vous que `Add` soit coché

- Définissez un poids (weight) de `-1`

  ![BlendFromShapeCompleted](/img/BlendFromShapeCompleted.png)

  > Voici à quoi cela devrait ressembler.

- Cliquez n'importe où dans votre champ de vision pour effacer votre sélection.

- Sélectionnez approximativement le côté gauche de votre visage.

  ![LeftSideSelection](/img/LeftSideSelction.png)

- Répétez le processus en sélectionnant `EyeClosedLeft`.

### Exportez votre travail

- Dirigez-vous vers le coin supérieur gauche de votre fenêtre.
- Cliquez sur `File`.
- Cliquez sur `Export`.
- Cliquez sur `FBX`.

![BlenderFBXExport](/img/BlenderFBXExport.png)

- Sélectionnez l'emplacement de votre modèle personnalisé.

- Cliquez sur le fichier.

- Revenez à Unity.

- Sélectionnez votre fichier FBX personnalisé dans l'explorateur de fichiers Unity.

- Regardez la fenêtre de l'inspecteur.

- Notez l'échelle de conversion des unités (ici, il s'agit de `1M/Unit`, mais cela peut également être `1cm/Unit`).

![UnityImportScale](/img/UnityImportScale.png)

- Dans la fenêtre « Export » de Blender, sélectionnez l'échelle d'exportation appropriée `1M/Unit = FBX All` et `1cm/Unit = All Local`

![BlenderApplyScaling](/img/BlenderApplyScaling.png)

- Appuyez sur `Export FBX`

Vous avez terminé !

## Rotation des yeux défectueuse

Ceci est probablement dû au fait que le composant avatar ne fait pas référence aux bons bones des yeux, ce qui peut être causé par plusieurs facteurs différents :

Vos bones ne sont pas mappés

- Pour identifier le problème : sélectionnez le fichier fbx de votre avatar dans Unity, allez dans l'onglet `Rig`->`configure`, puis sélectionnez `Head` et vérifiez si les bones des yeux sont correctement assignés

- Pour corriger le problème : s'ils ne sont pas assignés, sélectionnez-les dans la hiérarchie à gauche.

La référence aux bones des yeux est manquante.

- Pour identifier le problème : cela est probablement dû à l'échange du mesh de la tête.

- Pour corriger le problème : effectuez un « head swap » dans Blender. Voici [un guide étape par étape pour vous aider](/fr/customisation/apply-to-custom-avatar.md#head-swap).

Une autre animation empêche l'œil de bouger.

- Pour identifier le problème : utilisez les mêmes contrôleurs d'animation que les prefabs que je fournis et supprimez tous les composants modulaires d'avatar ou VRCFury.

- Pour corriger le problème : vérifiez les composants [Animation Tracking Control](https://creators.vrchat.com/avatars/state-behaviors/#animator-tracking-control) qui peuvent définir `Eyes & Eyelids`, l'état `Tracking` et/ou ajoutez un par un chaque avatar modulaire ou composant vrcfury afin d'identifier celui qui cause le problème.

## Le script Patcher génère des erreurs rouges.

Il s'agit d'un problème courant sur certains ordinateurs dont la langue est différente de l'anglais.

Pour le résoudre :

- Ouvrez le panneau de configuration Windows.
- Horloge et région.
- Région.
- Sélectionnez `Administration` en haut de la fenêtre.
- Cliquez sur `Modify global settings` sous `Language for non Unicode programs`.
- Sélectionnez `English (United States)`.

> Vous pouvez annuler les modifications après avoir patché le modèle.

## Ma configuration personnalisée des blendshapes est réinitialisée lorsque je télécharge mon avatar.

Cela est probablement dû au fait que l'avatar dispose d'une animation de visage au repos qui réinitialise tout ou partie de votre configuration personnalisée des blendshapes.

Pour résoudre ce problème, enregistrez votre configuration personnalisée par-dessus cette animation au repos.
