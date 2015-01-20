define([
    './gridConfiguration',
    './filtersMangerFactory'
], function (gridConfiguration, filterManagerFactory) {

    return function(appModule) {
        appModule.controller('ListController', [
            '$scope', function($scope) {

                var filterManager = filterManagerFactory(gridConfiguration.dataSource);

                $scope.contactNameChange = function () {
                    filterManager.setFilter({
                        field: 'ContactName',
                        operator: 'contains',       //startswith, eq, etc. See kendo.data.DataSource object
                        value: $scope.contactName
                    });
                }

                $scope.companyNameChange = function () {
                    filterManager.setFilter({
                        field: 'CompanyName',
                        operator: 'contains',       //startswith, eq, etc. See kendo.data.DataSource object
                        value: $scope.companyName
                    });
                }

                $scope.applyFilters = function() {
                    filterManager.applyFilters();
                }

                $scope.clearFilters = function () {
                    $scope.contactName = '';
                    $scope.companyName = '';
                    filterManager.clearFilters();
                }

                $scope.gridOptions = gridConfiguration;

            }
        ]);
    }

});