<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\MonsterController;
use App\Http\Controllers\Api\VersionController;
use App\Http\Controllers\Api\ImageController;
use App\Http\Controllers\Api\CollectionController;
use App\Http\Controllers\Api\ShopsController;
use App\Http\Controllers\Api\CollectionDestroyController;
use App\Http\Controllers\Api\ShopCanController;
use App\Http\Controllers\Api\ChangelogController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Monster;
use App\Models\Version;
use App\Models\Collection;

use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(function (){
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::apiResource('/users', UserController::class);
});

Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);

Route::post('/image', [ImageController::class, 'imageStore']);