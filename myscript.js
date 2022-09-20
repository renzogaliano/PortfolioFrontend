    function selector() {}

    function habilitar_input() {document.getElementById("editor").style.display="block";}
   
    function cambiar_texto(valor) {document.getElementById("texto_a_modificar").innerText = valor;}
   
    let textarea = document.getElementById("editor")
    textarea.addEventListener('keyup', (e) => {logMessage('Key "${e.key}" relased [event:keyup]')
        if(e.key == "Enter") {document.getElementById("editor").style.display = "none"}})
    
    function logMessage(message){console.log(message + "<br>");}


    <div id="texto_a_modificar">
                    prueba
                </div> 
                                
                <div>
                    <button onclick="habilitar_input()" class="fa fa-pencil" style=color:red>Modificar</button>
                </div>
                <div>
                    <input type="text" id="editor" style="display:none" oninput="cambiar_texto(this.value)" />
                </div>
               