#pragma strict


private var guiShow : boolean = false;
var bois : BarreBois;
var boisHP : WoodHP;
var rayLength = 10;

function Start (){
    bois = GameObject.Find("Player").GetComponent(BarreBois);
    boisHP = GameObject.Find("Arbre").GetComponent(WoodHP);
}

function Update () 
{
    var hit : RaycastHit;
    var fwd = transform.TransformDirection(Vector3.forward);


    if (Physics.Raycast(transform.position, fwd, hit, rayLength))
    {
        if (hit.collider.gameObject.tag == "Wood")
        {
            guiShow = true;
            
                if(Input.GetKeyDown("e"))
                {
                    guiShow = false;
                    bois.wood +=1;
                    //boisHP.curWood -=1;
                    boisHP.update();
                }

            
        }
    }
    else
    {
        guiShow = false;
    }
}