<head><link rel="stylesheet" href="style.css">
    <title>User Pool Program</title>
    <script src="./index.js"></script>
</head>

<body id="body">
 </table>
<div style="text-align: center;margin-top: 20px;">
<p>For See Pool program click on Reload</p>
<form  style="display: inline;">
<button class="button2" name="reload" onclick="reloadData()">Reload</button>
<input type="text" id="ticket" name="ticket">
<input type="text" name="idbtn" id="idbtn" hidden>
<input type="submit" class="button2" name="buy" onclick="buyTicket()">
</form>
<a href="http://localhost/pool/Manager-panel.php"><button class="button2">Manager Panel</button></a>

</div>
 <table id="pool"></table>
 <?php include "Sql.php"; ?>

 <?php
        if (isset($_GET['buy'])) {
            $id =$_GET['idbtn'];
            $num =$_GET['ticket'];
            $res = doquery("CALL Saverecord($id,$num)");
            if ($res)
                echo "saved";
        }

        if (isset($_GET['reload'])) {
            $table = callSP('CALL getrecords()');
            echo "<script>showTable('$table');</script>";
            $res= doquery('CALL updatecap()');
            if ($res->num_rows > 0) {
            while($row = $res->fetch_assoc()) {
            $id = $row["idbtn"];
            $num = $row["SUM(cap)"];
            echo "<script>reloadData('$id','$num');</script>";
             }
            } else {
            echo "0 results";
            }
            }

    ?>
    
</body>
