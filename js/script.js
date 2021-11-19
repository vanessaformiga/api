const base_url = 'https://thatcopy.pw/catapi/rest/';


const btn = document.getElementById("change-cat");


const carregaImagem = async () => {
  try{
    const data = await fetch(base_url);
    const converterJson = await data .json();
  
    return json.webpurl;
    
    
  }catch (e){
    console.log(e.menssage);
  }
};

const carregandoImagem = async () => {
  const cat = document.getElementById("cat");
  cat.src = await carregaImagem();
}
carregandoImagem();

btn.addEventListener("click", carregandoImagem);

