<?php

class BuildUpdate extends BuildQuery {

    public function createQuery($tableName, $fields) {
        $query = 'update ' . $tableName . ' set ';
        foreach ($fields['fields'] as $fieldkey => $field) {
            $query .= $fieldkey . '=:' . $fieldkey . ',';
        }
        $query = trim($query, ",");
        $query .=' where ';
        foreach ($fields['where'] as $fieldkey => $field) {
            $query .= $fieldkey . '=:' . $fieldkey . ' and ';
        }

        return trim($query, "and ");
    }

    public function executeQuery($stmt, $fields) {        
        $whereFields = $fields['where'];        
        foreach ($whereFields as $key=>$value) {
            if($key==$this->pk && $value==-1){
                $whereFields[$key] = $this->getLastInsertId();
            }
        }
        $stmt->execute($fields['fields'] + $fields['where']);
        return json_encode(array('success' => true, 'id' => $this->getLastInsertId()));
    }

}

?>
