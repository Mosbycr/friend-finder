$("#submit").on("click", function(event){
    event.preventDefault();

    var newProfile = {
      name: $("#profileName")
        .val()
        .trim(),
      photo: $("#profilePicLink")
        .val()
        .trim(),
      answers: [
        $("#question1").val(),
        $("#question2").val(),
        $("#question3").val(),
        $("#question4").val(),
        $("#question5").val(),
        $("#question6").val(),
        $("#question7").val(),
        $("#question8").val(),
        $("#question9").val(),
        $("#question10").val()
      ]
    };

    $.ajax({
        url: '/api/friends',
        method: 'POST',
        data: newProfile
    }).then(function(data) {
        alert("Your profile has been added");
    })
})