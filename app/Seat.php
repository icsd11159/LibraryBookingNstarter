<?php

namespace App;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;
use App\Bookings;

class Seat extends Model
{
 
  protected $table = 'library_seat';
    protected $casts = [
        'reserved' => 'boolean',
        'orientation' => 'boolean'
    ];
    protected $fillable = [
      'room_name', 'seat_number', '	type', 'row', 'location', '	tooltip', 'date ', 'from_hour', 'to_hour', 'orientation'];
    
    //
    public function bookings()
    {
        return $this->hasMany('App\Bookings');
    }
    public static function getseatData(){

       // if($id==0){
        //  $value=DB::table('libray_seat')->orderBy('id', 'asc')->get(); 
       // }else{
          $value=DB::table('library_seat')->get(); 

      //  }
        return $value;
      }
      public static function  getseatofUser($id){

        // if($id==0){
         //  $value=DB::table('libray_seat')->orderBy('id', 'asc')->get(); 
        // }else{
           $value['checkin']=DB::table('library_seat')->where('user_id', '=', $id)->select('room_name','seat_number','row','location','tooltip')->get();
           Log::info(   $value['checkin']);
       //  }
         return  $value['checkin'];
       }
     
      public static function getseatOrofosData(){
       
       
          //Log::info(print_r( $orofos, true));
          $value['Ισόγειο']=DB::table('library_seat')->where('room_name','Ισόγειο')->get(); 
          $value['Όροφος1']=DB::table('library_seat')->where('room_name','Όροφος1')->get(); 
          $value['Όροφος2']=DB::table('library_seat')->where('room_name','Όροφος2')->get(); 
          $value['Όροφος3']=DB::table('library_seat')->where('room_name','Όροφος3')->get(); 
           Log::info(print_r(  $value, true));
      
   
      
      
         return $value;
       }
      
      public static function getEditseatData($id){

        // if($id==0){
         //  $value=DB::table('libray_seat')->orderBy('id', 'asc')->get(); 
        // }else{
            $value=DB::table('library_seat')->where('id', '=', $id)->get();
            Log::info(print_r( $value, true));
       //  }
         return $value;
       }
        
      public static function getEditBookseatData($id){

        // if($id==0){
         //  $value=DB::table('libray_seat')->orderBy('id', 'asc')->get(); 
        // }else{
            $value=DB::table('library_seat')->where('id', '=', $id)->value('id');
            Log::info(print_r( $value, true));
       //  }
         return $value;
       }
      public static function getSeatId($seatname){
        
        $value=DB::table('library_seat')->where('seat_number', '=', $seatname)->value('id');
        return $value;
      }
       public static function insertData($data){
       $value=DB::table('library_seat')->get();
   
     // if($value->count() == 0){
        Log::info(print_r( $data, true));
          DB::table('library_seat')->insert($data);
          return 1;
       //  }else{
         //  return 0;
        // }
     
      } 
    
      public static function updateData($id,$data){
        DB::table('library_seat')
          ->where('id', $id)
          ->update($data);
      }
    
      public static function deleteData($id){
        DB::table('library_seat')->where('id', '=', $id)->delete();
      }
}
