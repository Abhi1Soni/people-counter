
//  document.getElementById("count-el").innerHTML=5
let count=0
let saveEl=document.getElementById("save-el")
console.log(saveEl)
let countEl=document.getElementById("count-el")



// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

function increment(){
    count+=1
    // document.getElementById("count-el").innerHTML=count
    countEl.textContent=count
    // console.log(count)
    // count-el.addEventLister()
}

function decrement(){
    if(count==0){
        count=count
    }
    else{
    count-=1
    // document.getElementById("count-el").innerHTML=count
    countEl.textContent=count
    }
}
function save(){
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    let str= " "+count+" - " 
    saveEl.innerText+=str //we can use .textContent also instead of >innerText
    // saveEl.innerContent+=str
    countEl.textContent=0
    count=0
    console.log(saveEl.innerText)
}