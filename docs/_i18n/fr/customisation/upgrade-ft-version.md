# Mise à jour de la version du face tracking

De temps en temps, je revisite certains de mes add-ons de face tracking afin de les mettre à jour en fonction de mes dernières découvertes. Voici un guide expliquant comment procéder à une mise à jour :

## Créez des prefabs de votre ou vos avatar(s).

Glissez-déposez votre ou vos avatar(s) dans l'explorateur de fichiers Unity et cliquez sur `Create Original Prefab` si une boîte de dialogue s'ouvre.

## Faites une sauvegarde avec un UntiyPackage

Faites click droit sur votre prefab, clickez `Export Package ...` puis sur `Export` dans la nouvelle fenêtre qui apparait

![PatchingWindow](/img/ExportAsUnityPackage.gif)

## Supprimer le fbx

Supprimez le dossier `Hash's_Things/AvatarName/fbx`.

## Supprimer le patcher

Supprimez le dossier `Hash's_Things/AvatarName/Patcher`.


## Importer le nouveau package de face tracking dans votre projet

Glissez et déposer le UnityPackage que vous avez télécharger depuis Booth out KoFi sur votre fenettre Unity et clickez `Import` sur la fenetre qui apparait

## Patchez le modèle comme vous l'avez fait la première fois.

- Allez en haut de votre fenêtre Unity et cliquez sur `Tools`->`Hash`->`AvatarName`.

![PatchingWindow](/img/SummonPatchingWindow.png)

> Certains auront plusieurs options pour différents prefabs, vous êtes libre de choisir celle que vous voulez ou de toutes les ouvrires.

- Cliquez sur le bouton `Patch` dans la fenêtre qui s'ouvre.

![alt text](/img/PatcherWindow.png)

## Assurez-vous d'utiliser les mêmes contrôleurs d'animation que le prefab FT de base.

- Accédez à `Hash's_Things/AvatarName/prefabs`.
- Cliquez avec le bouton droit → Properties.
- Faites défiler vers le bas et regardez les contrôleurs d'animation.
- Sélectionnez votre avatar.
- Assurez-vous que les contrôleurs d'animation et les paramètres correspondent.

## Vous avez terminé !