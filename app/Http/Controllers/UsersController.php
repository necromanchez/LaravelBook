<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
class UsersController extends Controller
{
   public function index()
    {
         $users = User::all();

        return view('usermodule.index', compact('users'));
    }

    public function create()
    {
       return view('usermodule.create');
    }

    public function edit($id)
    {
         $user = User::find($id);

        return view('usermodule.useredit', compact('user'));
    }

	public function show($id)
    {
        //
    }

    public function store(Request $request)
    {
        $request->validate([
        'name'=>'required',
        'email'=> 'required',
        'typeuser' => 'required',
        'pass'  => 'required'
      ]);
      $user = new User([
        'name' => $request->get('name'),
        'email'=> $request->get('email'),
        'type'=> $request->get('typeuser'),
        'password' => Hash::make($request->get('pass')),
      ]);
      $user->save();
      return redirect('/users')->with('success', 'User has been added');
    }

    public function update(Request $request, $id)
    {
        $request->validate([
        'name'=>'required',
        'email'=> 'required',
        'typeuser' => 'required'
      ]);

      $user = User::find($id);
      $user->name = $request->get('name');
      $user->email = $request->get('email');
      $user->type = $request->get('typeuser');
      $user->save();
      return redirect('/users')->with('success', 'User has been updated');
    }

    public function destroy($id)
    {
     $user = User::find($id);
     $user->delete();

     return redirect('/users')->with('success', 'User has been deleted Successfully');
    }

   
}
