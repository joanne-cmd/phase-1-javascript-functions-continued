// code your solution here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}
function wrapAdjective(wrapper="*") {
    if (wrapper ==="*"){
       return (function(){
        return `You are ${wrapper}a hard worker${wrapper}!`
       })
    } else if( wrapper ==="||"){
        return (function(){
            return `You are ${wrapper}a dedicated programmer${wrapper}!`
       })
    }
} 

