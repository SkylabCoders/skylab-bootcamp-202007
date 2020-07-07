var flights = [
    { id: 0, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
    { id: 1, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
    { id: 2, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
    { id: 3, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
    { id: 4, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
    { id: 5, to: 'London', from: 'Madrid', cost: 200, scale: false },
    { id: 6, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
    { id: 7, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
    { id: 8, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
    { id: 9, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
    ];
    var flights2=[];
    var usuari,missatge,nivellUsu,funAdm;
    var ids=new Array(Number);
    var orígens=new Array();
    var destins=new Array();
    var preus=new Array();
    var escales=new Array();
    var idEscollit;
    
    usuari=prompt('Introdueixi el seu nom:');
    if(usuari===''){usuari=prompt('Introdueixi el seu nom:','error')};
    mostrar_vols(flights);
    
    function mostrar_vols(vols){
        missatge='';
        mostrar_v_cons();
        for(let i=0;i<vols.length;i++){
        orígens[i]=vols[i].from;
        destins[i]=vols[i].to;
        preus[i]=vols[i].cost;
        if(vols[i].scale==true){
            escales[i]='té';}
            else{escales[i]='no té';}
        missatge +=`El vol amb origen ${orígens[i]} i destí ${destins[i]} té un cost de ${preus[i]} euros i ${escales[i]} escala\n`;}	
        alert(`Bon dia Sr.${usuari}\nBenvingut a SkyLab Aerolínees\naquests són els vols programats per avui:\n${missatge}`);
    mostrarNivell();	
            }

    function mostrar_v_cons(){
        for(i in flights){
            console.log(flights[i]);
        };
    }
    
    
    function mostrarNivell(){
        nivellUsu=prompt('Vostè és administrador (escrigui ad) o usuari (escrigui us)?');
        switch(nivellUsu){
            case 'ad':
                nivellAdm();
                break;
            case 'us':
                nivellUs();
                break;
            default:
                mostrarNivell();
                break;}}
    function nivellAdm(){
        funAdm=prompt('Vol crear un nou vol (escrigui nou) , esborrar un vol de la taula (escrigui bor) o sortir(escrigui esc)?');
        switch(funAdm){
            case 'nou':
                nouVol();
                
                break;
            case 'bor':
                borrar();
                break;
            case 'esc':
                alert('Bye');
                break;
            default:
                nivellAdm();}}
    function nouVol(){
        id=flights.length;
        from=prompt('Origen:');
        comprovar_origen();
        function comprovar_origen(){
            if(from.length===0){
                from=prompt('Introdueixi algun valor.\n Origen:');
                comprovar_origen();
            }else{
                for(let i=0;i<from.length;i++){
                    for(let j=0;j<10;j++){
                        if(from[i]===`${j}`){
                            from=prompt('Els valors numèrics no estan admesos.\n Origen:');
                            comprovar_origen();
                        }
                    }
                }
            }
        }
        to=prompt('Destí:');
        comprovar_destí();
        function comprovar_destí(){
            if(to.length===0){
                to=prompt('Introdueixi algun valor.\n Destí:');
                comprovar_destí();
            }else{
                for(let i=0;i<to.length;i++){
                    for(let j=0;j<10;j++){
                        if(to[i]===`${j}`){
                            to=prompt('Els valors numèrics no estan admesos.\n Destí:');
                            comprovar_destí();
                        }
                    }
                }
            }
        }
        cost=prompt('Cost:');
        comprovar_cost();
        function comprovar_cost(){
            if(cost.length===0){
                cost=prompt('Introdueixi algun valor.\n Cost:');
                comprovar_cost();
            }else{
                var valor=0;
                for(let i=0;i<cost.length;i++){
                    for(let j=0;j<10;j++){
                        if(cost[i]===`${j}`){
                            valor++;
                            
                        }
                    }
                }
                if(valor<cost.length){
                    cost=prompt('Només els valors  numèrics estan admesos.\n Cost:');
                            comprovar_cost();
                }
            }
        }
        nouEscales=prompt('Té escala?(sí/no)');
        comprovar_escala();
        function comprovar_escala(){
        if(nouEscales==='sí'){
           scale=true;
            }else if(nouEscales==='no'){
                scale=false;}
                else{
                    nouEscales=prompt('Valor introduït incorrecte.\n Té escala?(sí/no)');
                    comprovar_escala();
                }
            }
        nouV={id,to,from,cost,scale};
        flights.push(nouV);
        mostrar_v_cons();
        if(flights.length>15){
        alert('no pots crear més vols per avui');}
        else{
        mostrar_vols(flights);}
        nivellAdm();
    
    }
    
    function borrar(){
        mostrar_v_cons();
         idU=prompt('Quin id de vol vol eliminar?');
         comprovar_idU();
        function comprovar_idU(){
            if(idU.length===0){
                idU=prompt('Introdueixi algun valor.\n id:');
                comprovar_idU();
            }else{
                var valor=0;
                for(let i=0;i<idU.length;i++){
                    for(let j=0;j<10;j++){
                        if(idU[i]===`${j}`){
                            valor++;
                            
                        }
                    }
                }
                if(valor<idU.length){
                    idU=prompt('Només els valors  numèrics estan admesos.\n id:');
                            comprovar_idU();
                }
            }
        }
        flights=flights.filter(function(vol){
            if(vol.id==idU){
                return false;}
                else{
                    return true;}});
        mostrar_vols(flights);
        mostrar_v_cons();
        nivellAdm();
    
    }
    
    function nivellUs(){
        mostrar_v_cons();
        var preu=0;
        var preuStr=prompt('Quin és el seu pressupost?');
        comprovar_preu();
        function comprovar_preu(){
            if(preuStr.length===0){
                preuStr=prompt('Introdueixi algun valor.\n pressupost:');
                comprovar_preu();
            }else{
                var valor=0;
                for(let i=0;i<preuStr.length;i++){
                    for(let j=0;j<10;j++){
                        if(preuStr[i]===`${j}`){
                            valor++;
                            
                        }
                    }
                }
                if(valor<preuStr.length){
                    preuStr=prompt('Només els valors  numèrics estan admesos.\n pressupost:');
                            comprovar_preu();
                }
            }
        }
        
        preu=parseInt(preuStr);
        flights=flights.sort(function(a,b){
                return (a.cost-b.cost);});
        flights2=flights.filter(function(vol){
            
            if(vol.cost>(preu+100)){
                return false;}
                else if(vol.cost<(preu-100)){
                    return false;}
                
                    else{return true;}
                });
    
        missatge='';
        
        for(let i=0;i<flights2.length;i++){
            orígens[i]=flights2[i].from;
            destins[i]=flights2[i].to;
            preus[i]=flights2[i].cost;
            if(flights2[i].scale==true){
                escales[i]='té';}
                else{escales[i]='no té';}
                           
                ids[i]=flights2[i].id;
            missatge +=`El vol amb id ${ids[i]},origen ${orígens[i]} ,destí ${destins[i]} té un cost de ${preus[i]} euros i ${escales[i]} escala\n`;}
            if(missatge===''){
                alert('no hem trobat cap vol que s`aproximi al seu pressupost');
                continuarUs();
            }
            else{	
                idEscollit=prompt(`Els vols que s'aproximen més al seu pressupost són els següents:\n${missatge}\n indiqui el id del vol seleccionat.`);
                var idEscollitNum=parseInt(idEscollit);
                comprovar_id(idEscollitNum);
        
        }

    function comprovar_id(num){
        
        
        var cont=0;
        for(let n=0;n<flights2.length;n++){
            
            if(flights2[n].id===num){
                
                cont++;
            }
        }
        if(cont>0){
            alert('Gràcies per la seva compra, torni aviat.');
        }else{
            var num2=prompt('El vol seleccionat no està disponible, seleccioni un altre id');
            var num2N=parseInt(num2);
            comprovar_id(num2N);
        }
        
            }

    function continuarUs(){
        var resp=prompt('Vol insertar un nou pressupost?(s/n)');
        switch(resp){
            case 's':
                nivellUs();
                break;
            case 'n':
                alert('Bye');
                break;
            default:
                continuarUs();
        }
    }
        
                }
        
        
                
        