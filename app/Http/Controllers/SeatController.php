<?php

namespace App\Http\Controllers;

use Session;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Seat;
use App\Users;
use Illuminate\Support\Facades\Log;
class SeatController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index(){
 
       
        $userData['data'] = Seat::getseatData();
        $userData['userData'] = Users::getUsers();
       // $userData['edit'] = $id;
    
        // Fetch edit record
       // if($id>0){
         // $userData['editData'] = Seat::getseatData();
      //  }
     // Log::info(print_r( $userData, true));
        // Pass to view
        return view('index')->with("userData",$userData);
        //return view('index')->with("userData",$userData);
        
      }
    
      public function save(Request $request){
      
  
        if ($request->input('submit') != null ){
    
          // Update record
          if($request->input('editid') !=null ){
            $room_name = $request->input('room_name');
            $seat_number = $request->input('seat_number');
            $type = $request->input('type');
            $reserved = $request->input('reserved');
            $orientation = $request->input('orientation');
            $location = $request->input('location');
            $tooltip = $request->input('tooltip');
            $user_name = $request->input('user_id');
            $user_id = Users::getUserId( $user_name);
            $row = $request->input('row');
            $date = $request->input('date');
            $from_hour = $request->input('from_hour');
            $to_hour = $request->input('to_hour');


            $editid = $request->input('editid');
    
         //   if($name !='' && $email != ''){
            
                $data = array('room_name'=>$room_name,"seat_number"=>$seat_number,"type"=>$type, "location"=>$location,
                "reserved"=>$reserved,"orientation"=>$orientation, "user_id"=>$user_id, "row"=>$row,  "tooltip"=>$tooltip, 
                "date"=>$date, "to_hour"=>$to_hour, "from_hour"=>$from_hour );
     
               // Update
               Seat::updateData($editid, $data);
             
             
               Session::flash('message','Update successfully.');
     
            //}
          
          }else{ // Insert record
            $room_name = $request->input('room_name');
            $seat_number = $request->input('seat_number');
            $type = $request->input('type');
            $reserved = $request->input('reserved');
            $orientation = $request->input('orientation');
            $location = $request->input('location');
            $user_name = $request->input('user_id');
            $user_id = Users::getUserId( $user_name);
            $tooltip = $request->input('tooltip');
            $row = $request->input('row');
            $date = $request->input('date');
            $from_hour = $request->input('from_hour');
            $to_hour = $request->input('to_hour');
            Log::info(print_r( "add", true));
           
         //    if($room_name !='' && $username !='' && $email != ''){
            $data = array('room_name'=>$room_name,"seat_number"=>$seat_number,"type"=>$type,"location"=>$location,
            "reserved"=>$reserved,"orientation"=>$orientation, "user_id"=>$user_id, "row"=>$row, "tooltip"=>$tooltip,
            "date"=>$date, "to_hour"=>$to_hour, "from_hour"=>$from_hour );

                //Log::info(print_r( $table, true));
                // Insert
                $value = Seat::insertData($data);
                if($value){
                    Log::info(print_r( "why??", true));
                  Session::flash('message','Insert successfully.');
                }else{
                  Session::flash('message','Username already exists.');
                }
     
           //  }
          }
     
        }
        return redirect()->action('SeatController@index');
      }
      public function editUser($id){
    
      //  if($id != 0){
          // Delete
          $userData['edit'] = $id;
          $userData['editData'] = Seat::getEditseatData($id);
          $userData['userData'] = Users::getUsers();
          $userData['userMail'] = Users::getUserMail($userData["editData"][0]->user_id);
          $userData['editBookingData'] = Users::getUserMail($userData["editData"][0]->user_id);
        
          return view('index')->with("userData",$userData);
      }
      public function deleteUser($id=0){
    
        if($id != 0){
          // Delete
       
          Seat::deleteData($id);
          $reserved= DB::table('library_seat')->where('id',$id)->value('reserved'); 
         
          Session::flash('message','Delete successfully.');
          
        }
        return redirect()->action('SeatController@index');
      }
}
