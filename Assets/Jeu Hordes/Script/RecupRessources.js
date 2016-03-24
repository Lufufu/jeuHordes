#pragma strict


private var guiShow : boolean = false;
private var bois : BarreBois;
private var boisHP : WoodHP;
private var rayLength = 10;

function Start (){
    bois = GameObject.Find("Player").GetComponent(BarreBois);
    boisHP = GameObject.Find("Arbre").GetComponent(WoodHP);
}

function RecupBois () 
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
                    boisHP.BoisHP();
                }

            
        }
    }
    else
    {
        guiShow = false;
    }
}

function Update ()
{
	RecupBois();

}