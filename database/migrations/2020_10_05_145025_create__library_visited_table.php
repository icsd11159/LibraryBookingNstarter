<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLibraryVisitedTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('library_bookings', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('seat_id')->unsigned();
            $table->bigInteger('user_id')->unsigned();
            $table->date('date') ;
            $table->time('from_hour');
            $table->time('to_hour'); 
            $table->boolean('checkin')->default(false);
            $table->timestamps();

            $table->foreign('seat_id')->references('id')->on('library_seat')->onDelete('cascade');
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
        Schema::dropIfExists('library_bookings');
    }
}
