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
Route::get('/loginc', 'LoginControllers@postLogin');
Route::post('/registerc', 'RegisterControllers@postRegister');
Route::get('/libraryseats', 'LibrarySeatController@index');
Route::get('/bookingseats', 'LibrarySeatController@AddBooking');
Route::get('/checkins', 'CheckinController@getCheckin');
Route::get('/hascheckins', 'CheckinController@hasCheckin');


Log::info("Api.php");
Route::get('/login', array(
    'uses' => 'LoginControllers@showLogin'
  ));
/* 
Route::middleware('auth:api')->post('/login', function (Request $request) {
   // Route::post('api/login', 'Api\Login.php');
   Route::post('/login', 'LoginController@postLogin');

    //Log::info($request);
    return $request->user();
}); */
