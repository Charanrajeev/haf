function player()
{
    let x = document.getElementById("pwd").value;
    if(x==123)
    {
        document.getElementById('demo').innerHTML='<audio src="https://node-03.zeno.fm/sepgm12xuxhvv?zs=HHwoce8ITSSUpjpy3w9c9g&amp;rj-ttl=5&amp;rj-tok=AAABgizv1XYA0MqBOQHBDTqTig" type="audio/mpeg" controls></audio>'
        document.getElementById("pwd").remove();
        document.getElementById("btn").remove();
    }
    else{
        window.alert("you have no permision");
    }
}