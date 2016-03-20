#pragma strict

var pa : int = 10;

function OnGUI(){
    GUI.Box(Rect(0, 0, 100, 25), "PA = "+pa);
}