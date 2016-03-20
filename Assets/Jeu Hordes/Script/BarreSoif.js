#pragma strict

var curHp : float = 100.0;
var maxHp : float = 100.0;
var minHp : float = 0.0;

var hpBarTexture : Texture2D;
var hpBarLenght : float;
var percentOfHp : float;

function OnGUI()
{
    if (curHp > 0)
    {
        GUI.DrawTexture(Rect(0, 75, hpBarLenght, 25), hpBarTexture);
    }

    if (curHp <= 30)
    {
        GUI.Box(Rect(0, 75, 100, 25), "j'ai soif");
    }
}

function Update () 
{
    percentOfHp = curHp/maxHp;
    hpBarLenght = percentOfHp*100;
    curHp -= Time.deltaTime *2;

    if (curHp <=0)
    {
        curHp=minHp;
    }
}