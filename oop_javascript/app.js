console.log("Hello world ")
//object let or const  
// const circle={
//     radious: 1,
//     location: {
//         x:1,
//         y:1
//     },
//     draw : function (){
//         console.log('draw')
//     }
// };
// circle.draw()

// factory function  *******
// function createcircle(radious){
//     return{
//         radious,
//         draw : function(){
//             console.log('draw from create circle ')
//         },
//         area: (3.1416*radious*radious),
//     }
// }
// const circle1=createcircle(2);
// console.log(circle1.area)

// constructor ******
function createCircle(radius){
    let color='red' // local variable 

    // console.log('this',this);
    this.radius=radius;
    let defaultlocation={x:0,y:0} //private 
    let computeOptimumLocation= function(factor){
        //...
    }
    this.getdefaultlocation=function(){
        return defaultlocation;
    }
    this.draw= function(){
        let x,y ;//closer of this fuctions are local var & defaultloc and computeoptimum
        computeOptimumLocation(0.1);
        console.log('draw')
    }
    Object.defineProperty(this,'defaultlocation',{
        get: function(){
            return defaultlocation;
        },
        set: function(value){
            if(!value.x|| !value.y)
                throw new Error('invalid location');
            defaultlocation=value;
        }
    });

}
const anothercircle =new createCircle(10)
anothercircle.defaultlocation={x:10,y:2}
// anothercircle.draw();
// const Circle1=new Function('radius',`
// this.radius=radius;
// this.draw= function(){
//     console.log('draw')
// }
// `)
// const circle =new Circle1(10)

// Circle.call({},1) //{}target of this }
// Circle.apply({},[1,2,3,4])



//value type reference type 
// value or premetives - number string boolean symbol undefined null
// reference - object function array 
// value types are independendent 

// let x=10;
// let y=x;

// x=20 //x=20 y=10

// //reference type - depndent memory reference copy 
// let x1={value: 10}
// let y1= x1;
// x1.value=20;

for(let key in anothercircle ){
    if (typeof anothercircle[key] !=='function')
        console.log(key,anothercircle[key]);
}
