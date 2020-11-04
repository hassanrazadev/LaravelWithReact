<?php

namespace App\Http\Controllers;

class BaseController extends Controller {

    protected $data = [
        'status' => false,
        'code' => 404,
        'message' => '',
        'data' => []
    ];
}
