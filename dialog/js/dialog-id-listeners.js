define(['equipment'], function(eq){
	return function(inputs, dlg){
		if(!window.equipment) window.equipment = eq
	    var equipment = window.equipment
		var idInput   = inputs[0]	  
		var nameInput = inputs[1]	  
	    var keyupCounter = 0
		$(idInput).keyup(function(){
			keyupCounter++
			if(keyupCounter > 20){
              alert('Каким же надо быть идиотом, чтобы нее справиться с простой задачей забить в текстовое поле с бумажки несколько букв и цифр!')
			  keyupCounter = 0
			  return
			}
			var val = $(idInput).val()
			if(!equipment || !val || !equipment[val]) return false
			if(equipment[val].marker){alert('Это оборудование уже привязано к маркеру.'); return false}  
		    $(idInput).prop('disabled', true)  
			alert('Красаучег!')
		})
		$(idInput).keyup(function(){
			var val = $(nameInput).val()
			$(dlg).dialog('option', 'title', val)
		})
	}
})
