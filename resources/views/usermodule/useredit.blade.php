@extends('layouts.layoutmain')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Update User') }}</div>

                <div class="card-body">
                    <!-- <form method="POST" action="{{ route('users.update', $user->id) }}">
                        @csrf -->
                <form method="post" action="{{ route('users.update', $user->id) }}">
                        @method('PATCH')
                        @csrf
                        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('Name') }}</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}" name="name" value="{{ $user->name }}" required autofocus>

                                @if ($errors->has('name'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ $user->email }}" required>

                                @if ($errors->has('email'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                       
                        <div class="form-group row">
                            <label for="typeuser" class="col-md-4 col-form-label text-md-right">{{ __('Type') }}</label>

                            <div class="col-md-6">
                              
                                <select id="typeuser" type="text" class="form-control{{ $errors->has('typeuser') ? ' is-invalid' : '' }}" name="typeuser" value="{{ old('typeuser') }}" required autofocus>
                                  <option value="Admin">Admin</option>
                                  <option value="Reader">Reader</option>
                                  <option value="Writer">Writer</option>
                                  
                                </select>

                                @if ($errors->has('typeuser'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('typeuser') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                       <button type="submit" class="btn btn-primary">Update</button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
