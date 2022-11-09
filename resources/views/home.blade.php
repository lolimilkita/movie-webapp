@extends('layouts.main')

@section('container')

    <div class="row justify-content-center">
        <div class="col-md-8">
            <h1 class="text-center mb-3">Selamat datang di Movie App</h1>
        
            <h4>Search Movie</h4>
        
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Movie title.." id="search-input">
                <button class="btn btn-dark" type="button" id="search-btn">Search</button>
            </div>
        </div>
    </div>

    <hr>

    <div class="row" id="movie-list">

    </div>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            ...
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
        </div>
    </div>

@endsection