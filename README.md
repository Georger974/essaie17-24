<!DOCTYPE html>
<html lang="fr">

<head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>calculatrice</title>
     <link rel="stylesheet" href="./calc.css">
</head>

<body>
     <h1>********CALCULATRICE********</h1>

     <div id="calculatrice">
          <div id="display">0</div>
          <div class="marque">LG-3000</div>
          <div class="container">
               <div class="number-container">
                    <div id="number-box">
                         <div class="number one" id="un" data-key="97">1</div>
                         <div class="number two" id="deux" data-key="98">2</div>
                         <div class="number three" id="trois" data-key="99">3</div>
                         <div class="number for" id="quatre" data-key="100">4</div>
                         <div class="number five" id="cinq" data-key="101">5</div>
                         <div class="number six" id="six" data-key="102">6</div>
                         <div class="number seven" id="sept" data-key="103">7</div>
                         <div class="number height" id="huit" data-key="104">8</div>
                         <div class="number nine" id="neuf" data-key="105">9</div>
                         <div class="number nine" id="zero" data-key="96">0</div>
                         <div class="number float" data-key="">( )</div>
                         <div class="number zero" data-key="110">.</div>
                    </div>
                    <div class="special-box">
                         <div id="clear" class="special " data-key="8">CE</div>

                         <div id="resultat" class="special " data-key="13">=</div>
                    </div>
               </div>


               <div class="operation" id="operator-box">
                    <div class="operator division" data-key="111">/</div>
                    <div class="operator multiplication" data-key="106">*</div>
                    <div class="operator soustraction" data-key="109">-</div>
                    <div class="operator addition" data-key="107">+</div>
                    <div class="operator pourcentage" data-key="">%</div>
               </div>

          </div>

     </div>

     <script src="./calc.js"></script>
</body>

</html>
