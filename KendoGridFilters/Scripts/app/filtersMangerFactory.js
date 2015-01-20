define([
], function () {

    return function(dataSource) {

        var currentDataSource = dataSource,
            filters = [];

        return {
            clearFilters: function () {
                filters = [];
                currentDataSource.filter({});
            },
            setFilter: function (filter) {

                var filterToSet = {
                    field: filter.field,
                    operator: filter.operator,
                    value: filter.value
                };

                var filterApplied = filters.filter(function(f) {
                        return f.field === filter.field;
                    }),
                    filterAppliedIndex = filterApplied.length > 0 ? filters.indexOf(filterApplied[0]) : -1;

                if (filterAppliedIndex >= 0) {
                    filters.splice(filterAppliedIndex, 1);
                }

                filters.push(filterToSet);

            },
            applyFilters: function () {

                currentDataSource.filter({
                    logic: "and",
                    filters: filters
                });

            }
        };

    };

});