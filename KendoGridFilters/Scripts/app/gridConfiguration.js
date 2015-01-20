define([
    'kendo'
], function () {
    
    return {
        dataSource: new kendo.data.DataSource({
            type: "odata",
            transport: {
                read: "http://demos.telerik.com/kendo-ui/service/Northwind.svc/Customers"
            },
            pageSize: 20
        }),
        height: 550,
        groupable: true,
        sortable: true,
        filterable: true,
        pageable: {
            refresh: true,
            pageSizes: true,
            buttonCount: 5
        },
        columns: [
            {
                field: "ContactName",
                title: "Contact Name",
                width: 200
            }, {
                field: "ContactTitle",
                title: "Contact Title"
            }, {
                field: "CompanyName",
                title: "Company Name"
            }, {
                field: "Country",
                width: 150
            }
        ]
    };

});