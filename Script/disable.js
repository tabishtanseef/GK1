   function disableHandler (form, inputName) {
    var inputs = form.elements[inputName];
    for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];
    input.onclick = function (evt) {
    if (this.checked) {
    disableInputs(this, inputs);
    }
    else {
    enableInputs(this, inputs);
    }
    return true;
    };
    }
    }

    function disableInputs (input, inputs) {
    for (var i = 0; i < inputs.length; i++) {
    var currentInput = inputs[i];
    if (currentInput != input) {
    currentInput.disabled = true;
    }
    }
    }

    function enableInputs (input, inputs) {
    for (var i = 0; i < inputs.length; i++) {
    var currentInput = inputs[i];
    if (currentInput != input) {
    currentInput.disabled = false;
    }
    }
    }