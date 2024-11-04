let arr = [
    {
        name:'Azamat',
        salary:5000,
        hours:3000
    },
    {
        name:'Aibek',
        salary:6000,
        hours:2000
    }
]

function checkhour(arr){
    arr.map(item =>{
        if(item.hours > 2500){
            item.salary += 2000
     
       
        }
        else{
            item.salary -= 2000
        }
        return arr
    })
}



console.log(checkhour(arr))
console.log(arr)

let count = 0
function add(){
    
    return count

   function de(){
        return count++
   }
   
}
console.log(add())
