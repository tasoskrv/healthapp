<?php

class BuildSelect extends BuildQuery {

    private $isMethod;
    private $start = -1;
    private $limit = -1;
    private $sort = -1;
    private $queryStr = -1;

    public function setID($id) {
        $this->id = $id;
    }

    public function getID() {
        return $this->id;
    }

    public function setLimit($limit) {
        $this->limit = $limit;
    }

    public function getLimit() {
        return $this->limit;
    }

    public function setStart($start) {
        $this->start = $start;
    }

    public function getStart() {
        return $this->start;
    }

    public function setSort($sort) {
        $this->sort = $sort;
    }

    public function getSort() {
        return $this->sort;
    }

    public function setQueryStr($queryStr) {
        $this->queryStr = $queryStr;
    }

    public function getQueryStr() {
        return $this->queryStr;
    }

    public function getParameters() {
        return $this->parameters;
    }

    public function setParameters($parameters) {
        $this->parameters = $parameters;
    }

    public function createQuery($tableName, $fields) {

        $this->isMethod = false;
        if ($tableName == 'method') {
            $this->isMethod = true;
            $query = $this->findMethod($fields);
        } else {
            $query = 'select SQL_CALC_FOUND_ROWS ';
            foreach ($fields['fields'] as $field) {
                $query .= $field . ',';
            }
            $query = trim($query, ",");
            $query.=' from ' . $tableName;
            if ($fields['where'] != '') {
                $query .=' where ';
                foreach ($fields['where'] as $fieldKey => $field) {
                    $query .= $fieldKey . '=:' . $fieldKey . ' and';
                }
                $query = trim($query, "and");
            }
        }
        if ($this->sort != -1) {
            $query.=' order by ' . $this->sort[0]['property'] . ' ' . $this->sort[0]['direction'];
        }
        if ($this->limit != -1) {
            $query.=' limit ' . $this->limit;
        }
        if ($this->start != -1) {
            $query.=' offset ' . $this->start;
        }
        return $query;
    }

    public function executeQuery($stmt, $fields) {

        if (isset($fields['where']) && is_array($fields['where'])) {
            $stmt->execute($fields['where']);
        } else {
            $stmt->execute();
        }

        $queryString = $stmt->queryString;
        if (strpos($queryString, 'insert') === 0 || strpos($queryString, 'update') === 0 || strpos($queryString, 'delete') === 0)
            return array();

        $rows = $stmt->fetchAll(PDO::FETCH_NAMED);

		if ($this->parameters["command"] == true) {
            $data = $rows;
        } else {
            $stmt = $this->pdo->prepare('SELECT FOUND_ROWS() as totalRows');
            $stmt->execute();
            $row = $stmt->fetch();
            $data = array('totalRows' => $row['totalRows'], 'data' => $rows);
        }
        return $data;
    }

    private function findMethod($methodPath) {
        $pathArray = explode('.', $methodPath);
        $path = $pathArray[0];
        $method = $pathArray[1];
        include_once "$path.php";
        $query = "";
        if (isset($this->queryStr)) {
            if ($this->queryStr != -1) {
                $query = str_replace(" ", "%", $this->queryStr);
                return $method($query);
            }
        }

        if (isset($this->parameters)) {
            if ($this->parameters!= -1) {
                return $method($this->parameters);
            }
        }

        if (isset($this->id)) {
            if ($this->id != -1) {
                return $method($this->id);
            }
        }
        return $method($query);
    }

    public function getQueryResponse($tableName, $attributes) {
        $responseData = array();
        $count = 0;
        foreach ($attributes as $methods) {
            $this->query = $this->createQuery($tableName, $methods);
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $stmt = $this->pdo->prepare($this->query);
            $result = $this->executeQuery($stmt, $methods);

            if ($this->parameters["command"] == true) {
                $tt = " \"$count\" : " . json_encode($result);
                array_push($responseData, $tt);
            } else {
                $responseData = $result;
            }
            $count++;
        }

        if ($this->parameters["command"] == true) {
            $data = " \"data\" : {" . implode(",", $responseData) . "}";
            $response = "{\"success\" : true,$data}";
        } else {
            $responseData['success'] = true;
            $response = json_encode($responseData);
        }
        return $response;
    }

}
?>
