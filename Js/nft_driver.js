
const pics = [];
for(i=0;i<493;i++){
    pics.push('imgs/nfts/'+i+'.png');
}
function showImage(){
    document.querySelector(".nft").style.display="block";
    document.querySelector(".text1").style.display="block";
    var a = Math.floor(Math.random()*pics.length);
    console.log(a);
    var img = pics[a];
    console.log(img);
    document.getElementById("nft").src = "" + img;
    document.getElementById("anft").href = "" + img;
}

setInterval(showImage,1200);