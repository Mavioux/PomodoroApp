let topNav = document.getElementById("myTopnav");
let children = topNav.children;
let bodyId = document.body.id;

for (let i = 0; i < children.length; i++) {
    let child = children[i];
    if(child.id == bodyId) {
        child.setAttribute('class', 'active');
    }
}

