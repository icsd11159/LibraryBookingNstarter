<?php

namespace App\Http\Controllers;

use App\Users;
use App\Books;
use App\Borrowings;

use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;

class BorrowingController extends Controller
{
    public function postBorrow(Request $request){
       
        Log::info( $request->all());
        $request_data=$request->all();
        $book_id = $request_data['id'];                   
        $user = $request_data['user'];                   
       
        $user_id = Users::getUserIdBymail( $user);
        $borrow= Borrowings::insertBorrowingsData($user_id,$book_id);
       return   $borrow;
    }
    public function getsuggestedSelectedbook(Request $request){
        $request_data=$request->all();            
        $book_id = $request_data['book_id'];                   
        $user = $request_data['user'];                   
       
        $user_id = Users::getUserIdBymail( $user);
       
        $suggest= Borrowings::getsuggestedSelectedbooks($book_id,$user_id);
    
       
         
        return   $suggest;
    }
    public function getSuggestedbook(Request $request){
        $request_data=$request->all();            
        $user = $request_data['user'];                   
       
        $user_id = Users::getUserIdBymail( $user);
        $suggest['category']= Borrowings::getSuggestedbooks($user_id);
        $suggest['writer'] = Borrowings::getSuggestedWriterbooks($user_id);
       
         
        return   $suggest;
    }
    
}
