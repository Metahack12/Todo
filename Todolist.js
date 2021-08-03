let ulTasks=$('#ulTasks')
let btnAdd=$('#btnAdd')
let btnReset=$('#btnReset')
let btnCleanUp =$('#btnCleanUp')
let btnSort=$('#btnSort')
let inpNewTask=$('#inpNewTask')

function addItem(){
    let listItem=$('<li>',{
        'class': 'list-group-item',
        text: inpNewTask.val()
    
    
    })
    listItem.click(function() {
        //$(this).toggleClass('disabled')
        //or
        listItem.toggleClass('done')
    })
    ulTasks.append(listItem)
    inpNewTask.val('')
    toggleInputButtons()
}
function clearDone() {
$('#ulTasks .done').remove()
toggleInputButtons()
}
function sortDone() {
    $('#ulTasks .done').appendTo(ulTasks)
    }
// function toggleResetBtn(enabled) {
//     if (enabled) {btnReset.prop('disabled',false)}
//     else {btnReset.prop('disabled',true)}
// }
// inpNewTask.on('input', function(){
//     toggleResetBtn(inpNewTask.val() != '')
// })

function toggleInputButtons() {
    btnReset.prop('disabled', inpNewTask.val() == '')
    btnAdd.prop('disabled', inpNewTask.val() == '')
    btnSort.prop('disabled', ulTasks.children().length < 1)
    btnCleanup.prop('disabled', ulTasks.children().length < 1)
  }

inpNewTask.keypress((e) => {
    if(e.which == 13) addItem()
})
inpNewTask.on('input', toggleInputButtons)

btnAdd.click(addItem)
btnReset.click(function(){
    inpNewTask.val('')
    toggleInputButtons()
})
btnSort.click(sortDone)
btnCleanUp.click(clearDone)



