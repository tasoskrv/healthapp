<?php

include_once 'request/Config.php';

abstract class BuildQuery {

    private $query;
    protected $pdo;
    private $request;
    private $masterID;
    protected $pk;
    protected $commandType;
    protected $parameters;
    
    function __construct($pdo, $request, $pk,$masterID=-1, $commandType=-1, $parameters=-1) {
        try {
            $this->request = $request;
            $this->pk = $pk;
            $this->commandType = $commandType;
            $this->parameters = $parameters;
            $this->pdo = $pdo;
            $this->masterID=$masterID;
        } catch (PDOException $e) {
            return json_encode(array('success' => false, 'message' => $e->getMessage()));
        }
    }

    abstract public function createQuery($key, $table);

    public function getLastInsertId() {
        if ($this->masterID == -1) {
            $this->masterID = $this->pdo->lastInsertId();
        }
        return $this->masterID;
    }

    public function build() {
	$this->query = '';
	foreach ($this->request as $tableName => $record) {
            foreach ($record as $attributes) {										
                $response = $this->getQueryResponse($tableName,$attributes);//JSON??               
            }
	}        	
	return $response;
}

    
public function getQueryResponse($tableName,$methods){
    $this->query = $this->createQuery($tableName, $methods);
    $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $this->pdo->prepare($this->query);
    $result = $this->executeQuery($stmt, $methods);
    return $result;
}
    
    
    
}//end of class

?>
