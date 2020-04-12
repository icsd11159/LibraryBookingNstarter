<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Log;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('/loginc', 'LoginControllers@postLogin');
Log::info("Agency Api.php");

/* 
Route::middleware('auth:api')->post('/login', function (Request $request) {
   // Route::post('api/login', 'Api\Login.php');
   Route::post('/login', 'LoginController@postLogin');

    //Log::info($request);
    return $request->user();
}); */
