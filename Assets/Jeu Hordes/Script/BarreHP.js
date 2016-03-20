#pragma strict

var curHp : float = 100.0;
var maxHp : float = 100.0;
var hunger : BarreFaim;
var thirst : BarreSoif;

var hpBarTexture : Texture2D;
var hpBarLenght : float;
var percentOfHp : float;

function Start()
{
    hunger = GameObject.Find("Player").GetComponent(BarreFaim);
    thirst = GameObject.Find("Player").GetComponent(BarreSoif);
}

function OnGUI()
{
    if (curHp > 0)
    {
        GUI.DrawTexture(Rect(0, 25, hpBarLenght, 25), hpBarTexture);
    }

    if (curHp <= 30)
    {
        GUI.Box(Rect(0, 25, 100, 25), "j'ai mal");
    }
}

function Update () 
{
    percentOfHp = curHp/maxHp;
    hpBarLenght = percentOfHp*100;
    if(hunger.curHp <= 0)
    {
        curHp -= Time.deltaTime *1;
    }

    if(thirst.curHp <= 0)
    {
        curHp -= Time.deltaTime *1;
    }
}