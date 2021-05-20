<?php

use Illuminate\Support\Facades\Route;

Route::post('/form', [\App\Http\Controllers\FormController::class, 'store']);

Route::get('/{any}', function(){
    return view('vueapp');
})->where('any', '.*');
