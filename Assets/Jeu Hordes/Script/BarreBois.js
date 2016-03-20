#pragma strict

var wood : int = 0;

function OnGUI(){
    GUI.Box(Rect(0, 100, 100, 25), "wood = "+wood);
}