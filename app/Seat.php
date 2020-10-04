<?php

namespace App;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;
class Seat extends Model
{
    protected $casts = [
        'reserved' => 'boolean',
        'orientation' => 'boolean'
    ];
    //
    public static function getseatData(){

       // if($id==0){
        //  $value=DB::table('libray_seat')->orderBy('id', 'asc')->get(); 
       // }else{
          $value=DB::table('library_seat')->get(); 

      //  }
        return $value;
      }
      public static function getseatOrofosData(){

        // if($id==0){
         //  $value=DB::table('libray_seat')->orderBy('id', 'asc')->get(); 
        // }else{
          //Log::info(print_r( $orofos, true));
          $value['Ισόγειο']=DB::table('library_seat')->where('room_name','Ισόγειο')->get(); 
          $value['Όροφος1']=DB::table('library_seat')->where('room_name','Όροφος1')->get(); 
          $value['Όροφος2']=DB::table('library_seat')->where('room_name','Όροφος2')->get(); 
          $value['Όροφος3']=DB::table('library_seat')->where('room_name','Όροφος3')->get(); 
           Log::info(print_r(  $value, true));
       //  }
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
