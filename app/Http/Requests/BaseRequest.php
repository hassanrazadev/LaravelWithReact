<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\JsonResponse;

class BaseRequest extends FormRequest {
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize() {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules() {
        return [
            //
        ];
    }

    /**
     * @param  Validator  $validator
     * @return JsonResponse|void
     */
    protected function failedValidation(Validator $validator) {
        return response()->json([
            'status' => false,
            'code' => 422,
            'message' => 'Data is not valid',
            'data' => [
                'errors' => $validator->getMessageBag()
            ]
        ], 422);
    }
}
