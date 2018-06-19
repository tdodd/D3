(function () {

   // Add listeners to filters
   document.querySelectorAll('.filter').forEach(function (filter) {
      filter.addEventListener('click', handleFilter);
   });

   function handleFilter(event) {
      var filterValue = event.target.dataset.filterValue;
      // var data = d3.selectAll('circle').data();
      var data = [1, 2, 3];

      d3.select('svg').data(data);
   }

   function removeFilter() {
      // TODO: Remove Filter
   }

})();
