<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLibrarySeatTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(){   
        Schema::create('library_seat', function (Blueprint $table) {
            $table->increments('id');
            $table->string('room_name');
            $table->string('seat_number');
            $table->string('type');
            $table->integer('row')->nullable(); 
            $table->integer('location')->nullable(); 
            $table->string('tooltip')->nullable();
            $table->boolean('reserved')->default(false); 
            $table->bigInteger('user_id')->unsigned()->nullable(); 
            $table->date('date')->nullable(); 
            $table->time('from_hour')->nullable(); 
            $table->time('to_hour')->nullable();  
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
       
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('library_seat');
    }
}
