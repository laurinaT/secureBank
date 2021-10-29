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
                let p = document.getElementById("text-json");
                // J'injecte le résultat (transformé en texte par .text) de la request dans mon p
                p.innerText = data[0].text;
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
httpRequest.open("GET", "../info_layer.json", true); 
// j'envoie la requête
httpRequest.send(); 
