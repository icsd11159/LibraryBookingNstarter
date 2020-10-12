<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Users;
use App\Books;
use Illuminate\Support\Facades\Log;

class BooksController extends Controller
{
    public function index(){
       
                              
        $books = Books::getBooks();
        $freebooks=[];
        $index=0;
        foreach(  $books as $data){
          //  Log::info( $datas  );
         // foreach( $datas as $data){
        
          if($data->id!=null){
       //     $data->user_name = Users::getUserName($data->user_id);
            $isfree  =  Books::getFreeBooks($data->id);
            if($isfree!=1){
                $freebooks[$index]=$data;
                $index++;
         //   }
          }                 
        }
        }
        Log::info( "Bookscntroller"  );
     //   Log::info( "Bookscntroller"  );
       return  $freebooks;
    }
}
