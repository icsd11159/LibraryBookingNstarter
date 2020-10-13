<?php

namespace App;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Bookings;

use Illuminate\Database\Eloquent\Model;

class Books extends Model
{
    protected $table = 'books';

    protected $fillable = [
      'book_name', 'author', '	category', 'year'];
    
    //
 
    public static function getBooks(){

     
          $value=DB::table('books')->get(); 

        return $value;
      }
      public function borrowings()
      {
          return $this->hasMany('App\Borrowings');
      }
      public static function getFreeBooks($book_id){
    
        $value=DB::table('borrowings')->where('book_id',$book_id)->where('reserved',1)->exists(); 
        return  $value;
     
       
    }
    public static function getUserBooks(){
        $isBooked=DB::table('borrowings')->where('book_id',$book_id)->where('user_id',$user_id)->get();  
     
      

      return $isBooked;
    }
      
}
