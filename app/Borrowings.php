<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class Borrowings extends Model
{
    protected $fillable = ['date','from_hour','to_hour','reserved'];

    protected $table = 'borrowings';

    public function book()
    {
        return $this->hasOne(Books::class);
    }
    public function store()
    {
        return $this->belongsTo('App\Books', 'book_id', 'id');
    }

    public static function insertBorrowingsData($user,$book_id){
             
    
     

      $data = array('book_id'=>$book_id,"user_id"=>$user,
      "reserved"=>1);

          Log::info(print_r( $data, true));
          // Insert
          $insert=DB::table('borrowings')->insert($data);


  
   
     return  $insert;


 } 
}
