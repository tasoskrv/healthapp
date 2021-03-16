<?php

class BuildDelete extends BuildQuery {

    public function createQuery($tableName, $fields) {
        $whereFields=$fields["where"];
        if (count($whereFields) > 1)
            return 'delete from ' . $tableName . ' where '
                    . implode('= :' . implode(' and ', array_keys($whereFields)) . '= :', array_keys($whereFields));
        $keyfields = array_keys($whereFields);
        return 'delete from ' . $tableName . ' where ' . $keyfields[0] . '= :' . $keyfields[0];
    }
    
    public function executeQuery($stmt, $fields) {        
        $whereFields=$fields['where'];        
        foreach ($whereFields as $key=>$value) {
            if($key==$this->pk && $value==-1){
                $whereFields[$key] = $this->getLastInsertId();
            }
        }
        $stmt->execute( $fields['where']);
        return json_encode(array('success' => true));
    }
    

}

?>
