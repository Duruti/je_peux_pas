window.onload = function()
{
   let btn = document.querySelector(".btn");
   let excuse = document.querySelector(".excuse");
   
   generateText = function()
   {
      let texte = 
         intro[getRandomInt(intro.length)] + " " +
         conjonction[getRandomInt(conjonction.length)] + " " +
         phrase1[getRandomInt(phrase1.length)] + " " +
         perso[getRandomInt(perso.length)] + " " + 
         phrase2[getRandomInt(phrase2.length)] + " " + 
         phrase3[getRandomInt(phrase3.length)] + " " +
         phrase4[getRandomInt(phrase4.length)] + " " +
         conclusion[getRandomInt(conclusion.length)]
         
         
         
         
         ;

      return texte;
   }
   function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
   
   // event on btn
   btn.addEventListener("click",function()
   {
      let result = generateText();
      excuse.textContent = result;
   }
   )
   // Parties du texte
   let intro = 
      [
         "Tôt dans la matinée,",
         "Vers 4h du matin,",
         "Tard dans la nuit,",
         "En pleine nuit,"
      ] 
   let conjonction = 
      [
         "alors que",
         "pendant que",
         "au moment où",
         "tandis que",
         "comme",
         "cependant que",
      ]
      
   let phrase1 = 
   [
      "je dormais après avoir relu pour la 3ème fois la Comédie humaine de Balzac",
      "je sommeillais en attendant de me lever pour mon footing quotidien de 5h du matin",
      "je somnollais après avoir passé en revue une étude du Figaro Economique",
      "je m'étais assoupi sur une des oeuvres passionnantes de Friedrich Wilheim Nietzsche",
      "je me reposais après avoir pratiqué 2h intenses de Squash",
      "je m'étais endormis sur un article fort intéressant du Herald Tribune",
      "je faisais un somme après avoir fini de traduire Guerre & Paix en Mandarin",
      "je m'étais assoupi sur la brillante émission 'Chasse et Pêche'"
   ]

   let perso =
      [
         "mon chat",
         "mon chien",
         "ma vieille grand-mère",
         "mon perroquet",
         "mon sanglier domestique",
         "ma belle-mère",
         "mon iguane asthmatique"    
      ]
   let phrase2 = 
      [
         "a joué avec le fil électrique de",
         "s'est pris les pates dans le fil électrique de",
         "a appuyé par mégarde sur le bouton OFF de",
         "a effleuré par inadvertance le Snooze de",
         "a renversé du Coca sur",
         "a fait tomber dans la baignoire",
         "a rebooté"
      ]
   let phrase3 = 
      [
         "mon radio-réveil qui n'a donc pas sonné, et ce n'est"
      ]
   let phrase4 = 
      [
         "que lorsque les pompiers sont entrés en hurlant 'AU FEU!'",
         "qu'au moment où les huissiers (venus pour le voisin) ont enfoncé la porte",
         "qu'avec l'arrivée du SAMU, venu chercher ma grand-mère",
         "qu'après l'entrée fracassante de la SPA",
         "qu'au moment où les pompes-funèbres (venues chercher ma belle-mère) ont sonné à la porte",
         "que quand le plombier est venu réparer l'inondation",
         "qu'avec la visite d'un représentant du Téléthon venu me remercier pour mon généreux don de la veille"
      ]
   let conclusion =
      [
         "que je me suis réveillé",
         "que j'ai repris connaissance",
         "que j'ai réalisé qu'il était trop tard pour venir au bureau ce matin",
         "que j'ai bondi hors de mon lit pour me ruer au bureau"
      ]
 
   
}