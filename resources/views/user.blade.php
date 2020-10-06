
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


   <form method='post' action='/saveuser'>

     <!-- Message -->
     @if(Session::has('message'))
       <p >{{ Session::get('message') }}</p>
     @endif
     USERS MANAGER
  <!-- Add/Edit records -->
  <table border='1' style='border-collapse: collapse;' ALIGN="center">
     @if(!isset($userData['edit']))
       <tr>
     
         <th>Name</th>
         <th>Email</th>
         <th>Photo</th> 
         <th>Phone</th> 
         <th>Role</th>

        
         <th></th>
       </tr>
       <tr>
         <td colspan="5">{{ csrf_field() }}</td>
       </tr>
       <!-- Add -->
       <tr>
      
   
    
         <td><input type='text' name='name' value=" "></td>
         <td><input type='email' name='email' value=" "></td>
         <td><input type='text' name='photo' value=" " ></td>
         <td><input type='integer'maxSize='10' name='phone' value=" " ></td>
        
         <td  class = "select" ALIGN="center"> 
         <select name="role" id="role">
                                <option value="1" selected>Admin</option>
                                <option value="2">SeatManager</option>
                                <option value="3">BookingManager</option>
                                <option value="4">OnlyUser</option>
                            </select></td>
       
         <td><input type='submit' name='submit' value='Add'></td>
       </tr>
       @endif
     <!-- List -->
     @if(!isset($userData['edit']))
     @foreach($userData['userData'] as $user)
       <tr>
      
         <td>{{ $user->name}}</td>
         <td>{{ $user->email }}</td>
         <td>{{ $user->photo }}</td>
         <td>{{ $user->phone }}</td>
         <td>{{ $user->role }}</td>
         
         <td height="30"><a href='editUser/{{ $user->id }}'>Update/Delete</a> </td>
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
      <td colspan='2'><h1>  <a href='/deleteUser/{{ $userData['editUserData'][0]->id }}'>Delete</a> Or Edit record</h1></td>
    </tr>
    <tr>
      <td colspan="2">{{ csrf_field() }}</td>
    </tr>
 
     
   
   
    <tr>
      <td>Name</td>
      <td><input type='text' name='name' id='name' value='{{ $userData["editUserData"][0]->name }}' ></td>
    </tr>
    <tr>
      <td>Email</td>
      <td><input type='email' name='email' id='email' value='{{ $userData["editUserData"][0]->email }}' ></td>
    </tr>
    <tr>
      <td>Phone</td>
      <td><input type='integer'maxSize='10' name='phone' id='phone' value='{{ $userData["editUserData"][0]->phone }}' ></td>
    </tr>
    <tr>
      <td>Photo</td>
      <td><input type='text' name='photo' id='photo' value='{{ $userData["editUserData"][0]->photo }}' ></td>
    </tr>
    <tr>
    <tr>
      <td>Role</td>
 
      <td  class = "select" > 
         <select name="role" id="role">
                            <option value="1" @if($userData["editUserData"][0]->role == 1) selected @endif>Admin</option>
                            <option value="2" @if($userData["editUserData"][0]->role == 2) selected @endif>SeatManager</option>
                            <option value="3" @if($userData["editUserData"][0]->role == 3) selected @endif>BookingManager</option>
                            <option value="4" @if($userData["editUserData"][0]->role == 4) selected @endif>OnlyUser</option>
                        </select></td>
    </tr>
  
      <td>&nbsp;<input type='hidden' value='{{ $userData["edit"] }}' name='editid'></td>
      <td><input type='submit' name='submit' value='Submit'></td>
    </tr>
  </table>
 </form>


   @endif


  

 </body>
 <script>



@endsection
