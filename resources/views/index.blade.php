<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{config('app.name')}}</title>

    </head>
    <body class="antialiased">
    <div id="index"></div>
    <script src="{{ asset('js/App.js') }}"></script>
    </body>
</html>
