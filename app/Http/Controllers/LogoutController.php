<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LogoutController extends Controller
{
     public function getLogout(){
        Auth::logout();
        Session::flush();
        return Redirect::to('/');
    }
     public function index()
    {
          Auth::logout();
        Session::flush();
 return Redirect::to('/');
        //return view('usermodule.index', compact('users'));
    }
}
