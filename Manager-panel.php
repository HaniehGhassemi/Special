<head><link rel="stylesheet" href="style.css">
    <title>Manager Pool Program</title>
    <script src="./index.js"></script>
</head>

<body id="body">
<div style="text-align: center;margin-top: 20px;">
        <input type="number" id="column" name="column">
        <button class="button2" onclick="createTable()">Create</button>
        <form style="display: inline;">
        <input type="text" name="saveData" id="saveData" hidden>
        <button class="button2" name="save" onclick="StringData()">Save</button>
        <button class="button2" name="reload" onclick="reloadData()">Reload</button>
        </form>
        <a href="http://localhost/pool/index-user.php"><button class="button2">User Panel</button></a>

    </div>
    <table id="pool"></table>
    <?php include "Sql.php"; ?>

    <?php
        if (isset($_GET['save'])) {
            $data =$_GET['saveData'];
            $res = doquery("CALL addnewrecord($data)");
            if ($res)
                echo "saved";
        }

        if (isset($_GET['Show'])) {
            $res= callSP('CALL getrecords()');
            echo "<script>showTable('$res');</script>";
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
