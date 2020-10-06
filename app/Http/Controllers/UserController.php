<?php

namespace App\Http\Controllers;

use Session;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Seat;
use App\Users;
use App\Bookings;
use Illuminate\Support\Facades\Log;
class UserController extends Controller
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
 
       
        $userData['userData'] = Users::getUsersAll();
     
       
        return view('user')->with("userData",$userData);
       
        
      }
    
      public function saveUser(Request $request){
      
  
        if ($request->input('submit') != null ){
    
          // Update record
          if($request->input('editid') !=null ){
            $editid = $request->input('editid');
            $name = $request->input('name');
            $email = $request->input('email');
            $phone = $request->input('phone');
            $photo = $request->input('photo');
            $role = $request->input('role');        
            $userData = Users::getUsersData($editid);
            $email_verified_at	= $userData[0]->email_verified_at;
            $password = $userData[0]->password;
            $remember_token =$userData[0]->remember_token;
        
        
                $data = array("name"=>$name, "email"=>$email, "phone"=>$phone,  
                "photo"=>$photo, "role"=>$role, "email_verified_at"=>$email_verified_at,
                "password"=>$password,"remember_token"=>$remember_token);
     
     
               // Update
               Users::updateData($editid, $data);

               Session::flash('message','Update successfully.');
     
            
          
          }else{ // Insert record
            $editid = $request->input('editid');
            $name = $request->input('name');
            $email = $request->input('email');
            $phone = $request->input('phone');
            $photo = $request->input('photo');
            $role = $request->input('role');        
            $userData = Users::getUsersData($editid);
            $email_verified_at	= $userData[0]->email_verified_at;
            $password = $userData[0]->password;
            $remember_token =$userData[0]->remember_token;
        
        
                $data = array("name"=>$name, "email"=>$email, "phone"=>$phone,  
                "photo"=>$photo, "role"=>$role, "email_verified_at"=>$email_verified_at,
                "password"=>$password,"remember_token"=>$remember_token);
     
              
                // Insert
                $value = Users::insertData($data);
                if($value){
                    Log::info(print_r( "why??", true));
                  Session::flash('message','Insert successfully.');
                }else{
                  Session::flash('message','Username already exists.');
                }
     
           //  }
          }
     
        }
        return redirect()->action('UserController@index');
      }
      public function editUser($id){
    
      //  if($id != 0){
          // Delete
          $userData['edit'] = $id;
          //$userData['editBookingData'] = Bookings::getBookingsData($id);
        //  $userData['editData'] = Seat::getseatData();
          $userData['userData'] = Users::getUsersAll();
          $userData['editUserData'] = Users::getUsersData($id);
         // $userData['userMail'] = Users::getUserMail( $userData['editBookingData'][0]->user_id);

         // Log::info(print_r(  $userData['editBookingData'], true));
    
          return view('user')->with("userData",$userData);
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
