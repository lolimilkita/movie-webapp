@extends('layouts.main')

@section('container')

    <div class="row justify-content-center">
        <div class="col-md-8">
            <h1 class="text-center mb-3">Selamat datang di Movie App</h1>
        
            <h4>Search Movie</h4>
        
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Movie title...." id="input-search">
                <button class="btn btn-outline-dark" type="button" id="button-search">Button</button>
            </div>
        </div>
    </div>

    <hr>

    <div class="row" id="movie-list">

    </div>

@endsection