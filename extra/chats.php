<?php

  $arr['userid'] = $DATA_OBJ->find->userid;
  $sql = "select * from users where userid != :userid limit 1";
  $myusrs = $DB->read($sql, $arr)
  
  $mydata = $DATA_OBJ->find->userid;

  //$result = $result[0];
  $info->message = $mydata;
  $info->data_type = "contacts";
  echo json_encode($info);

  die;

  $info->message = "No contacts were found";
  $info->data_type = "error";
  echo json_encode($info);

?>
