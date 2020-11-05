<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;

class BaseController extends Controller {

    protected $data = [
        'status' => false,
        'code' => 404,
        'message' => '',
        'data' => []
    ];

    /**
     * @return JsonResponse
     */
    protected function responseJson() {
        return response()->json($this->data, $this->data['code']);
    }
}
