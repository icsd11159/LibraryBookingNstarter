
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


   <form method='post' action='/save'>

     <!-- Message -->
     @if(Session::has('message'))
       <p >{{ Session::get('message') }}</p>
     @endif

     <!-- Add/List records -->
     <table border='1' style='border-collapse: collapse;' ALIGN="center">
     @if(!isset($userData['edit']))
       <tr>
         <th>Room Id</th>
         <th>Seat Id</th>
         <th>Type</th>
         <th>Reserved</th>
         <th>Orientation</th>
         <th>User Id</th>
         <th>Row</th> 
         <th>Location</th>
         <th>Tooltip</th>
         <th>Date</th> 
         <th>From Hour</th> 
         <th>To Hour</th>
        
         <th></th>
       </tr>
       <tr>
         <td colspan="5">{{ csrf_field() }}</td>
       </tr>
       <!-- Add -->
       <tr>
       <td  class = "select" ALIGN="center"> 
         <select name="room_name" id="room_name">
                                <option value="Ισόγειο" selected>Ισόγειο</option>
                                <option value="Όροφος1">1ος Όροφος</option>
                                <option value="Όροφος2">2ος Όροφος</option>
                                <option value="Όροφος3">3ος Όροφος</option>
                                <option value="Όροφος4">4ος Όροφος</option>
                            </select></td>
         <td><input type='text'size="10"  placeholder="p.x.Α11" id='seat_number'  name='seat_number' placeholder="p.x.table1" required ></td>
         <td  class = "select" ALIGN="center"> 
         <select name="type" id="type">
                                <option value="seat" selected>Κάθισμα</option>
                                <option value="table">Τραπέζι</option>
                                <option value="corridor">Διάδρομος</option>
                            </select></td>
         <td>  <input id="reserved" name="reserved"  value="0"   type="hidden"   >
               <input  id="reserved"   name="reserved"  value="1"  class="checkbox" type="checkbox"  ></td>
         <td><input id="orientation" name="orientation"  value="0"   type="hidden"   >
                      <input  id="orientation"   name="orientation"  value="1"  class="checkbox" type="checkbox"  ></td>
       
         <td  class = "select" ALIGN="center"> 
         <select name="user_id" id="user_id">
                         @foreach($userData['userData'] as $userD)
                                <option value="{{$userD->name}}" >{{$userD->name}}</option>
                             
                                @endforeach            
                            </select></td>
       
         <td><input type='number' min="1" max="5" style="width: 5em;" name='row' value=" " required></td>
         <td><input type='number'min="1" max="5" style="width: 5em;" name='location' value=" " required></td>
         <td><input type='text'  name='tooltip' placeholder="p.x.table" ></td>
         <td><input type='date' name='date' value=" "></td>
         <td><input type='time'size='4' name='from_hour' value=" " ></td>
         <td><input type='time' size='4' name='to_hour' value=" "></td>
         <td><input type='submit' name='submit' value='Add'></td>
       </tr>
       @endif
     <!-- List -->
     @if(!isset($userData['edit']))
     @foreach($userData['data'] as $user)
       <tr>
         <td>{{ $user->room_name }}</td>
         <td>{{ $user->seat_number }}</td>
         <td>{{ $user->type }}</td>
        <td> 
         @if($user->reserved  == 1) true @else false @endif 
       </td>
       <td> 
        @if($user->orientation  == 1) true @else false @endif 
       </td>
         <td>{{ $user->user_id }}</td>
         <td>{{ $user->row }}</td>
         <td>{{ $user->location }}</td>
         <td>{{ $user->tooltip }}</td>
         <td>{{ $user->date }}</td>
         <td>{{ $user->from_hour }}</td>
         <td>{{ $user->to_hour }}</td>
         <td height="30"><a href='editUser/{{ $user->id }}'>Update/Delete</a> </td>
       </tr>
       @endforeach
    </table>
  </form>
  @endif
  
  <!-- Edit -->
  @if(isset($userData['edit']))
 
  <form method='post' action='/save'>
   <table>
     <tr>
       <td colspan='2'><h1>  <a href='/deleteUser/{{ $userData['editData'][0]->id }}'>Delete</a> Or Edit record</h1></td>
     </tr>
     <tr>
       <td colspan="2">{{ csrf_field() }}</td>
     </tr>
     <tr>
       <td>Room Name</td>
  
       <td  class = "select" > 
         <select name="room_name" id="room_name">
                            <option value="Ισόγειο" @if($userData["editData"][0]->room_name == "Ισόγειο") selected @endif>Ισόγειο</option>
                            <option value="Όροφος1" @if($userData["editData"][0]->room_name == "Όροφος1") selected @endif>1ος Όροφος</option>
                            <option value="Όροφος2" @if($userData["editData"][0]->room_name == "Όροφος2") selected @endif>2ος Όροφος</option>
                            <option value="Όροφος3" @if($userData["editData"][0]->room_name == "Όροφος3") selected @endif>3ος Όροφος</option>
                        </select></td>
     </tr>
     <tr>
       <td>Seat Number</td>
       <td><input type='text' name='seat_number' id='seat_number' value='{{ $userData["editData"][0]->seat_number }}' required></td>
     </tr> 
     <tr>
       <td>Type</td>
        <td  class = "select"> 
         <select name="type" id="type">
                            <option value="seat" @if($userData["editData"][0]->type == "seat") selected @endif>Κάθισμα</option>
                            <option value="table" @if($userData["editData"][0]->type == "table") selected @endif>Τραπέζι</option>
                            <option value="corridor" @if($userData["editData"][0]->type == "corridor") selected @endif>Διάδρομος</option>
                        </select></td>
     </tr>
     <tr>
       <td>Reserved</td>

       <td>  <input id="reserved" name="reserved"  value="0"   type="hidden"   >
             <input type='checkbox' name='reserved' id='reserved' value='1'   @if($userData["editData"][0]->reserved  == 1) checked="checked"  @endif >
      </td>
   </tr>
     <tr>
       <td>Orientation</td>
       <td>  <input id="orientation" name="orientation"  value="0"   type="hidden"   >
             <input type='checkbox' name='orientation' id='orientation' value='1'   @if($userData["editData"][0]->orientation  == 1) checked="checked"  @endif >
      </td>
     </tr>
     <tr>
       <td>User_id</td>
   
       <td  class = "select" > 
         <select name="user_id" id="user_id">
                         @foreach($userData['userData'] as $userD)
                                
                                <option value="{{$userD->name}}" @if($userData["editData"][0]->user_id == $userD->id) selected @endif >{{$userD->name}}</option>
                             
                                @endforeach            
                            </select></td>
     </tr>
     <tr>
       <td>Row</td>
       <td><input type='number' name='row' id='row' value='{{ $userData["editData"][0]->row }}' required></td>
     </tr>
     <tr>
       <td>Location</td>
       <td><input type='number' name='location' id='location' value='{{ $userData["editData"][0]->location }}' required></td>
     </tr>
     <tr>
       <td>Tooltip</td>
       <td><input type='text' name='tooltip' id='tooltip' value='{{ $userData["editData"][0]->tooltip }}' ></td>
     </tr>
     <tr>
       <td>Date</td>
       <td><input type='date' name='date' id='date' value='{{ $userData["editData"][0]->date }}' ></td>
     </tr>
     <tr>
       <td>From(hour)</td>
       <td><input type='time' name='from_hour' id='from_hour' value='{{ $userData["editData"][0]->from_hour }}' ></td>
     </tr>
     <tr>
       <td>To(hour)</td>
       <td><input type='time' name='to_hour' id='to_hour' value='{{ $userData["editData"][0]->to_hour }}' ></td>
     </tr>
     <tr>
       <td>&nbsp;<input type='hidden' value='{{ $userData["edit"] }}' name='editid'></td>
       <td><input type='submit' name='submit' value='Submit'></td>
     </tr>
   </table>
  </form>
  @if($userData["editData"][0]->reserved  == 1)
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
