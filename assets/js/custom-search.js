var sjs = SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    searchResultTemplate: '<div class="search-result box { category }"><h3 class="underline">{title}</h3><div class="img-container"><img class="peopleimg" src="{allpeoplepics}" alt="{title}" /></div><div class="box-description"><p>{description}</p><a href="{url}" class="button small align-right">Read more</a></div></div>',
    json: '/search.json',
    exclude: ['Welcome']
})

doSearch(); // run once on page load

$('.button-group a ').click(e => {
    // add selected to clicked button
    if (e.target.className.indexOf('selected') >= 0) {
        e.target.className = 'button';
    }
    else {
        e.target.className = 'button selected';
    }
    doSearch();
});

$('#search-input').on('input', function(e) {
    doSearch()
});

function doSearch() {

    const filterList = document.getElementsByClassName('button selected'); // all selected
    const currentInput = document.getElementById('search-input').value;
    var filters = ''; // string of filters

    for (var i = 0; i< filterList.length; i++) {
        var newFilter = filterList[i].getAttribute('data-filter').split('.')[1];
        if (filters.length === 0 && currentInput === '' || currentInput === undefined) {
            filters = filters.concat(newFilter);
        }
        else {
            filters = filters.concat(' && ', newFilter);
        }
    }; 

    
    var toSearch = currentInput.concat(filters);
    if (!toSearch.length && !filters.length) {
        // no query or filters, show everything
        document.getElementById('all-results').style.display = 'flex';
        document.getElementById('results-container').style.display = 'none';
    }
    else {
        document.getElementById('all-results').style.display = 'none';
        document.getElementById('results-container').style.display = 'flex';
        sjs.search(toSearch);
    }
}