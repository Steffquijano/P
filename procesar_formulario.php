<?php

    $servidor="localhost";
    $usuario ="root";
    $clave ="";
    $baseDeDatos = "comentarios";

    $enlace =mysqli_connect($servidor, $usuario, $clave, $baseDeDatos);


    if(isset($_POST['Enviar'])){
        $nombre = $_POST['nombre'];
        $Correo = $_POST['email'];
        $Mensaje = $_POST['mensaje'];

        $insertarDatos = "INSERT INTO base_de_datos_clientes VALUES('', '$nombre', '$Correo', '$Mensaje')";

        $ejecutarInsertar = mysqli_query ($enlace, $insertarDatos);

        header  ("location: /formulario de base de datos");
        exit();

    }
?>