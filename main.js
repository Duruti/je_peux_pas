window.onload = function()
{
   let btn = document.querySelector(".btn");
   let excuse = document.querySelector(".excuse");
   let result = "test"

   // event on btn
   btn.addEventListener("click",function()
   {
      excuse.textContent = result;
   }
   )
   // Parties du texte
   let intro = 
      [
         "Tôt dans la matinée"
      ] 

      console.log(intro)
}