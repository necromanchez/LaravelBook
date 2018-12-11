@extends('layouts.layoutmain')

@section('content')
<style>
  .uper {
    margin-top: 40px;
  }
</style>
<div class="card uper">
  <div class="card-header">
    Add Book
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
      <form method="post" action="{{ route('books.store') }}">
          <div class="form-group">
              @csrf
              <label for="title">Title:</label>
              <input type="text" class="form-control" name="title"/>
          </div>
          <div class="form-group">
              <label for="description">Description :</label>
              <input type="text" class="form-control" name="description"/>
          </div>
          <div class="form-group">
                               <label for="description">User :</label>
                                <select id="userid" type="text" class="form-control{{ $errors->has('userid') ? ' is-invalid' : '' }}" name="userid">
                                  @foreach ($users as $user)
                                  <option value="{{ $user->id }}">{{ $user->name }}</option>
                                  @endforeach
                                </select>

                                @if ($errors->has('userid'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('userid') }}</strong>
                                    </span>
                                @endif
                            </div>
          
          <button type="submit" class="btn btn-primary">Add</button>
      </form>
  </div>
</div>
@endsection