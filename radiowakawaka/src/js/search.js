function search() {
    //console.log('Search est appelée')

    var articles = localStorage.getItem('mesArticles')
    //console.log(articles)

    var el = document.createElement("span")
    el.innerHTML = articles
    //console.log(el)
    
    var input, filter, elements, Value;
    var list = document.getElementById('list')
    
    input = document.getElementById('search-input');
    filter = input.value.toLowerCase();
    //console.log(articles.getElementsByTagName('h4'))
    elements = el.getElementsByTagName('h4')
    //console.log(elements)

    for (let i = 0; i< elements.length; i++) {
      Value = elements[i].textContent
      //console.log(Value);
      if (Value.toLowerCase().indexOf(filter) !== -1 && filter.length >= 2) {
          Value = elements[i].textContent
          //console.log(Value)
          var ancestor = elements[i].closest(".Section > div")
          list.style.display = "block"
          list.textContent = Value
          list.style.color = '#E86E25'
          list.style.fontWeight = 'bold'
          list.style.cursor = 'pointer'
          list.addEventListener('click', function(){
              location.href = ancestor.getAttribute('data-url')
          })
      } else {
          //list.textContent = "Article inexistant"
          continue
      }
    }
}
