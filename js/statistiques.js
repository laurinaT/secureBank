// j'instancie l'objet httpRequest à partir du prototype XMLHttpRequest
let httpRequest = new XMLHttpRequest();
    // Je lui dis comment traiter la requête quand une réponse arrive du serveur
    httpRequest.onreadystatechange = function() {
        // Si la requête renvoyée est prête
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            // si le code http est de 200
            if (httpRequest.status === 200) {
                console.log(httpRequest);
                
                // data contient maintenant un objet JSON parsé
                // la propriété response.text stoke le contenu sous forme de string avant la désérialisation
                // Je parse/désérialize (deconstruit le texte brut et le retransforme en objet JSON)
                let data = JSON.parse(httpRequest.responseText);
                console.log(data);
                for( let statistique of data){
                    let table = '<div class="col-6"><table class="text-center table table-bordered"><thead class="thead-dark"><tr><th colspan="2" scope="col">' + statistique.title + '</th></tr></thead><tbody>';
                    for(let key in statistique.value) {
                        console.log(key + " - " + statistique.value[key]);
                        table += '<tr><th scope="row">' + key +'</th><td>' + statistique.value[key] +'</td></tr>';
                    }
                table += '</tbody></table></div>';
                document.getElementById('container_tables').innerHTML += table;
                        
                }
            } else {
                // si erreur serveur (ex:404)
                console.log("Une erreur est survenue");
            }
            
        } else {
            // pas n'est pas encore prête
            console.log("chargement en cours");
        }
    };
// Défini le type de protocole/ l'adresse à contacter/ la requête est-elle asynchrone ? (true/false)
httpRequest.open("GET", "../statistiques.json", true); 
// j'envoie la requête
httpRequest.send(); 




{/* <div class="col-6">
        <table class="text-center table table-bordered">
            <thead class="thead-dark">
            <tr>
                <th colspan="2" scope="col">Title</th>
            </tr>
            </thead>
            <tbody>
           
            </tbody>
        </table>
    </div> */}
