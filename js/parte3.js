// fonction pour rechercher des données dans le tableau html dans le menu
$(document).ready(function() {
    $(".menu-f li").click(function() {
        var objNom = $(this).text();
        var objImag = $(this).data("image");
        var objPrix = $(this).data("cout");
        var typeMenu = $(this).data("type");

        // Met à jour la cellule avec l'image et le nom de l'élément en fonction du type de menu.
        switch (typeMenu) {
            case "entree":
                $("#img-e").html('<img src="' + objImag + '" alt="' + objNom + '"> <br/>' + objNom);
                $(".part3-table .prix-e").text(objPrix + '$');
                break;
            case "principal":
                $("#img-p").html('<img src="' + objImag + '" alt="' + objNom + '"> <br/>' + objNom);
                $(".part3-table .prix-p").text(objPrix + '$');
                break;
            case "dessert":
                $("#img-d").html('<img src="' + objImag + '" alt="' + objNom + '"> <br/>' + objNom);
                $(".part3-table .prix-d").text(objPrix + '$');
                break;
            case "boisson":
                $("#img-b").html('<img src="' + objImag + '" alt="' + objNom + '"> <br/>' + objNom);
                $(".part3-table .prix-b").text(objPrix + '$');
                break;
        }
    });
});


$(document).ready(function() {
  $(".menu-f li").click(function() {
  });

  // Fonction permettant de calculer le coût total des articles
  function calculerCoutTotal() {
      var total = 0;

      $(".part3-table td[class^='prix']").each(function() {
          var prix = parseFloat($(this).text().replace('prix', '').replace('$', ''));
          if (!isNaN(prix)) {
              total += prix;
          }
      });

      return total;
  }

  // Fonction pour calculer les taux (TVP 5% et TPS 9,975%)
  function calculerTaxes(total) {
      var tvpTaxe = total * 0.05; // Taxe TVP (5%)
      var tpsTaxe = total * 0.09975; // Taxe TPS (9.975%)
      return {
          tvp: tvpTaxe,
          tps: tpsTaxe
      };
  }

  // Gérer le clic sur le bouton pour calculer le coût total
  $("#calculate-total").click(function() {
      var coutTotalObj = calculerCoutTotal();
      var taxes = calculerTaxes(coutTotalObj);
      var coutTotalAvecTaxes = coutTotalObj + taxes.tvp + taxes.tps;
      
      $(".tota-obj").text("Total Articles: " + coutTotalObj.toFixed(2) + " $");
      $(".total-taxes").text("Total Taxes: " + (taxes.tvp + taxes.tps).toFixed(2) + " $");
      $(".total-global").text("Total Global (Articles + Taxes): " + coutTotalAvecTaxes.toFixed(2) + " $");
  });
});
