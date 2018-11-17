<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function index(){
        return view('index');
    }

    public function subproceso(Request $request){
        $subproceso = $request['subproceso'];
        if($request->ajax()){
            return response()->json(
                view('complementos.subproceso',compact('subproceso'))->render()
            );
        }
    }
}
