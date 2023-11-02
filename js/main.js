const current_quan_list = document.querySelectorAll('.current-quan-list li');
const current_quan_list_cont = document.querySelectorAll('.current-quan-list-cont-wrap .cont');
let active_cont = '';


for (let i = 0; i < current_quan_list.length; i++) {
  current_quan_list[i].querySelector('.btn').addEventListener("click", e => {
    e.preventDefault();
    for (let j = 0; j < current_quan_list.length; j++) {
      current_quan_list[j].classList.remove('is-on');
      current_quan_list_cont[j].classList.remove('is-on');
    }
    e.target.parentNode.classList.add('is-on');
    active_cont = e.target.getAttribute('href');
    current_quan_list_cont[Number(active_cont) - 1].classList.add('is-on');
  })
}