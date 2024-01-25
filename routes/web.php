<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
<Route path="/" element={<Login/>}/>
<Route path="/home" element={<HomePage notifsData={notifsData} notifs={3} pfp={PFP}/>}/>
<Route path="/offerte" element={<Offerte />}/>
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::view('/{path?}', 'app')
    ->where('path', '.*');
