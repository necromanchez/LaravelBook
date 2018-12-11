
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Test</title>
  <link href="{{ asset('css2/bootstrap.css') }}" rel="stylesheet">
  <link href="{{ asset('css2/metisMenu.css') }}" rel="stylesheet">
  <link href="{{ asset('css2/sb-admin-2.css') }}" rel="stylesheet">
  <link href="{{ asset('css2/font-awesome.css') }}" rel="stylesheet">
  <link href="{{ asset('css2/base.css') }}" rel="stylesheet">
</head>

<body style="background-color:#337ab7">
    <div id="wrapper">
        <nav id="side-menu" class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0;color:#fff;background-color:#404040;position: fixed;width: 100%;">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="@Url.Action("Index", "Home", new { area = "" })" style="color:#fff;font-weight:bold;font-family:Verdana;font-size:12pt ">
                    {{ Auth::user()->type }}
                </a>
            </div>

            <ul class="nav navbar-top-links navbar-right" style="color:#fff;background-color:#404040;">
                <li style="color:#fff;font-family:Verdana ">Welcome {{ Auth::user()->name }} !</li>
                <li class="dropdown" style="color:#fff;background-color:#404040">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#" style="color:#fff;background-color:#404040">
                        <i class="fa fa-user fa-fw"></i>  <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-user" style="color:#fff;background-color:#404040">
                        <li>
                            <!-- <a href="{{ url('/') }}" style="color:#fff"><i class="fa fa-sign-out fa-fw" style="color:#fff"></i> Logout</a> -->

                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        <i class="fa fa-sign-out fa-fw" style="color:#fff"></i> Logout
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>
                            

                        </li>
                    </ul>
                </li>
            </ul>

            <div class="navbar-default sidebar navbar-static-side" role="navigation" style="color:#fff;background-color:#0F1F52;height: 99%;">
                <div class="sidebar-nav navbar-collapse" style="color:#fff;background-color:#0F1F52;">
                    <ul class="nav" id="side-menu" style="color:#fff;background-color:#0F1F52;">
                        <li>
                            <a href="#" style="color:#fff;background-color:#0F1F52"><i class="fa fa-folder-open-o fa-fw"></i> Master Management<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                 @if( Auth::user()->type =="Admin")
                                <li>
                                    <a href="{{ url('/users') }}">
                                        <i class="fa fa-users fa-fw"></i> User Master
                                    </a>
                                </li>
                                @endif
                             
                                <li>
                                    <a href="{{ url('/books') }}">
                                        <i class="fa fa-book"></i> Books
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div id="page-wrapper" style="padding-top:60px;height: 100%;">
            <br />
         @yield('content')

           
        </div>

    </div>


</body>
</html>

<script type="text/javascript" src="{{ asset('Scripts/jquery.js') }}"></script>
<script type="text/javascript" src="{{ asset('Scripts/bootstrap.js') }}"></script>
<script type="text/javascript" src="{{ asset('Scripts/metisMenu.js') }}"></script>
<script type="text/javascript" src="{{ asset('Scripts/sb-admin-2.js') }}"></script>
<script type="text/javascript" src="{{ asset('Scripts/helpers.js') }}"></script>