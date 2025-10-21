# Commun issues

## The avatar version listed on the store page is no longer avaliable

If the specific avatar package version is not avaliable anymore please contact me trough Booth DMs [here](https://hashedits.booth.pm/conversations).

I will try my best to provide an update to retain compatibility as fast as possible

## I've adjusted my avatar with blendshapes and clipping occurs when blinking

WIP

## Eye rotation broken

This is likely caused in situations where the avatar component doesn't reference the right eye bones, this can be caused by a few different factors:


Your eye bones are not mapped

 - To idetify the issue: Select your avatar's fbx file in unity, go to the rig tab, configure, then select head, and look if your eye bones are properly assigned

 - To fix: If they are not assigned, select them from the hierarchy on the left

The reference to the eye bones is missing

 - To idetify the issue: likely caused by swaping the head mesh

 - To fix: Perform a head swap in blender, here's [a step by step guide on how to do it](../Customisation/ApplyToCustomAvatar.md#head-swap)

Another animation is preventing the eye from moving

 - To idetify the issue: Use the same animation controllers as the prefabs I provide and remove any moudlar avatar or VRCFury components

 - To fix: Check for [Animation Tracking Control](https://creators.vrchat.com/avatars/state-behaviors/#animator-tracking-control) components that may set the ``Eyes & Eyelids`` the ``Tracking`` state, and/or add-in one by one every modular avatar or vrcfury component to identify which one is causing the issue.


## Patcher script creates red errors

This is a commun issue on some computers with their language set to something different than English.

This can be solved by:
- opening your windows control pannel
- Clock and Region
- Region
- Aelect ``Administration`` at the top of the window
- Click ``Modify global settings`` under ``Language for non unicode programs``
- Select ``English (United States)``

>You can revert the changes after patching the model