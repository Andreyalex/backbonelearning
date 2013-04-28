<?php 

    $uri = $_SERVER['REQUEST_URI'];
    $arr = explode('/', $uri);
    $params = array();
    for($i = 2; isset($arr[$i]); $i+=2) {
        $params[$arr[$i]] = $arr[$i+1];
    }

    $request = array(
        'module' => $arr[0],
        'action' => $arr[1],
        'params' => $params
    );

     