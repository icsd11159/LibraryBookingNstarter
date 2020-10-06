<?php

namespace App;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;

use Spatie\Permission\Traits\HasRoles;
use App\Seat;
class Bookings extends Model
{
    protected $fillable = ['date','from_hour','to_hour','checkin'];

    protected $table = 'library_bookings';

    public function seat()
    {
        return $this->hasOne(Seat::class);
    }
    public function store()
    {
        return $this->belongsTo('App\Seat', 'seat_id', 'id');
    }
    public static function getBooking(){

        // if($id==0){
         //  $value=DB::table('libray_seat')->orderBy('id', 'asc')->get(); 
        // }else{
           $value=DB::table('library_bookings')->get(); 
 
       //  }
         return $value;
       }

       public static function UpdateCheckin($id){
             $update=DB::table('library_bookings')->where('user_id',$id)->update(array('checkin' => '1'));  
             return $update;
       }
       public static function SeatReserved($id,$date){
        $isBooked=DB::table('library_bookings')->where('seat_id',$id)->where('date',$date)->exists();  
     
        if($isBooked==1){
            return  1;
        }
        else{
            return 0;
        }
      
  }

          public static function getBookingsData($id){

            // if($id==0){
             //  $value=DB::table('libray_seat')->orderBy('id', 'asc')->get(); 
            // }else{
                
                $value=DB::table('library_bookings')->where('id', '=', $id)->get();
                Log::info(print_r( $value, true));
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
       public static function insertData($data){
        $value=DB::table('library_bookings')->get();
    
      // if($value->count() == 0){
         Log::info(print_r( $data, true));
           DB::table('library_bookings')->insert($data);
           return 1;
        //  }else{
          //  return 0;
         // }
      
       } 
       public static function updateData($id,$data){
        DB::table('library_bookings')
          ->where('id', $id)
          ->update($data);
      }
    
      public static function deleteData($id){
        DB::table('library_bookings')->where('id', '=', $id)->delete();
      }
}
