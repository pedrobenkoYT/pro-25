var options={
    isStatic:false,
    restitution:0.3,
    friction:0,
    desity:1.2
}
function keyPressed() {
    is (keyCode === UP_ARROW) {

        Matter.body.applyForce(paperObject.body.position,{x:130,y:-145});

        
    }
}