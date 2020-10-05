<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Seat;
use Illuminate\Support\Facades\Log;
use App\Users;
use Illuminate\Support\Facades\DB;
class CheckinController extends Controller
{
    
    public function getCheckin(Request $request)
    
    {
      Log::info("getCheckin");
      Log::info( $request->all());
      $request_data=$request->all();
      $phone = $request_data['phone'];
      $email = $request_data['email'];
        $validatedData = $request->validate([
        'email' => 'required',
        'phone' => 'required',
      ]);
      $user = Users::where('email', $email)->exists();
    

    if( $user!=1){ 
  
     return false;
    }
    else{
     Log::info( " Find the user!" );
     Log::info(  $user  );
     $id = Users::where('email', $email)->value('id');
     Log::info(  $id  );
     $seatData=Seat::getseatofUser($id);
     Log::info(  $seatData );
     if( $seatData){
        return  $seatData;
     }
     else{
         return false;
     }

     
    }
   
  }  
}
