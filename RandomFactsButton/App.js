let btn = document.querySelector("button");

btn.addEventListener("click",async ()=>{

    let fact = await getFacts();
    let p = document.querySelector("#result");
    p.innerText=fact;
});
let url ="https://catfact.ninja/fact";

async function getFacts(){
    try{
        let res = await fetch(url);
        let resfinal = await res.json();
        return resfinal.fact;

        // let res= axios.get(url);
        // return res.data.fact;
    }
    catch(e){
        return "No Fact found";
    }
}