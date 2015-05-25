<?php
require '../../vendor/autoload.php';
\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();

// Only invoked if mode is "production"
$app->configureMode('production', function () use ($app) {
    $app->config(array(
        'log.enable' => true,
        'debug' => false
    ));
});

// Only invoked if mode is "development"
$app->configureMode('development', function () use ($app) {
    $app->config(array(
        'log.enable' => false,
        'debug' => true
    ));
});

$app->setName('babyclick');
$app->config('http.version', '1.1');
$name = $app->getName();

$app->add(new \Slim\Middleware\HttpBasicAuthentication([
    "path" => "/admin",
    "realm" => "Protected",
    "users" => [
        "root" => "t00r",
        "user" => "passw0rd"
    ],
    "environment" => "REDIRECT_HTTP_AUTHORIZATION"
]));

$app->get('/hello/:name', function ($name) use ($app) {
    echo "Hello, " . $name;
});

$app->run();

?>