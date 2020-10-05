<?php

namespace App;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;
use App\Seat;
class Bookings extends Model
{
    public static function getBooking(){

        // if($id==0){
         //  $value=DB::table('libray_seat')->orderBy('id', 'asc')->get(); 
        // }else{
           $value=DB::table('library_bookings')->get(); 
 
       //  }
         return $value;
       }
       public static function insertBookingData($data){
             
          
              Log::info(print_r($data, true));
           
            $seat_id = Seat::getSeatId($data['seat_number']);
            $user_id = $data['user_id'];
            $date = $data['date'];
            $from_hour = $data['from_hour'];
            $to_hour = $data['to_hour'];
            $checkin= false;
            Log::info(print_r( "add Booking", true));
           
         //    if($room_name !='' && $username !='' && $email != ''){
            $data = array('seat_id'=>$seat_id,"user_id"=>$user_id,"date"=>$date,
            "from_hour"=>$from_hour,"to_hour"=>$to_hour, "checkin"=>$checkin );

                //Log::info(print_r( $table, true));
                // Insert
                DB::table('library_bookings')->insert($data);
    
      // if($value->count() == 0){
         Log::info(print_r( $data, true));
         
           return true;
      
      
       } 
}
