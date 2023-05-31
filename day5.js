document.write("hello")
console.log("hi")
        function sum(){
        let a = document.getElementById("inp").value
        let b=document.getElementById("inp1").value
        let c=parseInt(a)+parseInt(b)
        document.getElementById("res1").value=c
    }
    function sub(){
        let a = document.getElementById("inp").value
        let b=document.getElementById("inp1").value
        let d=parseInt(a)-parseInt(b)
        document.getElementById("res2").value=d
    }
    function div(){
        let a = document.getElementById("inp").value
        let b=document.getElementById("inp1").value
        let e=parseInt(a)/parseInt(b)
        document.getElementById("res3").value=e
    }
     function mul(){
            let a = document.getElementById("inp").value
            let b=document.getElementById("inp1").value
            let f=parseInt(a)*parseInt(b)
            document.getElementById("res4").value=f
    }