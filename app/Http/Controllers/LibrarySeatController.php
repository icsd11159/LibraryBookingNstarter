<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Seat;
use Illuminate\Support\Facades\Log;
use App\Users;
use App\Bookings;
use Illuminate\Support\Facades\DB;
class LibrarySeatController extends Controller
{
    public function index(Request $request){
 
      $request_data=$request->all();
      $date=$request_data['date'];
      $date=explode('T', $date, 2)[0];
        $userData['data'] = Seat::getseatOrofosData();
                              
 
 
        foreach(  $userData['data'] as $datas){
          foreach( $datas as $data){
        
          if($data->user_id!=null){
            $data->user_name = Users::getUserName($data->user_id);
            $data->reserved  = Bookings::SeatReserved($data->id,$date);
        
          }                 
        }
        }
        Log::info( "userData['data']"  );
        Log::info( $userData['data']  );
        return $userData['data'];
     
        
      }
      
      public function AddBooking(Request $request){
        
        $request_data=$request->all();
         $seats=$request_data['seats'];
     
        
        foreach($request_data['seats'] as $data){
          
          $data=(array)json_decode($data);
          $number=$data['number']->number;
         
          $room_name = DB::table('library_seat')->where('seat_number',$number)->value('room_name');
          $seat_number = $number;
          $type = 'seat';
          $reserved = 1;
          $orientation = DB::table('library_seat')->where('seat_number',$number)->value('orientation'); 
          $location = DB::table('library_seat')->where('seat_number',$number)->value('location'); 
          $user_id = DB::table('users')->where('email',$request_data['username'])->value('id'); 
          $tooltip =  DB::table('library_seat')->where('seat_number',$number)->value('tooltip'); 
          $row = DB::table('library_seat')->where('seat_number',$number)->value('row'); 
          $date = $request_data['date'];
          $from_hour = $request_data['from_hour']; 
          $to_hour =  $request_data['to_hour'];
       
          
          $editid=DB::table('library_seat')->where('seat_number',$number)->value('id'); 
         
            
          $data = array('room_name'=>$room_name,"seat_number"=>$seat_number,"type"=>$type, "location"=>$location,
          "reserved"=>$reserved,"orientation"=>$orientation, "user_id"=>$user_id, "row"=>$row,  "tooltip"=>$tooltip, 
          "date"=>$date, "to_hour"=>$to_hour, "from_hour"=>$from_hour );

         // Update
         $value=Seat::updateData($editid, $data);
         $booking=Bookings::insertBookingData($data);
        }
         // if($value){
            $d= array('room_name'=>$room_name,"seat_number"=>$seat_number, "location"=>$location,
             "user_id"=>$user_id, "row"=>$row,  "tooltip"=>$tooltip, 
            "date"=>$date, "to_hour"=>$to_hour, "from_hour"=>$from_hour );
            Log::info(print_r( $d, true));

            

            return  $d;
         // }else{
            //return false;
         // }
     
        
      
      }

}
