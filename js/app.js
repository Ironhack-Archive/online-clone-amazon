$(function() {
  $('#nav-search-select').change(function() {
    var selectedText = $(this).find('option:selected').text();
    $('#nav-search').find('.nav-search-label').html(selectedText);
  });
});
