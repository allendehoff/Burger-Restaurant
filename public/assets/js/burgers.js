// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    // Links 'Add Burger' button to route in controller for adding a new burger
    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#burger").val().trim(),
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new Burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
    // Links 'Devour It' button to controller route for changing a burger's status to 'devoured'
    $(".devour").on("click", function (event) {
        var id = $(this).data("id");
        var devoured = $(this).data("edible");

        var devouredState = {
            edible: devoured
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(
            function () {
                console.log("changed edible to", devoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
