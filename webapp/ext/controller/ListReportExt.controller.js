sap.ui.controller("listreport2.ext.controller.ListReportExt", {

	/*
	 * Content of the custom field shall be stored in the app state, so that it can be restored later again e.g. after a back navigation.
	 * @param oCustomData  : referance to the custome data.
	 */
	getCustomAppStateDataExtension: function (oCustomAppData) {
		/*
		var oCustomField1 = this.oView.byId("SampleFilterFieldID");
		if (oCustomField1) {
			oCustomAppData.SampleFilterFieldID = oCustomField1.getValue();
		}
		return oCustomAppData;
		*/
	},
	/*
	 * In order to restore content of the custom field in the filterbar e.g. after a back navigation.
	 * @param oCustomData  : referance to the custome data.
	 */
	restoreCustomAppStateDataExtension: function (oCustomAppData) {
		/*
		if (oCustomAppData.SampleFilterFieldID !== undefined) {
			if ( this.oView.byId("SampleFilterFieldID") ) {
				this.oView.byId("SampleFilterFieldID").setSelectedKey(oCustomAppData.SampleFilterFieldID);
			}
		}
		*/
	},
	// onInit: function(){
	//           var oGlobalFilter = this.getView().byId("LReport::sap.suite.ui.generic.template.ListReport.view.ListReport::Customer_and_Suppliers_by_Cities--listReportFilter-filterItemControl_BASIC-ContactName");

	//      sap.m.MessageToast.show("welcome");
	//   //Create JSON data that contains the Inital value of the filter
	//   //"company_code" is the name of the filter field. You should put your own field ID.
	//   var oDefaultFilter = {
	//       "ContactName": "Maria Anders"
	//   };

	//debugger;

	//Set SmartFilterBar initial values
	//  oGlobalFilter.setFilterData(oDefaultFilter);
    // },
    onInit:function(){
    //  debugger;
      var Table = this.getView().byId(
    "listreport2::sap.suite.ui.generic.template.ListReport.view.ListReport::Customers--listReport"
    );
      Table.setInitiallyVisibleFields("Country,City,ContactName,CompanyName");
      Table.attachBeforeRebindTable(this.addFilter.bind(this));
    },
    addFilter:function(oEvent){
       // debugger
 var countryFilter= new sap.ui.model.Filter("Country","EQ","USA"); 
                oEvent.mParameters.bindingParams.filters.push(countryFilter);
    },

	onInitSmartFilterBarExtension: function (oEvent) {
        // debugger;
		// var smartFilterBar = this.getView().byId("listReportFilter");
		// var field1 = smartFilterBar.getControlByKey("Country");
		// field1.setValue("USA");
		
	}

	,
	onClickActionCustomers: function (oEvent) {
        sap.m.MessageToast.show("welcome");
    }
});