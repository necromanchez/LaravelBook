@extends('layouts.layoutmain')

@section('content')
<style>
  .uper {
    margin-top: 40px;
  }
</style>
<div class="card uper">
  <div class="card-header">
    Edit Book
  </div>
  <div class="card-body">
    @if ($errors->any())
      <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
              <li>{{ $error }}</li>
            @endforeach
        </ul>
      </div><br />
    @endif
  
       <form method="post" action="{{ route('books.update', $books->id) }}">
          <div class="form-group">
              @csrf
              <label for="title">Title:</label>
              <input type="text" class="form-control" name="title"  value={{ $books->title }}>
          </div>
          <div class="form-group">
              <label for="description">Description :</label>
              <input type="text" class="form-control" name="description"  value={{ $books->description }}>
          </div>
          
          <button type="submit" class="btn btn-primary">Update</button>
      </form>
  </div>
</div>
@endsection