<?php

namespace App;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;
class Users extends Model
{  
     protected $fillable = [
    'name', 'email', 'password',
];

/**
 * The attributes that should be hidden for arrays.
 *
 * @var array
 */
protected $hidden = [
    'password', 'remember_token',
];


/**
 * The attributes that should be cast to native types.
 *
 * @var array
 */
protected $casts = [
    'email_verified_at' => 'datetime',
];
public static function getUsers(){

    
    $value=DB::table('users')->select('name')->get();
    Log::info(print_r( $value, true));

 return $value;
}
public static function getUserId($name){

    
    $value=DB::table('users')->where('name',$name)->value('id');
    Log::info(print_r( $value, true));

 return $value;
}
public static function getUserName($id){

    
    $value=DB::table('users')->where('id',$id)->value('name');
    Log::info(print_r( $value, true));

 return $value;
}

}
