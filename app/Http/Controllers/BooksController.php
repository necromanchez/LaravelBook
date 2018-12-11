<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Books;
use App\User;
class BooksController extends Controller
{
    public function index()
    {
      $user = Auth::user();
      if ($user->type == "Admin"){
        $books = Books::all();
      }
      else{
        $books = Books::where('userid', $user->id)->get();
      }
        return view('booksmodule.index', compact('books'));
      
    }

      public function __construct()
    {
        $this->middleware('auth');
         $this->user =  \Auth::user();
    }

    public function create()
	{
    $users = User::all();
	   return view('booksmodule.create',compact('users'));
	}

    public function edit($id)
    {
         $books = Books::find($id);

        return view('booksmodule.edit', compact('books'));
    }

	public function show($id)
    {
        //
    }

    public function store(Request $request)
    {
        $request->validate([
        'title'=>'required',
        'description'=> 'required',
        'userid' => 'required'
      ]);
      $book = new Books([
        'title' => $request->get('title'),
        'description'=> $request->get('description'),
        'userid' => $request->get('userid')
      ]);
      $book->save();
      return redirect('/books')->with('success', 'Book has been added');
    }

    public function update(Request $request, $id)
    {
        $request->validate([
        'title'=>'required',
        'description'=> 'required',
      ]);

      $book = Books::find($id);
      $book->title = $request->get('title');
      $book->description = $request->get('description');
     
      $book->save();
      return redirect('/books')->with('success', 'Books has been updated');
    }

    public function destroy($id)
    {
     $book = Books::find($id);
     $book->delete();
     return redirect('/books')->with('success', 'Books has been deleted Successfully');
    }
}
