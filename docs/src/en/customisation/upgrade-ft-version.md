# Upgrade face tracking version

Every so often I will revisit some of my face tracking add-ons to keep them up to date with my newer findings, here's a guide on how to update


::: warning
If you are upgrading to a native setup DO NOT CLICK `Auto-Fill Blendshapes`
Please make sure your are using version 3.10.6 of the VRCSDK & are using [VRCFT from steam](https://store.steampowered.com/app/3329480/VRCFaceTracking/)
:::


## Standard Prefab

<details>
<summary>If you've used the prefab I provide, click here</summary>

### Create prefabs of your avatar(s)

Drag and drop your avatar(s) in your unity file explorer and click `Create Original Prefab` if a dialog box opens

### Back it up as a UnityPackage

Right click on your prefab, click `Export Package ...` and then `Export` on the new window that appears

![PatchingWindow](/src/img/ExportAsUnityPackage.gif)

### Delete the fbx

delete the folder `Hash's_Things/AvatarName/fbx`

### Delete the patcher folder

delete the folder `Hash's_Things/AvatarName/Patcher`

### Import the new face tracking package in your project

Drag and drop the UnityPackage file you've downloaded from Booth or Kofi above your unity window and click `Import` at the bottom of the new window that apears

### Patch the model like you did the first time

- Go at the top of your Unity window and click on `Tools`->`Hash`->`AvatarName`

![PatchingWindow](/src/img/SummonPatchingWindow.png)

> Some will have multiple options for different prefabs, you're free to do the one you want or all of them

- Click the `Patch` button on the window that opens

![alt text](/src/img/PatcherWindow.png)

### Make sure you are using the same animation controllers as the base FT prefab

- Navigate to `Hash's_Things/AvatarName/prefabs`
- Right Click → Properties
- Scroll down and look at the animation controllers
- Select your avatar
- Make sure that the animation controllers and parameters are matching

### You're done!

</details>

## Custom Avatar

<details>
<summary>If you've unpacked the prefab I provide or applied it to a custom avatar, click here</summary>

### Create prefabs of your avatar(s)

Drag and drop your avatar(s) in your unity file explorer and click `Create Original Prefab` if a dialog box opens

### Back it up as a UnityPackage

Right click on your prefab, click `Export Package ...` and then `Export` on the new window that appears

![PatchingWindow](/src/img/ExportAsUnityPackage.gif)

### Delete the fbx

delete the folder `Hash's_Things/AvatarName/fbx`

### Delete the patcher folder

delete the folder `Hash's_Things/AvatarName/Patcher`

### Import the new face tracking package in your project

Drag and drop the UnityPackage file you've downloaded from Booth or Kofi above your unity window and click `Import` at the bottom of the new window that apears

### Patch the model like you did the first time

- Go at the top of your Unity window and click on `Tools`->`Hash`->`AvatarName`

![PatchingWindow](/src/img/SummonPatchingWindow.png)

> Some will have multiple options for different prefabs, you're free to do the one you want or all of them

- Click the `Patch` button on the window that opens

![alt text](/src/img/PatcherWindow.png)

### Copy Unity Setup

- Drag and drop the face tracking prefab in your scene

- Right click on it

- Click properties

- Put the second inspector window side by side with the original one

![InspectorsSideBySideNative](/src/img/InspectorsSideBySideNative.png)

- Right click on the avatar descriptor component of the FT prefab

![InspectorCopy](/src/img/InspectorCopy.png)

- Click `Copy Component`

- Select your prefab

- Right click on your avatar's descriptor component

![InspectorsPaste](/src/img/InspectorPaste.png)

- Click `Paste Component Values`

- Develop the `EyeLook` section

- Develop the `Transforms` section

![DescriptorEyeLookTransformSection](/src/img/DescriptorEyeLookTransformSection.png)

- Drag and drop your avatar's eye bones in

- Develop the `Face Tracking` section

![DescriptorFTMeshError](/src/img/DescriptorFTMeshError.png)

- Assign the same meshes as the ones in the face tracking version

![DescriptorFTMeshFixed](/src/img/DescriptorFTMeshFixed.png)

</details>
