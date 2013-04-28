<?php

class Api_ProductsController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
        $config = new Zend_Config_Ini(APPLICATION_PATH . '/configs/application.ini', APPLICATION_ENV);
        //var_dump($config->database->params->toArray()); die;
        $this->db = Zend_Db::factory('Mysqli', $config->database->params);
    }

    public function fetchAction()
    {
        $select = $this->db->select();
        $select->from('products');

        $stmt = $this->db->query($select);
        $result = $stmt->fetchAll();
        echo json_encode($result);    
        die;
    }


}

