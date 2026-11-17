# Mise à jour de la version du face tracking

De temps en temps, je revisite certains de mes add-ons de face tracking afin de les mettre à jour en fonction de mes dernières découvertes. Voici un guide expliquant comment procéder à une mise à jour :

::: warning
Si vous effectuez une mise à niveau vers une configuration native, NE CLIQUEZ PAS sur `Auto-Fill Blendshapes`
Veuillez vous assurer que vous utilisez la version 3.10.6 du VRCSDK ou une version plus récente, et que vous utilisez [VRCFT via Steam](https://store.steampowered.com/app/3329480/VRCFaceTracking/)
:::


## Prefab standard

<details>
<summary>Si vous avez utilisé le prefab que je fournis, cliquez ici</summary>

### Créez des prefabs de votre ou vos avatar(s).

Glissez-déposez votre ou vos avatar(s) dans l'explorateur de fichiers Unity et cliquez sur `Create Original Prefab` si une boîte de dialogue s'ouvre.

### Faites une sauvegarde avec un UntiyPackage

Faites click droit sur votre prefab, clickez `Export Package ...` puis sur `Export` dans la nouvelle fenêtre qui apparait

![PatchingWindow](/src/img/ExportAsUnityPackage.gif)

### Supprimer le fbx

Supprimez le dossier `Hash's_Things/AvatarName/fbx`.

### Supprimer le patcher

Supprimez le dossier `Hash's_Things/AvatarName/Patcher`.


### Importer le nouveau package de face tracking dans votre projet

Glissez et déposer le UnityPackage que vous avez télécharger depuis Booth out KoFi sur votre fenettre Unity et clickez `Import` sur la fenetre qui apparait

### Patchez le modèle comme vous l'avez fait la première fois.

- Allez en haut de votre fenêtre Unity et cliquez sur `Tools`->`Hash`->`AvatarName`.

![PatchingWindow](/src/img/SummonPatchingWindow.png)

> Certains auront plusieurs options pour différents prefabs, vous êtes libre de choisir celle que vous voulez ou de toutes les ouvrires.

- Cliquez sur le bouton `Patch` dans la fenêtre qui s'ouvre.

![alt text](/src/img/PatcherWindow.png)

### Assurez-vous d'utiliser les mêmes contrôleurs d'animation que le prefab FT de base.

- Accédez à `Hash's_Things/AvatarName/prefabs`.
- Cliquez avec le bouton droit → Properties.
- Faites défiler vers le bas et regardez les contrôleurs d'animation.
- Sélectionnez votre avatar.
- Assurez-vous que les contrôleurs d'animation et les paramètres correspondent.

### Vous avez terminé !

</details>

## Avatar personnalisé

<details>
<summary>Si vous avez décompressé le préfab que je vous fournis ou si vous l’avez appliqué à un avatar personnalisé, cliquez ici</summary>

### Créer des préfabs de votre ou vos avatars

Glissez-déposez votre ou vos avatars dans l’explorateur de fichiers Unity, puis cliquez sur `Create Original Prefab` si une boîte de dialogue s’ouvre

### Sauvegardez-le sous forme de UnityPackage

Cliquez avec le bouton droit sur votre préfab, sélectionnez `Export Package ...`, puis cliquez sur `Export` dans la nouvelle fenêtre qui s'affiche

![PatchingWindow](/src/img/ExportAsUnityPackage.gif)

### Supprimez le fichier FBX

Supprimez le dossier `Hash's_Things/AvatarName/fbx`

### Supprimez le dossier du patcher

Supprimez le dossier `Hash's_Things/AvatarName/Patcher`

### Importez le nouveau package de face tracking dans votre projet

Glissez-déposez le fichier UnityPackage que vous avez téléchargé depuis Booth ou Kofi au-dessus de votre fenêtre Unity, puis cliquez sur `Import` en bas de la nouvelle fenêtre qui s'affiche

### Appliquez le patch au modèle comme vous l’avez fait la première fois

- En haut de votre fenêtre Unity, cliquez sur `Tools`->`Hash`->`AvatarName`

![PatchingWindow](/src/img/SummonPatchingWindow.png)

> Certains disposeront de plusieurs options pour différents prefabs ; vous êtes libre de choisir celle que vous souhaitez ou de toutes les appliquer

- Cliquez sur le bouton `Patch` dans la fenêtre qui s'ouvre

![texte alternatif](/src/img/PatcherWindow.png)

### Copier la configuration Unity

- Glissez-déposez le préfab de face tracking dans votre scène

- Faites un clic droit dessus

- Cliquez sur properties

- Placez la deuxième fenêtre de l’Inspecteur côte à côte avec la fenêtre d’origine

![InspectorsSideBySideNative](/src/img/InspectorsSideBySideNative.png)

- Faites un clic droit sur le composant "avatar descriptor" du préfab FT

![InspectorCopy](/src/img/InspectorCopy.png)

- Cliquez sur `Copy Component`

- Sélectionnez votre prefab

- Faites un clic droit sur le composant "avatar descriptor" de votre avatar

![InspectorsPaste](/src/img/InspectorPaste.png)

- Cliquez sur `Paste Component Values`

- Développez la section `Face Tracking`

![DescriptorFTMeshError](/src/img/DescriptorFTMeshError.png)

- Attribuez les mêmes meshs que ceux de la version avec face tracking

![DescriptorFTMeshFixed](/src/img/DescriptorFTMeshFixed.png)

</details>