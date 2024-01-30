<?php

namespace App\Http\Controllers\Api;


use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth; // Import Auth
use App\Models\Profile; // Import your Profile model

class ProfileController extends Controller
{
    public function getProfiles()
    {
        $user = Auth::user(); // Get the currently logged in user

        // Get all profiles associated with the user
        $profiles = Profile::where('user_id', $user->id)->get();

        return response()->json($profiles); // Return the profiles as JSON
    }
    public function createProfile(Request $request)
    {
        $user = Auth::user(); // Get the currently logged in user

        // Validate the request data
        $request->validate([
            'name' => 'required',
            // Add validation rules for other profile fields here
        ]);

        // Create a new profile and save it
        $profile = new Profile;
        $profile->user_id = $request->user_id;
        $profile->name = $request->name;
        // Assign other profile fields here
        $profile->save();

        return response()->json($profile); // Return the created profile as JSON
    }
}
