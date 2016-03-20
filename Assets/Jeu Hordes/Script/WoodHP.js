#pragma strict

private var curWood =10;

function update (){
    curWood -=1;
    print("test");

    if (curWood <= 0){
        print("test1");
        Destroy (gameObject);
    }

}