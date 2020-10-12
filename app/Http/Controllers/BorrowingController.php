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
    public function getSuggestedbook(Request $request){
        $request_data=$request->all();            
        $user = $request_data['user'];                   
       
        $user_id = Users::getUserIdBymail( $user);
        $suggest= Borrowings::getSuggestedbooks($user_id);
        return   $suggest;
    }
    
}
