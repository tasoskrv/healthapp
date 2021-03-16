Ext.define('Doctors.view.action.List',{
    
   extend : 'Ext.form.Panel',
   alias : 'widget.applistaction',
   
   
   initComponent : function(){
       
      var me = this;
      var mystore =Ext.create('Doctors.store.action.Action',{                
            QFields:['idvisit','sodtype','description','location','startdate', 'enddate','allday','remind','comments','idcontact']                   
       });
       
       me.items = [{                              
            xtype : 'basegrid',
            store : mystore,
            itemId : 'actionlist',
            upDownToolbar : true, 
            columns : [{
               dataIndex : 'idvisit',
               header : 'idvisit'
            },{
               dataIndex : 'sodtype',
               header : 'sodtype'
            },{
               dataIndex : 'description',
               header : 'description'
            },{
                dataIndex : 'location',
               header : 'location'
            },{
                dataIndex : 'startdate',
               header : 'startdate'
            },{
                dataIndex : 'enddate',
               header : 'enddate'
            },{
                dataIndex : 'allday',
               header : 'allday'
            },{
                dataIndex : 'remind',
               header : 'remind'
            },{
                dataIndex : 'comments',
               header : 'comments'
            },{
                dataIndex : 'idcontact',
               header : 'idcontact'
            }]

       }
]
       
       
    this.callParent();   
       
   }
});
