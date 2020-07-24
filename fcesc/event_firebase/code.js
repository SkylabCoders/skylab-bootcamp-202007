TRASH it, there is htmlcode.html

async function init(){
    const uid = (await firebase.auth().signInAnonymously()).user.uid; // get thee instance
    const src = (await firebase.storage().ref('map.png').getb)

    const state = {
        title: 'Barcelona'
    
    }
    


        
    }
    function placeMe(offsetX, offsetY){
        collection.doc(uid).set({
            x: offsetX,
            y: offsetY,
            uic,
            me: {
                x: 0,
                y: 0,
                uid
            }
        });
    }
}

collection.doc(uid).onSnapshot(()=>{ // when connection changes call this codec
    state.me = d.data();
    rerender();
})

function rerender(){
    render(html)
    <h1>${staet.title}</h1>
    <h2>${uid}</h2>
    <img src="${src}" tag="">
    <div style="position: relative;">
        <lag style = "">
        <div>
            S
        </div>
    </div>

}
