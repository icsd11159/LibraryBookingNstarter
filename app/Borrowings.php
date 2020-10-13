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
      "reserved"=>0);

          Log::info(print_r( $data, true));
          // Insert
          $insert=DB::table('borrowings')->insert($data);


  
   
     return  $insert;


 } 
 public static function getSuggestedWriterbooks($user){
    $books=DB::table('borrowings')->where('user_id',$user)->get();
  
    foreach($books as $book){
        $book_id=$book->book_id;
        $writers=DB::table('books')->where('id',$book_id)->value('author');
        // $writer=DB::table('books')->where('author',$writers)->take(1);
      
    }
  
    $writer=DB::table('books')->where('author',$writers)->first();
    return $writer;
 }
 public static function getSuggestedbooks($user){
    $books=DB::table('borrowings')->where('user_id',$user)->get();
    $categories=[0,0,0,0,0];
    $categoriesstring=['Φαντασίας','Πολιτικά','Ιστορικά','Επιστημονικά','Κοινωνικά'];
  
    foreach($books as $book){
        $i=0;
        $book_id=$book->book_id;
        $book_category=DB::table('books')->where('id',$book_id)->value('category'); 
        foreach( $categoriesstring as $strings){
            if( $book_category==$strings){
                $categories[0]= $categories[$i]+1; 
              }
            $i++;
        }
   
    
    }
    $max_count=$categories[0];
    $category=$categoriesstring[0];
    $index=0;
    foreach ($categories as $cat){
        if($cat>$max_count){
            $max_count=$cat;
            $category=$categoriesstring[$index];
        }
        $index++;
    }
    Log::info(print_r( "max_count", true));
    Log::info(print_r($category, true));
   
    $mycategory=DB::table('books')->where('category',$category)->take(2)->get();
   
       
    return $mycategory;
         /*   $value['Φαντασία']=DB::table('books')->where('type','Φαντασία')->count(); 
           $value['Πολιτικά']=DB::table('library_seat')->where('type','Πολιτικά')->count(); 
           $value['Ιστορικά']=DB::table('library_seat')->where('type','Ιστορικά')->count(); 
           $value['Επιστημονικά']=DB::table('library_seat')->where('type','Επιστημονικά')->count(); 
           $value['Κοινωνικά']=DB::table('library_seat')->where('type','Κοινωνικά')->count(); 
           
             if( $book_category=='Φαντασία'){
          $categories[0]= $categories[0]+1; 
        }
         else if( $book_category=='Πολιτικά'){
            $categories[1]= $categories[1]+1; 
          }
          else if( $book_category=='Ιστορικά'){
            $categories[2]= $categories[2]+1; 
          }
          else if( $book_category=='Επιστημονικά'){
            $categories[3]= $categories[3]+1; 
          }
          else if( $book_category=='Κοινωνικά'){
            $categories[4]= $categories[4]+1; 
          }*/
          
 }
 public static function getsuggestedSelectedbooks($book_id,$user_id){
    $books=DB::table('borrowings')->where('book_id',$book_id)->where('user_id','!=',$user_id)->take(2)->get();
    $user1=$books[0]->user_id;
    $user2=$books[1]->user_id;
    $book['user1']=DB::table('borrowings')->where('book_id','!=',$book_id)->where('user_id',$user1)->first();
    $book['user2']=DB::table('borrowings')->where('book_id','!=',$book_id)->where('user_id',$user2)->first();
    return $book;
 }


}
