<?php 
require 'koneksi.php';
$data = [];
$id = $_GET['id'];
$query = mysqli_query($con,"select * from diary where id ='$id'");
$jumlah = mysqli_num_rows($query);
if ($jumlah == 1) {
	$row = mysqli_fetch_object($query);
	$data = $row;
}

echo json_encode($data);
echo mysqli_error($con);

 ?>