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

      $project = Users::create([
        'email' => $validatedData['email'],
        'password' => $validatedData['password'],
        'name' => 'justcheck'

      ]);

      return response()->json('Project created!');
        
    }
}
