var tvRepo = (function () {
  var repo = [];
  var apiUrl = 'http://api.tvmaze.com/shows/431/episodes';

  function add(episode) {
    return repo.push(episode);
  }

  function getAll() {
    return repo;
  }

  function loadList() {
    
  }

  function loadDetails(item) {

  }

  function showDetails(item) {

  }

  function addListItem(episode) {

  }

  var $modalContainer = $('.modal-container');
  function showModal() {

  }

  function hideModal() {

  }

  return {
    add: add,
    getAll: getAll,
    loadList: loadList,
    loadDetails: loadDetails,
    addListItem: addListItem
  };

})();
