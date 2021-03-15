sap.ui.define([
		"sap/ui/core/mvc/Controller"
		],
function(Controller){
	return Controller.extend("listreport2.ext.controller",{
		
		onInit:function(){
		sap.m.MessageToast.show("welcome");	
		},
		    onAfterRendering: function () {
        // var oGlobalFilter = this.getView().byId("ns.listreport::sap.suite.ui.generic.template.ListReport.view.ListReport::Employees--listReportFilter");
        debugger;
        var oView = this.getView();
        var    oViewId = oView.getId();
        var    oFilterbar = oView.byId(`${oViewId}--listReportFilter`);
            oFilterbar.fireSearch();

 

    }
		
	});
	
});