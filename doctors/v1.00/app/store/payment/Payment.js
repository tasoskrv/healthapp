Ext.define(APPNAME+'.store.payment.Payment', {
    extend      : APPNAME+'.store.BaseStore',
    model       : APPNAME+'.model.payment.Payment',	
    storeId     : 'payment',
    QTable      : 'payment'
});


