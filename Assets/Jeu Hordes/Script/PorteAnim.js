#pragma strict

private var guiShow : boolean = false;

var point : pointsActions;

var isOpen : boolean = false;

var door : GameObject;

var rayLength = 10;

function Start (){
    point = GameObject.Find("Player").GetComponent(pointsActions);
}

function Update () 
{
    var hit : RaycastHit;
    var fwd = transform.TransformDirection(Vector3.forward);

    if (Physics.Raycast(transform.position, fwd, hit, rayLength))
    {
        if (hit.collider.gameObject.tag == "Door")
        {
            guiShow = true;
            if (point.pa >=2)
            {

                if(Input.GetKeyDown("e") && isOpen == false)
                {
                    door.GetComponent.<Animation>().Play("porteFermee");
                    isOpen = true;
                    guiShow = false;
                    point.pa -= 2;
                }
                else if (Input.GetKeyDown("e") && isOpen == true)
                {
                    door.GetComponent.<Animation>().Play("porteOuverte");
                    isOpen = false;
                    guiShow = false;
                    point.pa -= 2;
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
    if (guiShow == true && isOpen == false)
    {
        GUI.Box(Rect(Screen.width / 2, Screen.height / 2, 100, 25), "Ouvrir Porte");
    }
    else if (guiShow == true && isOpen == true)
    {
        GUI.Box(Rect(Screen.width / 2, Screen.height / 2, 100, 25), "Fermer Porte");
    }
}