console.log("Função autoinvocável");

(
    function(){
        let name = "Samila Milena"
        return name;
    }
)();

(
    function(a , b){
        return a + b;
    }
)(1,2);

const soma3 = (
    function(c , d){
        return c + d;
    }
)(2,2);

console.log(soma3);