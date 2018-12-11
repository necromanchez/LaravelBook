@extends('layouts.layoutmain')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Add User') }}</div>

                <div class="card-body">
                 
                <form method="post" action="{{ route('users.store') }}">
               
                        @csrf
                        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('Name') }}</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}" name="name" required autofocus>

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
                                <input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email"  required>

                                @if ($errors->has('email'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="pass" class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>

                            <div class="col-md-6">
                                <input id="pass" type="password" class="form-control{{ $errors->has('pass') ? ' is-invalid' : '' }}" name="pass" required autofocus>

                                @if ($errors->has('pass'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('pass') }}</strong>
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
                                       <button type="submit" class="btn btn-primary">Add</button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
