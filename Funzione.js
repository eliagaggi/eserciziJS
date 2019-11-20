var studentArray =["Andre1", "Andre2", "Andre3", "Ste1", "Ste2", "Paolo", "Elia", "Lorena", "Giulia", "Simo", "Albe"]

function shuffle(ar){  
      
    
    for (let i = ar.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        let x = ar[i];
        ar[i] = ar[j];
        ar[j] = x;
    }
    
    let banchi = [];
    for(let i = 0; i < ar.length - 2; i += 2){
        banchi.push(ar[i] + " - " + ar[i+1]);
    }
    if(ar.length % 2 != 0){
        banchi.push(ar[ar.length-1])
    }
    for(let i = 0; i< banchi.length; i++){
        let td = document.querySelector(`#banco${i+1}`);
        td.innerText = banchi[i];
    }  

}
