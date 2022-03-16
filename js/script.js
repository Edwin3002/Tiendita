// urlCartas = "http://localhost:8000/Food/"
urlCartas = "https://api-tienda-app.herokuapp.com/productos/"
urlOne = "https://clothes-edwin.herokuapp.com/Clothes/"

const getData = async (url) => {
  const resp = await fetch(url);
  const data = resp.json();
  // console.log(data)
  return data;
};


document.addEventListener('DOMContentLoaded', async () => {
  const data = await getData(urlCartas);
  pintarCartas(data)
})


// pintarCartas
function pintarCartas(data) {
  console.log(data)
  let divCartas = document.getElementById('cartas');
  divCartas.innerHTML = ''
  data.forEach(element => {
    const { name, img, price, id, discount } = element;
    cartas.innerHTML += `
        <div class="card" style="width: 13rem;">
        <div class="descuento fw-bold">${discount} dto.</div>

        <div class="padreImg">
        <img src="${img}" width="100%"class="card-img-top">
        </div>
        <div class="card-body">
        <p class="card-text fw-bold">$${price}/Kg <span class="text-muted text-decoration-line-through"> $${price}/Kg</span></p>          
        <p class="card-title text-capitalize">${name}</p>
          <a href="#"><button class="btn btnLook text-light w-100 agregar2" data-bs-toggle="modal" data-bs-target="#exampleModal2" onclick="pintarSola('${id}')">Ver más</button></a>  
          
        </div>
      </div>
        `
  });
}


// ver mas local storage modal
function saveLocalS(id) {
  localStorage.setItem('llave', id)
  console.log(id)
}


// pintar carta en el modal
async function pintarSola(id) {
  url1 = (urlCartas + id)
  const f = await getData(url1);
  let space = document.getElementById('verSola')
  space.innerHTML = `
        <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
                <div class="card mb-3" style="max-width: 100w0px;">
            <div class="row g-0">
                <div class="col-md-4 d-flex align-items-center">
                    <img src="${f.img}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h2 class="card-title fw-bolder">${f.name}</h2>
                        <h3 class="card-text fw-bold">$${f.price}/Kg</h3>
                        <p class="card-text">Precio con IVA incluido</p>
                        <p class="card-text">Peso aproximado por pieza, pueda variar de acuerdo al peso real</small></p>
                        <h5 for="" class="fw-bold">Selecciona la madurez que desea</h5>
                        <form action="" id="addFaruit">
                          <select class="form-select" id="madurez" aria-label="Default select example">
                              <!-- <option selected>Open this select menu</option> -->
                              <option value="maduro">Maduro (Para hoy)</option>
                              <option value="normal">Normal (3-5 días)</option>
                              <option value="verde">verde (7 días)</option>
                            </select>
                            <div class="btnPesoAdd">                          
                              <input type="number" id="peso" class=" peso" placeholder="Cantidad en U. " required>
                              <button type="button"  class="btn btnAdd w-50" onclick="guardarCarrito('${id}')">Agregar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  `
}


function guardarCarrito(id){
  let madurez = document.getElementById('madurez').value;
  let peso = document.getElementById('peso').value;
  localStorage.setItem('carrito', id)
  console.log(id)
  console.log(madurez)
  console.log(peso)
  guardarLocalS(id, madurez, peso)
  
}

// ver mas local storage carrito
function guardarLocalS(id, madurez,peso) {
  localStorage.setItem('llave', id)
  console.log(id)
}

