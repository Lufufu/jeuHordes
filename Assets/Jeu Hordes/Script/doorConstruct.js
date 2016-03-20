#pragma strict

private var guiShow : boolean = false;

var isConstruct : boolean = false;

var doorSystem : GameObject;

var rayLength = 10;

var bois : BarreBois;


function Start (){
    bois = GameObject.Find("Player").GetComponent(BarreBois);
}


function Update () 
{
    var hit : RaycastHit;
    var fwd = transform.TransformDirection(Vector3.forward);

    if (Physics.Raycast(transform.position, fwd, hit, rayLength))
    {
        if (hit.collider.gameObject.tag == "Construct")
        {
            guiShow = true;

            if (bois.wood >=5)
            {
            
                if(Input.GetKeyDown("e") && isConstruct == false)
                {
                    doorSystem.SetActive(true);
                    isConstruct = true;
                    guiShow = false;
                    bois.wood -=5;
                }
            }
            
        }
    }
    else
    {
        guiShow = false;
    }
}

function OnGUI()
{
    if (guiShow == true && isConstruct == false)
    {
        GUI.Box(Rect(Screen.width / 2, Screen.height / 2, 100, 25), "Construire Porte");
    }
}