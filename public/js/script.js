$("#button-search").on("click", function () {
    $.ajax({
        url: "http://www.omdbapi.com/",
        type: "get",
        dataType: "json",
        data: {
            apikey: "e31057e7",
            s: $("#input-search").val(),
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
                            <div class="card mb-3" >
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
                                <a href="#" class="card-link">Detail</a>
                                </div>
                            </div>
                        </div>
                    `
                    );
                });
            } else {
                $("#movie-list").html(
                    `
                    <h1 class="text-center">` +
                        result.Error +
                        `</h1>
                `
                );
            }
        },
    });
});

// $("#button-search").on("click", console.log("haloo ges"));
