#pragma strict

var curHp : float = 100.0;
var maxHp : float = 100.0;
var percentOfHp : float;



function Update () 
{
    percentOfHp = curHp/maxHp;
}