// code your solution here
function saturdayFun(activity = "roller-skate") {
return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity){
    let value = activity ? activity : "go to the office" 
    return `This Monday, I will ${value}.`
};

function wrapAdjective (prompt = "*") {
 
   return function(inner = "special") {
        return `You are ${prompt}${inner}${prompt}!`;
    };

}
