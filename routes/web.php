<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('auth.login');
});

Route::resource('shares', 'ShareController');
Route::resource('users', 'UsersController');
Route::resource('books', 'BooksController');
Route::resource('logout', 'LogoutController');
Auth::routes();

Route::get('/home', 'BooksController@index')->name('home');
