<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePersonRequest;
use App\Http\Requests\UpdatePersonRequest;
use App\Models\Person;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PersonController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $persons = Person::latest()->paginate(10);

        return inertia('Home', ['persons' => $persons]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $person = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'birth_date' => [
                'required',
                'date',
                'before_or_equal:' . now()->format('Y-m-d')
            ],
            'residence' => ['required', 'string', 'max:1000']
        ]);

        Person::create($person);

        return redirect('/');
    }

    /**
     * Display the specified resource.
     */
    public function show(Person $person)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Person $person)
    {
        return inertia('Edit', ['person' => $person]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Person $person)
    {
        $record = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'birth_date' => [
                'required',
                'date',
                'before_or_equal:' . now()->format('Y-m-d')
            ],
            'residence' => ['required', 'string', 'max:1000']
        ]);

        $person->update($record);

        return redirect('/');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Person $person)
    {
        $person->delete();

        return redirect('/');
    }
}
