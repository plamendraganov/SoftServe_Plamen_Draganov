function myFunction() {
    $('.btn-recipe').on('click', function() {
        let value = $(this).val();
        let modal = $('.modal')[0];

        // Get the button that opens the modal
        let btn = $(".dishModal")[0];

        // Get the <span> element that closes the modal
        let span = $(".close")[0];

        // When the user clicks the button, open the modal 
        btn.onclick = function() {
            modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    })



    var recipes = {
        "dishes": [{
                "ingridients": "<strong>INGREDIENTS:</strong> </br> 500g potatoes </br> 1 glass sour cream </br> 1 onion </br> 3 garlic cloves </br> 200g hard cheese </br> butter for greasing </br> salt </br> pepper",
                "method": "<strong>HOW TO COOK IT:</strong> </br> Cut the potatoes and onion into thin circles. Mix the sour cream, finely chopped garlic, and seasonings, and butter a baking pan. <p>Now layer your zapekanka: Potato slices, onion slices, sour cream mixture, grated cheese. </p>Repeat the layering until you run out of the ingredients. Bake in the oven uncovered for 60-80 minutes at 180C until the potatoes are golden-brown on top.",
                "time": "<strong>TIME TO PREPARE IT:</strong></br> About 90 minutes"
            },
            {
                "ingridients": "<strong>INGREDIENTS:</strong> </br> 500g potatoes </br> 1 glass sour cream </br> 1 onion </br> 3 garlic cloves </br> 200g hard cheese </br> butter for greasing </br> salt </br> pepper",
                "method": "<strong>HOW TO COOK IT:</strong> </br> Cut the potatoes and onion into thin circles. Mix the sour cream, finely chopped garlic, and seasonings, and butter a baking pan. <p>Now layer your zapekanka: Potato slices, onion slices, sour cream mixture, grated cheese. </p>Repeat the layering until you run out of the ingredients. Bake in the oven uncovered for 60-80 minutes at 180C until the potatoes are golden-brown on top.",
                "time": "<strong>TIME TO PREPARE IT:</strong></br> About 90 minutes"
            },
            {
                "ingridients": "<strong>INGREDIENTS:</strong> </br> 500g potatoes </br> 1 glass sour cream </br> 1 onion </br> 3 garlic cloves </br> 200g hard cheese </br> butter for greasing </br> salt </br> pepper",
                "method": "<strong>HOW TO COOK IT:</strong> </br> Cut the potatoes and onion into thin circles. Mix the sour cream, finely chopped garlic, and seasonings, and butter a baking pan. <p>Now layer your zapekanka: Potato slices, onion slices, sour cream mixture, grated cheese. </p>Repeat the layering until you run out of the ingredients. Bake in the oven uncovered for 60-80 minutes at 180C until the potatoes are golden-brown on top.",
                "time": "<strong>TIME TO PREPARE IT:</strong></br> About 90 minutes"
            },
            {
                "ingridients": "<strong>INGREDIENTS:</strong> </br> 12 sheets phyllo dough </br> 8 tablespoons butter </br> ? lb sirene (Bulgarian cheese) or feta, coarsely crumbled </br> ? lb Bulgarian yogurt (preferably sheep's milk yogurt) </br> 4 whole eggs </br> 1 egg yolk </br> salt </br> pepper",
                "method": "<strong>HOW TO COOK IT:</strong> </br> Whisk yogurt with 4 whole eggs. Add cheese, salt and pepper and mix. Melt the butter. Take two sheets of phyllo and brush with melted butter. Superimpose a third sheet on the first and brush with butter. Turn over and then brush the non coated side. Divide ? of the yogurt, egg and cheese mixture on top of the filo sheets. Then roll the whole preparation like a long sausage. Roll lengthwise to get the roll as long as possible. Repeat this process 3 more times to get 4 long rolls of three superimposed sheets of filo each. Place the springform pan on a baking sheet (or just circle on baking sheet covered with parchment paper). Begin by placing the first roll by sticking to the edge of the circle, then add the following forming a snail to the center. Beat egg yolk with the remaining melted butter and brush the whole banitsa. Bake at 400 F for about 25 minutes. The banitsa should be golden. It can be eaten either hot, warm or cold.",
                "time": "<strong>TIME TO PREPARE IT:</strong></br> About 60 minutes."
            },
            {
                "ingridients": "<strong>INGREDIENTS:</strong> </br> 500g potatoes </br> 1 glass sour cream </br> 1 onion </br> 3 garlic cloves </br> 200g hard cheese </br> butter for greasing </br> salt </br> pepper",
                "method": "<strong>HOW TO COOK IT:</strong> </br> Cut the potatoes and onion into thin circles. Mix the sour cream, finely chopped garlic, and seasonings, and butter a baking pan. <p>Now layer your zapekanka: Potato slices, onion slices, sour cream mixture, grated cheese. </p>Repeat the layering until you run out of the ingredients. Bake in the oven uncovered for 60-80 minutes at 180C until the potatoes are golden-brown on top.",
                "time": "<strong>TIME TO PREPARE IT:</strong></br> About 90 minutes."
            },
        ]
    }

    $('.btn-recipe').on('click', function() {
        let value = $(this).val();
        $(".clearData").html("");
        $('.ingridients').append(recipes.dishes[value].ingridients);
        $('.prepare').append(recipes.dishes[value].method);
        $('.time').append(recipes.dishes[value].time);
    })

}