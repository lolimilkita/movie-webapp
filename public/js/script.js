function searchMovie() {
    $("#movie-list").html("");

    $.ajax({
        url: "http://omdbapi.com",
        type: "get",
        dataType: "json",
        data: {
            apikey: "e31057e7",
            s: $("#search-input").val(),
        },
        success: function (result) {
            // console.log(result);
            if (result.Response == "True") {
                let movies = result.Search;
                // console.log(movies);

                $.each(movies, function (i, data) {
                    $("#movie-list").append(
                        `
                        <div class="col-md-4">
                            <div class="card mb-3">
                                <img src="` +
                            data.Poster +
                            `" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">` +
                            data.Title +
                            `</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">` +
                            data.Year +
                            `</h6>
                                    <a href="#" class="card-link see-detail" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="` +
                            data.imdbID +
                            `">See detail</a>
                                </div>
                            </div>
                        </div>
                    `
                    );
                });
                $("#search-input").val("");
            } else {
                $("#movie-list").html(
                    `
                    <h3 class="text-center">` +
                        result.Error +
                        `</h3>
                `
                );
            }
        },
    });
}

$("#search-btn").on("click", function () {
    searchMovie();
});

$("#search-input").on("keyup", function (e) {
    // jika yg ditekan enter
    if (e.keyCode === 13) {
        searchMovie();
    }
});

$("#movie-list").on("click", ".see-detail", function () {
    // console.log($(this).data('id'));

    $.ajax({
        url: "http://omdbapi.com",
        type: "get",
        dataType: "json",
        data: {
            apikey: "e31057e7",
            i: $(this).data("id"),
        },
        success: function (movie) {
            // console.log(result);
            if (movie.Response == "True") {
                $(".modal-body").html(
                    `
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-4">
                                <img src="` +
                        movie.Poster +
                        `" class="img-fluid">
                            </div>
                            <div class="col-md-8">
                                <ul class="list-group">
                                    <li class="list-group-item"><h3>` +
                        movie.Title +
                        `</h3></li>
                                    <li class="list-group-item">Rating : ` +
                        movie.imdbRating +
                        `</li>
                                    <li class="list-group-item">Released : ` +
                        movie.Released +
                        `</li>
                                    <li class="list-group-item">Genre : ` +
                        movie.Genre +
                        `</li>
                                    <li class="list-group-item">Director : ` +
                        movie.Director +
                        `</li>
                                    <li class="list-group-item">Actors : ` +
                        movie.Actors +
                        `</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                `
                );
            } else {
                $("#movie-list").html(
                    `
                    <h3 class="text-center">` +
                        result.Error +
                        `</h3>
                `
                );
            }
        },
    });
});
