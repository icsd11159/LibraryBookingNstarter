<?php

namespace App;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;
use App\Seat;
class Bookings extends Model
{
    public function comments()
    {
        return $this->hasMany('App\Seat');
    }
    public static function getBooking(){

        // if($id==0){
         //  $value=DB::table('libray_seat')->orderBy('id', 'asc')->get(); 
        // }else{
           $value=DB::table('library_bookings')->get(); 
 
       //  }
         return $value;
       }
       public static function getBookingDateTime($date,$from_hour,$to_hour, $orofos){
        $date=explode('T', $date, 2);
        Log::info(   $date[0]  );
           $value=DB::table('library_bookings')->where('date',$date[0])->where('checkin','1')->exists();
         
      
       if( $value!=1){ 
  
        return 0;
       }
       else{
        Log::info( " Find the exist!" );
        $checkinid=DB::table('library_seat')->where('type','seat')->where('room_name',$orofos)->get();
        $count=0;
     //$comments =  App\Models\Post::find(1)->comments;
        //App\Models\Post::find(1)->comments()->where('title', 'foo')->first();
        foreach($checkinid as $chec){
            $checkins=DB::table('library_bookings')->where('seat_id',$chec->id)->where('date',$date[0])->where('checkin','1')->exists();
            if( $checkins==1){
                $count++;
            }
        }
        
        $notcheckins=DB::table('library_seat')->where('type','seat')->where('room_name',$orofos)->count();
        Log::info(   $count  );
        Log::info(  $notcheckins  );
       if($notcheckins>0){
        $pososto=($count*100)/$notcheckins;
       }else{
        $pososto=false;
       }
      Log::info(  $pososto  );
        return  $pososto;
       }
       
       }
       public static function UpdateCheckin($id){
             $update=DB::table('library_bookings')->where('user_id',$id)->update(array('checkin' => '1'));  
             return $update;
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
