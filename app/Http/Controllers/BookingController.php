<?php

namespace App\Http\Controllers;

use Session;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Seat;
use App\Users;
use App\Bookings;
use Illuminate\Support\Facades\Log;
class BookingController extends Controller
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
 
        
        $userData['bookingData'] = Bookings::getBooking();
        $userData['data'] = Seat::getseatData();
        $userData['userData'] = Users::getUsers();
       // $userData['edit'] = $id;
    
        // Fetch edit record
       // if($id>0){
         // $userData['editData'] = Seat::getseatData();
      //  }
     // Log::info(print_r( $userData, true));
        // Pass to view
        return view('bookings')->with("userData",$userData);
        //return view('index')->with("userData",$userData);
        
      }
    
      public function saveBookings(Request $request){
      
  
        if ($request->input('submit') != null ){
    
          // Update record
          if($request->input('editid') !=null ){
       
            $seat_id = $request->input('seat_id');
            $checkin = $request->input('checkin');
            $user_id = $request->input('user_id');
            $date = $request->input('date');
            $from_hour = $request->input('from_hour');
            $to_hour = $request->input('to_hour');


            $editid = $request->input('editid');
    
         //   if($name !='' && $email != ''){
            
                $data = array("seat_id"=>$seat_id, "checkin"=>$checkin, "user_id"=>$user_id,  
                "date"=>$date, "to_hour"=>$to_hour, "from_hour"=>$from_hour );
     
               // Update
               Bookings::updateData($editid, $data);

               Session::flash('message','Update successfully.');
     
            //}
          
          }else{ // Insert record
            $seat_id = $request->input('seat_id');
            $checkin = $request->input('checkin');
            $user_id = $request->input('user_id');
            $date = $request->input('date');
            $from_hour = $request->input('from_hour');
            $to_hour = $request->input('to_hour');


            $editid = $request->input('editid');
    
         //   if($name !='' && $email != ''){
            
                $data = array("seat_id"=>$seat_id, "checkin"=>$checkin, "user_id"=>$user_id,  
                "date"=>$date, "to_hour"=>$to_hour, "from_hour"=>$from_hour );
     
                //Log::info(print_r( $table, true));
                // Insert
                $value = Bookings::insertData($data);
                if($value){
                    Log::info(print_r( "why??", true));
                  Session::flash('message','Insert successfully.');
                }else{
                  Session::flash('message','Username already exists.');
                }
     
           //  }
          }
     
        }
        return redirect()->action('BookingController@index');
      }
      public function editBookings($id){
    
      //  if($id != 0){
          // Delete
          $userData['edit'] = $id;
          $userData['editBookingData'] = Bookings::getBookingsData($id);
          $userData['editData'] = Seat::getseatData();
          $userData['userData'] = Users::getUsers();
          $userData['userMail'] = Users::getUserMail( $userData['editBookingData'][0]->user_id);

          Log::info(print_r(  $userData['editBookingData'], true));
    
          return view('bookings')->with("userData",$userData);
      }
      public function deleteBookings($id=0){
    
        if($id != 0){
          // Delete
       
          Seat::deleteData($id);
          $reserved= DB::table('library_seat')->where('id',$id)->value('reserved'); 
         
          Session::flash('message','Delete successfully.');
          
        }
        return redirect()->action('BookingController@index');
      }
}
