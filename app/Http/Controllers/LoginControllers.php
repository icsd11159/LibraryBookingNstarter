<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Log;
use App\Users;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LoginControllers extends Controller
{
    public function postLogin(Request $request)
    
    {
      Log::info("LoginController");
      Log::info( $request->all());
      $request_data=$request->all();
      $password = $request_data['password'];
      $email = $request_data['email'];
        $validatedData = $request->validate([
        'email' => 'required',
        'password' => 'required',
      ]);
      $user = Users::where('password', $password)->where('email', $email)->exists();
  
     // ->orderBy('created_at', 'desc')
     // ->withCount(['tasks' => function ($query) {
     //   $query->where('is_completed', false);
     // }])
     
    if( $user!=1){
     Log::info( "Not Find the user!" );
     return false;
    }
    else{
     Log::info( " Find the user!" );
     Log::info(  $user  );
   

     return "Find Success";
     
    }
   
        
    }
}
