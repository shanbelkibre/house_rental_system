<?php
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

Route::post('/test-upload', function (Request $request) {
    return response()->json([
        'images' => $request->images,
        'images_file' => get_class($request->images[0]['file'])
    ]);
});
