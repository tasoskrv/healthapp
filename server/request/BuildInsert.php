<?php

class BuildInsert extends BuildQuery{    
    
    public function createQuery($table, $fields) {        
        $columns = implode(",",array_keys($fields));
        $bindColumns = ":".implode(",:",array_keys($fields));        
        $query = "insert into $table ($columns)values ($bindColumns)";        
        return $query;        
    }
        
    public function executeQuery($stmt, $fields) {
        foreach ($fields as $key=>$value) {
            if($key==$this->pk && $value==-1){
                $fields[$key] = $this->getLastInsertId();
            }
        }        
        $stmt->execute($fields);
        return json_encode(array('success' => true, 'id' => $this->getLastInsertId()));
    }
       
    
}

?>
