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
//Route::get('/home', 'SeatController@index');

Route::get('/', function () {
    return view('welcome');
});
Route::group(['middleware' => ['auth']], function() { 
    //etsi to eixame alla dimiourfithike kapoio thema me ta routings tis auth otan kaname logout 
    //teleftaia stigmi kai den prolavame na doume ti allakse sto routing, otan prospathisame na valoume tous tous rolous kai to 
    //Google Api AUTH .Opote ta  vgalame ektos auth. kai kaname ton LoginController SeatController
  // your routes
    Auth::routes();

/* Route::get('/home', 'SeatController@index');
   Route::post('/home', 'SeatController@home');
   // Route::get('app/home', 'SeatController@index');
    Route::get('/deleteBookings/{id}', 'BookingController@deleteBookings');
   //Route::get('/{id}', 'SeatController@index');
   Route::post('/save', 'SeatController@save');
   Route::post('/saveUser', 'UserController@saveUser');
   //Route::post('/saveBooking', 'SeatController@saveBooking');
   Route::get('/booking', 'BookingController@index');
    Route::get('/deleteUser/{id}', 'SeatController@deleteUser');
    Route::get('/deleteUser/{id}', 'UserController@userBookings');
    Route::get('/editUser/{id}', 'UserController@editUser');
    Route::get('/user', 'UserController@index'); */
});
/* Route::get('/deleteBookings/{id}', 'BookingController@deleteBookings');
//  Route::get('/{id}', 'SeatController@index');
Route::post('/save', 'SeatController@save');
Route::get('/save', 'SeatController@index');
Route::post('/saveuser', 'UserController@saveUser');
Route::get('/booking', 'BookingController@index');
Route::get('/deleteUser/{id}', 'UserController@deleteUser');
Route::get('/deleteBooking/{id}', 'BookingController@userBookings');
Route::get('/editUser/{id}', 'UserController@editUser');
Route::get('/user', 'UserController@index');
Route::get('/saveBookings', 'BookingController@saveBookings');
Route::get('/editBookings/{id}', 'BookingController@editBookings');
Route::get('/booking', 'BookingController@index');
 */


  //  Route::get('/{id}', 'SeatController@index');
  Route::post('/save', 'SeatController@save');
  Route::get('/save', 'SeatController@index');
  //Route::get('/deleteUser/{id}', 'SeatController@deleteUser');
  Route::get('/deleteSeat/{id}', 'SeatController@deleteUser');
  Route::post('/saveuser', 'UserController@saveUser');
  Route::get('/deleteBookings/{id}', 'BookingController@deleteBookings');
  //Route::get('/editUser/{id}', 'SeatController@editUser');
  Route::get('/editBookings/{id}', 'BookingController@editBookings');
  Route::post('/saveBookings', 'BookingController@saveBookings');
  Route::get('/saveBookings', 'BookingController@saveBookings');
  Route::get('/booking', 'BookingController@index');

Route::get('/deleteUser/{id}', 'UserController@userBookings');
Route::get('/editUser/{id}', 'UserController@editUser');
Route::post('/saveuser', 'UserController@saveUser');
Route::get('/user', 'UserController@index');


Route::view('/{path?}', 'app');
Route::view('/api/login', 'auth\login');
  // route to process the form
  //Route::get('/login', 'LoginController@postLogin')->name('login');
  Route::post('/login', 'Auth\LoginController@index')->name('login'); //kai pleon aftos einai o SeatContoller(h arxiki maa sto diaxeiristiko)
  //Route::post('/save', 'LoginController@save');
  Route::get('/editSeat/{id}', 'SeatController@editSeat');
  
/* Route::get('/login', array(
    'uses' => 'LoginController@postLogin'
  )); */

/* Route::prefix(config('/manager'))->group(function () {
    Auth::routes();
   
    //Route::get('/home', 'HomeController@index')->name('home');
    Route::get('/home', 'SeatController@index');
    //  Route::get('/{id}', 'SeatController@index');
      Route::post('/save', 'SeatController@save');
      Route::get('/deleteUser/{id}', 'SeatController@deleteUser');
}); */
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
