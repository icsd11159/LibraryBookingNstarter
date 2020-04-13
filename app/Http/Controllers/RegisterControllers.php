<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Log;
use App\Users;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


class RegisterControllers extends Controller
{
    public function postRegister(Request $request)
    
    {
      Log::info("postRegister");
      Log::info( $request->all());
      $request_data=$request->all();
      $password = $request_data['password'];
      $email = $request_data['email'];
        $validatedData = $request->validate([
        'email' => 'required',
        'password' => 'required',
        'name' => 'required'
      ]);

      $project = Users::create([
        'email' => $validatedData['email'],
        'password' => $validatedData['password'],
        'name' => $validatedData['name']

      ]);
     // $user = Users::where('password', $password && 'email',$email) ->get();

      return response()->json('Project created!');
        
    }
}
