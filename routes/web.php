<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\Controllers\PersonController::class, 'index']);

Route::resource('persons', \App\Http\Controllers\PersonController::class)->except('index');
