/**
 * Created by Nolan on 2/26/2017.
 */
function makeTextNode(text) {
    return document.createTextNode(text);
}

function makeForm(id,head) {
    var formCard = document.createElement("div");
    formCard.setAttribute("class","card");
    if(head !== undefined && head != ""){
        var header = document.createElement("h2");
        header.setAttribute("class","card-header");
        header.appendChild(makeTextNode(head));
        formCard.appendChild(header);
    }
    var newForm = document.createElement("form");
    newForm.setAttribute("id",id);
    formCard.appendChild(newForm);
    return formCard;
}

function makeArray(start,end){
    var myArr = [];
    for(var i =start;i<=end;i++){
        myArr.push(i.toString());
    }
    return myArr;
}

function makeRadCheck(name,values,require,tag,type){
    var fields = document.createElement("fieldset");
    fields.setAttribute("class","form-group");
    if(tag !== undefined && tag != "") {
        fields.appendChild(document.createElement("legend").appendChild(makeTextNode(tag)));
    }
    for(var i=0;i<values.length;i++){
        var newRad = document.createElement("div");
        newRad.setAttribute("class","form-check");
        var newLab = document.createElement("label");
        newLab.setAttribute("class","form-check-label");
        var newBut = document.createElement("input");
        newBut.setAttribute("type",type);
        newBut.setAttribute("class","form-check-input");
        newBut.setAttribute("name",name);
        newBut.setAttribute("id",values[i]);
        newBut.setAttribute("value",values[i]);
        newLab.appendChild(newBut);
        newLab.appendChild(makeTextNode(values[i]));
        newRad.appendChild(newLab);
        fields.appendChild(newRad);
    }
    if(require==true){
        fields.setAttribute("class",fields.getAttribute("class")+" required");
    }
    return fields;
}

function makeSelect(id,values,label,require){
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class","form-group");
    var newSelect = document.createElement("select");
    newSelect.setAttribute("class","form-control");
    if (id !== undefined && id != "") {
        newSelect.setAttribute("id", id);
        newSelect.setAttribute("name",id);
    }
    for(var i = 0;i<values.length;i++){
        var newOp = document.createElement("option");
        newOp.setAttribute("value",values[i]);
        newOp.appendChild(makeTextNode(values[i]));
        newSelect.appendChild(newOp);
    }
    if (label !== undefined && label != "") {
        var newLabel = makeLabel(label,id);
        newDiv.appendChild(newLabel);
    }
    newDiv.appendChild(newSelect);
    if(require==true){
        newDiv.setAttribute("class",newDiv.getAttribute("class")+" required");
    }
    return newDiv;
}

function makeInput(type,id,value,label,require){
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class","form-group");
    var newInput = document.createElement("input");
    newInput.setAttribute("type",type);
    newInput.setAttribute("class","form-control");
    if (id !== undefined && id != "") {
        newInput.setAttribute("id", id);
        newInput.setAttribute("name",id);
    }
    if (value !== undefined && value != "") {
        newInput.setAttribute("value", value);
    }
    if (label !== undefined && label != "") {
        var newLabel = makeLabel(label,id);
        newDiv.appendChild(newLabel);
    }
    newDiv.appendChild(newInput);
    if(require==true){
        newDiv.setAttribute("class",newDiv.getAttribute("class")+" required");
    }
    return newDiv;
}


function makeLabel(label, id) {
    var newLabel = document.createElement("label");
    if (id !== undefined && id != "") {
        newLabel.setAttribute("for", id);
    }
    newLabel.appendChild(makeTextNode(label));
    return newLabel;
}

function checkForm(event){
    var elems = document.querySelectorAll(".required");
    for(var i=0;i<elems.length;i++){
        var elChi;
        if(elems[i].tagName==='DIV'){
            elChi = elems[i].querySelector("input");
            if(elChi.value===""||elChi.value.toLowerCase()==="hate"){
                elems[i].classList.remove("has-success");
                elems[i].setAttribute("class",elems[i].getAttribute("class")+" has-danger");
                elChi.classList.remove("form-control-success");
                elChi.setAttribute("class",elChi.getAttribute("class")+" form-control-danger");
                event.preventDefault();
            }
            else{
                elems[i].classList.remove("has-danger");
                elems[i].setAttribute("class",elems[i].getAttribute("class")+" has-success");
                elChi.classList.remove("form-control-danger");
                elChi.setAttribute("class",elChi.getAttribute("class")+" form-control-success");
            }
        }
        else{
            var ops = elems[i].querySelectorAll("input");
            var hold = false;
            for(var j=0;j<ops.length;j++){
                if(ops[j].checked){
                    hold = true;
                    break;
                }
            }
            if(hold===true){
                elems[i].classList.remove("has-danger");
                elems[i].setAttribute("class",elems[i].getAttribute("class")+" has-success");
            }
            else{
                elems[i].classList.remove("has-success");
                elems[i].setAttribute("class",elems[i].getAttribute("class")+" has-danger");
                event.preventDefault();
            }
        }

    }
}

function makeButton(type,text) {
    var button = document.createElement("button");
    button.setAttribute("type",type);
    button.setAttribute("class","btn btn-primary");
    button.appendChild(makeTextNode(text));
    return button;
}