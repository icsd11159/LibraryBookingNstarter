<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBorrowingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('borrowings', function (Blueprint $table) {
            $table->increments('id');
            $table->bigInteger('user_id')->unsigned()->nullable(); 
            $table->integer('book_id')->unsigned()->nullable(); 
            $table->date('date')->nullable(); 
            $table->time('from_hour')->nullable(); 
            $table->time('to_hour')->nullable();  
            $table->boolean('reserved')->default(false); 
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('book_id')->references('id')->on('books')->onDelete('cascade');
      
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('borrowings');
    }
}
