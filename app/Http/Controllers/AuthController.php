<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends BaseController {
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct() {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    /**
     * Get a JWT token via given credentials.
     *
     * @param  Request  $request
     *
     * @return JsonResponse
     */
    public function login(Request $request) {

        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|min:6'
        ]);

        if ($validator->fails()) {
            $this->data['status'] = false;
            $this->data['code'] = 422;
            $this->data['message'] = 'Data is not valid';
            $this->data['data']['errors'] = $validator->getMessageBag();
            return $this->responseJson();
        }

        $credentials = $request->only('email', 'password');

        if ($token = $this->guard()->attempt($credentials)) {
            $this->data['message'] = 'Successfully logged in';
            $this->data['data']['user'] = new UserResource($this->guard()->user());
            return $this->respondWithToken($token);
        }

        $this->data['status'] = false;
        $this->data['code'] = 401;
        $this->data['message'] = 'Email or password is incorrect.';
        return $this->responseJson();
    }

    /**
     * @param  Request  $request
     * @return JsonResponse
     */
    public function register(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:6'
        ]);

        if ($validator->fails()) {
            $this->data['status'] = false;
            $this->data['code'] = 422;
            $this->data['message'] = 'Data is not valid';
            $this->data['data']['errors'] = $validator->getMessageBag();
            return $this->responseJson();
        }

        $user = User::create($request->all());
        if ($user){
            $this->data['message'] = 'Successfully registered.';
            $this->data['data']['user'] = new UserResource($user);
            return $this->respondWithToken($this->guard()->login($user));
        }

        $this->data['status'] = false;
        $this->data['code'] = 500;
        $this->data['message'] = 'Registration failed, please try again';
        return $this->responseJson();
    }

    /**
     * Get the authenticated User
     *
     * @return JsonResponse
     */
    public function me() {
        return response()->json($this->guard()->user());
    }

    /**
     * Log the user out (Invalidate the token)
     *
     * @return JsonResponse
     */
    public function logout() {
        $this->guard()->logout();
        $this->data['status'] = true;
        $this->data['code'] = 200;
        $this->data['message'] = 'Successfully logged out';
        return $this->responseJson();
    }

    /**
     * Refresh a token.
     *
     * @return JsonResponse
     */
    public function refresh() {
        return $this->respondWithToken($this->guard()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string  $token
     *
     * @return JsonResponse
     */
    protected function respondWithToken(string $token) {
        $this->data['status'] = true;
        $this->data['code'] = 200;
        $this->data['data']['access_token'] = $token;
        $this->data['data']['token_type'] = 'bearer';
        $this->data['data']['expires_in'] = $this->guard()->factory()->getTTL();
        return $this->responseJson();
    }

    /**
     * Get the guard to be used during authentication.
     *
     * @return Guard
     */
    public function guard() {
        return Auth::guard('api');
    }
}
