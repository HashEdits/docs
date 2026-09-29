# Common issues

## The avatar version listed on the store page is no longer available

If the specific avatar package version is not available anymore please contact me trough Booth DMs By clicking the mail icon on [my Booth page](https://hashedits.booth.pm/)

![SendMessageButton](/src/img/SendMessageButton.png)

I will try my best to provide an update to retain compatibility as fast as possible

## I've adjusted my avatar with blendshapes and clipping occurs when blinking

This guide is useful if you've adjusted your model with blendshapes.

There are a couple of ways to go about it, the first might not be perfect but is much more accesible, the second method is a bit longer but is sure to yield the best results

### Accesible but non perfect fix

<details>
<summary>Click here to develop this section</summary>

- In your unity project file explorer window search for `Eye_Closed`

- Select one of the following animation clips `Eye_Closed_Left`, `Eye_Closed_Right`, `Eye_Closed_Squint_Left` Or `Eye_Closed_Squint_Right`

- Pull the preview window up on the inspector window

![AnimPreviewWindow](/src/img/AnimPreviewWindow.png)

- Drag and drop your avatar in the preview window

![AnimPreviewWindowAvatar](/src/img/AnimPreviewWindowAvatar.png)

- Open the Animation window if you don't have it opened already (Press `Ctrl`+`6`)

- Lower the value of `EyeClosedRight` or `EyeClosedLeft` to a lower value until your eye doesn't clip anymore in the animation preview window

- Repeat for the other EyeClosed animation clips `Eye_Closed_Left`, `Eye_Closed_Right`, `Eye_Closed_Squint_Left` Or `Eye_Closed_Squint_Right`

</details>


### Perfect but Lengthy fix

<details>
<summary>Click here to develop this section</summary>


#### Locate your custom model's main FBX file and back it up

First you'll need to find your main FBX file that contains the head of your model.
To do so:

- Select it in your scene hierarchy by left clicking on it:
  ![UnitySelectPrefab](/src/img/UnitySelectPrefab.png)
- Go to the inspector tab (By default on the left hand side)
  ![UnityInspectorTab](/src/img/UnityInspectorTab.png)
- Click on the avatar armature component (the little green icon of a person)

- This will reveal the file in the unity file explorer

- Right Click on the parent file of the avatar armature component
- Export Package
- Untick `Include dependencies` in the window that opens
- press `Export...`
- Select where you want your backup to be stored at
- Return back to Unity
- Right Click on the file again
- Click `Show In Explorer`

#### Open Blender

- Download Blender [here](https://www.blender.org/download/)
- Follow the install wizard
- Open Blender

#### Clear the scene

- Click anywhere on the viewport to remove the startup splash screen
- press `A` to select everything
- press `Del` to delete everything

#### Import your custom model

- Direct yourself at the top left of your window
- Click `File`
- Click `Import`
- Click `FBX`

  ![BlenderFBXImport](/src/img/BlenderFBXImport.png)

- Select where your custom model is located at

  ![BlenderImportFBXFile](/src/img/BlenderImportFBXFile.png)

- Press the `Import FBX` button at the bottom left of the window

Your custom model should now be into Blender!
Feel free to save it somewhere safe by pressing `Ctrl`+`S` to save your progress

![CustomFBXImported](/src/img/BlenderCustomFBXImported.png)

#### Generate a mix of your blendshapes

Back in unity take note of your blendshape mix and reproduce it in blender

- I suggest using [nekobako](https://x.com/nekobako)'s Editor Patcher, [here's](vcc://vpm/addRepo?url=https%3A%2F%2Fvpm.nekobako.net/index.json) a link that will add it to your VCC

- Click `Manage Project` on your project

- Search `Editor Patcher` and click the `+` icon to it to your repositories

![AddEditorPatcher](/src/img/AddEditorPatcher.png)

- Select your face mesh on your avatar (It's called `Body` Here)

![SelectFaceMesh](/src/img/SelectFaceMesh.png)

- Develop the `Blendshapes` section

- Press the little `0` next to the search bar to only show the blendshapes that are non zero

![CustomShapeMixUnity](/src/img/CustomShapeMixUnity.png)

- Select your face mesh in Blender by simply clicking on it in the viewport

- To select the value in blender go to the data properties tab (3 green dots linked together) ![DataPropertiesIcon](/src/img/DataPropertiesIcon.png)

- Develop the ShapeKeys menu
- Click the search arrow right above the `Relative` checkbox

  ![ShapeKeyMenu](/src/img/ShapeKeyMenu.png)

- Search for the same blendshapes you have customized on Unity (in my case here it's `browDownAngryRight` & `browDownAngryLeft`)

- Set them to the same values (be careful blender shapekeys are 0→1 where unity is 0→100)

  ![ShapeKeysMenuBlendShapesSet](/src/img/ShapeKeysMenuBlendShapesSet.png)

- Click the little down arrow bellow the `-` button

- Click `New Shape from Mix`

  ![ShapeKeyMenuMix](/src/img/ShapeKeyMenuMix.png)

- Press the little `X` near the search bar and scroll at the bottom of the list to reset your search

- Press the Little `X` On the same line as the `Relative` tickbox

- Scroll down at the Copy the name of your shapekey mix (you can double click the name to select the text) (in my case it's `Key 241`)

  ![ShapeKeyMixCreated](/src/img/ShapeKeyMixCreated.png)

#### Applying the fix

- Search `EyeClosed` in the shapekey list the same way you searched your custom shapekeys

- Click the Y- Gizmo or press `Numpad 1` to make the avatar face forward

  ![Y-Gizmo](/src/img/Y-Gizmo.png)

- Go into edit mode by pressing `Tab` while having your mouse over the viewpoint

- Click the Xray Mode button at the top right corner of your viewpoint

  ![XrayMode](/src/img/XrayMode.png)

- Select Roughly the right side of your face

![RightSideSelection.png](/src/img/RightSideSelection.png)

- Select the `EyeClosedRight` ShapeKey

- Press `Ctrl` + `V` above your viewport

- Select `Blend from Shape`

  ![BlendFromShape](/src/img/BlendFromShape.png)

- Click the little arrow to develop the Blend from Shape menu

  ![BlendFromShapeMenu](/src/img/BlendFromShapeMenu.png)

- Paste the name of your custom mix (`Key 241` for me)

- Make sure `Add` is ticked

- Set a weight of `-1`

  ![BlendFromShapeCompleted](/src/img/BlendFromShapeCompleted.png)

  > This is what it should look like

- Click in anywhere on your viewpoint to clear your selection

- Roughly select the Left side of your face

  ![LeftSideSelection](/src/img/LeftSideSelction.png)

- Reproduce the process with selecting `EyeClosedLeft`

#### Export your work

- Direct yourself at the top left of your window
- Click `File`
- Click `Export`
- Click `FBX`

![BlenderFBXExport](/src/img/BlenderFBXExport.png)

- Select where your custom model is located at

- Click the file

- Switch back to Unity

- Select your custom FBX file in the Unity file explorer

- Look at the inspector window

- Take note of the Convert Units scaling (Here it's `1M/Unit` but it can also be `1cm/Unit`)

![UnityImportScale](/src/img/UnityImportScale.png)

- In the Blender Export window take the appropriate export scaling `1M/Unit = FBX All` & `1cm/Unit = All Local`

![BlenderApplyScaling](/src/img/BlenderApplyScaling.png)

- Press `Export FBX`

#### You're done!

</details>

## Eye rotation broken

This issue is caused by not having the correct bones assigned in your avatar descriptor

to fix it:

- Develop the `EyeLook` section

- Develop the `Transforms` section

![DescriptorEyeLookTransformSection](/src/img/DescriptorEyeLookTransformSection.png)

- Remplace the eye bones on the descriptor with the eye bones from your avatar



## Patcher script creates red errors

This is a commun issue on some computers with their language set to something different than English.

This can be solved by:

- Opening your windows control panel
- Clock and Region
- Region
- Select `Administration` at the top of the window
- Click `Modify global settings` under `Language for non Unicode programs`
- Select `English (United States)`

> You can revert the changes after patching the model

## My custom blendshapes configuration gets reset when I upload my avatar

This is likely because the avatar has a resting face animation which resets some or all of your custom blendshapes configuration,

This can be fixed by recording your custom configuration on top of that resting animation

## I'm using a Pico 4 Pro and my upper lip is always tucked upward :/

Unfortunatelly the Pico 4 Pro seems to report a significant amount of `Nose Sneer` expression when doing a resting face expression.

Since that amount is quite high it is not possible for me to address the issue without making tracking quality worse for other tracking interfaces.

However you can fix it yourself by following the following steps:

- Go to VRCFT's tracking settings tab (little pen icon on the left side of the app)

![VRCFTTrackingSettingsFind](/src/img/VRCFTTrackingSettingsFind.png)

- Then enable `Parameter Adjustment` by clicking the toggle and developp the list by clicking on the little arrow to the right

![VRCFTTRackingSettingsEnable](/src/img/VRCFTTRackingSettingsEnable.png)


- Finally slide the bit of the `Nose Sneer` slider closer to 0 up until your face's back to a resting expression

![VRCFTTRackingSettingsNoseSneerDeadZone](/src/img/VRCFTTRackingSettingsNoseSneerDeadZone.png)
