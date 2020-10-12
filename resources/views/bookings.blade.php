
@extends('layouts.app')
<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}" />

<script src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

@section('content')

<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    You are logged in!

                    
                </div>
            </div>
        </div>
    </div>
</div>
<body>


   <form method='get' action='/saveBookings'>

     <!-- Message -->
     @if(Session::has('message'))
       <p >{{ Session::get('message') }}</p>
     @endif
  
  <!-- Add/Bookings records -->
  <table border='1' style='border-collapse: collapse;' ALIGN="center">
     @if(!isset($userData['edit']))
       <tr>
     
         <th>Seat Id</th>
         <th>User Id</th>
         <th>Date</th> 
         <th>From Hour</th> 
         <th>To Hour</th>
         <th>Checkin</th>
        
         <th></th>
       </tr>
       <tr>
         <td colspan="5">{{ csrf_field() }}</td>
       </tr>
       <!-- Add -->
       <tr>
       BOOKINGS MANAGER
       <td  class = "select" ALIGN="center"> 
      
    
         <select name="seat_id" id="seat_id">
                         @foreach($userData['data'] as $userD)
                                <option value="{{$userD->id}}" >{{$userD->seat_number}}</option>
                             
                                @endforeach            
                            </select></td>
        
         <td  class = "select" ALIGN="center"> 
         <select name="user_id" id="user_id">
                         @foreach($userData['userData'] as $userD)
                                <option value="{{$userD->id}}" >{{$userD->name}}</option>
                             
                                @endforeach            
                            </select></td>
       
         <td><input type='date' name='date' value=" "></td>
         <td><input type='time'size='4' name='from_hour' value=" " ></td>
         <td><input type='time' size='4' name='to_hour' value=" "></td>
         <td>  <input id="checkin" name="checkin"  value="0"   type="hidden"   >
               <input  id="checkin"   name="checkin"  value="1"  class="checkbox" type="checkbox"  ></td>
       
         <td><input type='submit' name='submit' value='Add'></td>
       </tr>
       @endif
     <!-- List -->
     @if(!isset($userData['edit']))
     @foreach($userData['bookingData'] as $user)
       <tr>
      
         <td>{{ $user->seat_id }}</td>
         <td>{{ $user->user_id }}</td>
         <td>{{ $user->date }}</td>
         <td>{{ $user->from_hour }}</td>
         <td>{{ $user->to_hour }}</td>
         <td> 
         @if($user->checkin  == 1) true @else false @endif 
       </td>
         <td height="30"><a href='editBookings/{{ $user->id }}'>Update/Delete</a> </td>
       </tr>
       @endforeach
    </table>
  </form>
  @endif
  
  <!-- Edit -->
  @if(isset($userData['edit']))
 
 <form method='post' action='/save'  ALIGN="center" >
  <table>
    <tr>
      <td colspan='2'><h1>  <a href='/deleteBookings/{{ $userData['editBookingData'][0]->id }}'>Delete</a> Or Edit record</h1></td>
    </tr>
    <tr>
      <td colspan="2">{{ csrf_field() }}</td>
    </tr>
    <tr>
      <td>Room Name</td>
 
      <td  class = "select" > 
        <select name="seat_id" id="seat_id">
            @foreach($userData['editData'] as $userD)
                                
                                <option value="{{$userD->id}}" @if($userData["editBookingData"][0]->seat_id == $userD->id) selected @endif >{{$userD->seat_number}}</option>

                                @endforeach         
                         </select></td>
    </tr>
  
     
      <td>Ckeckin</td>
      
      <td>  <input id="checkin" name="checkin"  value="0"   type="hidden"   >
            <input type='checkbox' name='checkin' id='checkin' value='1'   @if($userData["editBookingData"][0]->checkin  == 1) checked="checked"  @endif >
     </td>
  </tr>
   
      <td>User id</td>
  
      <td  class = "select" > 
        <select name="user_id" id="user_id">
                        @foreach($userData['userData'] as $userD)
                               
                               <option value="{{$userD->id}}" @if($userData["editBookingData"][0]->user_id == $userD->id) selected @endif >{{$userD->name}}</option>
                            
                               @endforeach            
                           </select></td>
    </tr>
    <tr>
      <td>Date</td>
      <td><input type='date' name='date' id='date' value='{{ $userData["editBookingData"][0]->date }}' ></td>
    </tr>
    <tr>
      <td>From(hour)</td>
      <td><input type='time' name='from_hour' id='from_hour' value='{{ $userData["editBookingData"][0]->from_hour }}' ></td>
    </tr>
    <tr>
      <td>To(hour)</td>
      <td><input type='time' name='to_hour' id='to_hour' value='{{ $userData["editBookingData"][0]->to_hour }}' ></td>
    </tr>
    <tr>
      <td>&nbsp;<input type='hidden' value='{{ $userData["edit"] }}' name='editid'></td>
      <td><input type='submit' name='submit' value='Submit'></td>
    </tr>
  </table>
 </form>

 <div class="container">
       <h3>If there are changes we have to Inform the User who had make the reservation</h3>
         <span class="success" style="color:green; margin-top:10px; margin-bottom: 10px;"></span>
       <form id="ajaxform">
           <div class="form-group">
               <label>Email To User:</label>
               <input type="email" name="email" class="form-control"  value='{{$userData["userMail"]}}'  readonly>
           </div>

           
           <div class="form-group">
               <strong>Message:</strong>
               <input type="text" name="message" class="form-control"  Placeholder="The value :[] has changed" required="">
           </div>
           <div class="form-group">
               <button class="btn btn-success save-data">Send the mail</button>
           </div>
       </form>
   </div>
   @endif


  

 </body>
 <script>

$(".save-data").click(function(event){
    event.preventDefault();
   
   
    let email = $("input[name=email]").val();
    let message = $("input[name=message]").val();
  
    var data = {
    service_id: 'BookingInfromGmail',
    template_id: 'template_un8wsdh',
    user_id: 'user_aMlscFw0hR9U6PRoOmNZb',
    template_params: {
        'email': email,
        'message' : message
    }
};
    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json'
}).done(function() {
    alert('Your mail is sent!');
}).fail(function(error) {
    alert('Oops... ' + JSON.stringify(error));
});
});
</script>


@endsection
