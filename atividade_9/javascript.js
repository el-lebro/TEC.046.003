const demoId = document.getElementById("demo");
demoId.style.border = '2px solid red';
demoId.textContent='peguei friv na orelha'
demoId.style.backgroundColor ='red'
demoId.style.font="white"
const catClass = document.getElementsByClassName("categoria");
for (i = 0; i < catClass.length; i++){
    catClass[i].style.border = '2px dotted orange';
catClass[i].style.backgroundColor="gray"
}
const tag = document.getElementsByTagName("article");
for (i = 0; i < tag.length; i++)
    tag[i].style.border = '2px dotted green';

const QueryId = document.QuerySlector('#demo-query');
QueryId.style.border='1px solid pink'
QueryId

const demoQuery = document.QuerySelectorAll('.demo-querry-all');
demoQuery.forEach(query => {
    Query.style.border = '1px solid pink'
})