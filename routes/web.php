<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::group(['middleware' => ['auth']], function() {
    // your routes
    Auth::routes();
   // Route::impersonate();
   // Route::get('/home', 'HomeController@index')->name('home');

    Route::get('/home', 'SeatController@index');
  //  Route::get('/{id}', 'SeatController@index');
    Route::post('/save', 'SeatController@save');
    Route::get('/deleteUser/{id}', 'SeatController@deleteUser');
});
Route::view('/{path?}', 'app');

  // route to process the form
/*   Route::post('/login', array(
    'uses' => 'LoginController@doLogin'
  ));
 */

Route::group(['middleware' => ['auth']], function() {
    // your routes
    Auth::routes();
   
   // Route::get('/home', 'HomeController@index')->name('home');


    Route::get('/home', 'SeatController@index');
  //  Route::get('/{id}', 'SeatController@index');
    Route::post('/save', 'SeatController@save');
    Route::get('/deleteUser/{id}', 'SeatController@deleteUser');
    Route::get('/editUser/{id}', 'SeatController@editUser');
});
Route::prefix(config('/manager'))->group(function () {
    Auth::routes();
   
    //Route::get('/home', 'HomeController@index')->name('home');
    Route::get('/home', 'SeatController@index');
    //  Route::get('/{id}', 'SeatController@index');
      Route::post('/save', 'SeatController@save');
      Route::get('/deleteUser/{id}', 'SeatController@deleteUser');
});
//Route::prefix(config('app'))->group(function () {
    // Auth Routes
  //  Auth::routes();

    //Route::impersonate();

    // Pages Routes
   // Route::get('/home', 'HomeController@index')->name('home');
//});
/*  Route::view('/{path?}', 'app');
 
Route::get('/{path?}', function () {
   // return view('welcome');
    return view('app', $params);
});

Route::post('/{path?}', function () {
    // return view('welcome');
     return view('welcome', $params);
 });
Route::view('/{path?}', 'app');
; */
