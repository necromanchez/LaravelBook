@extends('layouts.layoutmain')

@section('content')
<style>
  .uper {
    margin-top: 40px;
  }
</style>
<div class="uper">
  @if(session()->get('success'))
    <div class="alert alert-success">
      {{ session()->get('success') }}  
    </div><br />
  @endif
  
  @if( Auth::user()->type  != "Reader")
    <a href="{{ route('books.create')}}" class="btn btn-primary">ADD</a>
 @endif
  <table class="table table-striped">
    <thead>
        <tr>
          <td>IDs</td>
          <td>Title</td>
          <td>Description</td>
          @if( Auth::user()->type  != "Reader")
          <td colspan="2">Action</td>
          @endif
        </tr>
    </thead>
    <tbody>
        @foreach($books as $book)
        <tr>
            <td>{{$book->id}}</td>
            <td>{{$book->title}}</td>
            <td>{{$book->description}}</td>
            @if( Auth::user()->type  != "Reader")
            <td><a href="{{ route('books.edit',$book->id)}}" class="btn btn-primary">Edit</a></td>
            <td>
                <form action="{{ route('books.destroy', $book->id)}}" method="post">
                  @csrf
                  @method('DELETE')
                  <button class="btn btn-danger" type="submit">Delete</button>
                </form>
            </td>
            @endif
        </tr>
        @endforeach
    </tbody>
  </table>
<div>
@endsection