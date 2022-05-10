function verificar (){
  var ini = document.getElementById('inicioo')
  var fi = document.getElementById('fimm')
  var pa = document.getElementById('passoo')
  var caixa2 = document.getElementById('caixa2')
  if(ini.value.length == 0 || fi.value.length == 0 || pa.value.length == 0 ){
    window.alert('[ERRO] Digite algum numero')
  } else {
    caixa2.innerHTML = 'Contando:'
    var i = Number (ini.value)
    var f = Number (fi.value)
    var p = Number (pa.value)
    
    for(var b =i; b <= f; b += p){
      caixa2.innerHTML += `  ${b} | `
    }
  }
}