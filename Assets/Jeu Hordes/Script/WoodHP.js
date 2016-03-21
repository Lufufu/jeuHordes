#pragma strict

private var curWood =10;



function BoisHP ()
{
    curWood -=1;

    if (curWood <= 0)
    {
        Destroy (gameObject);
    }

}