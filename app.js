document.addEventListener('DOMContentLoaded',()=>{
  const entrada=document.getElementById('entrada')
  const formulario=document.getElementById('formulario')
  const lista=document.getElementById('lista')
  const anterior=document.getElementById('anterior')
  const siguiente=document.getElementById('siguiente')
  const indicador=document.getElementById('indicador')
  const capa=document.getElementById('capa')

  let pagina=1
  let totalPaginas=1
  let termino=''

  const mostrarCarga=()=>capa.classList.add('mostrar')
  const ocultarCarga=()=>capa.classList.remove('mostrar')


  const estadoClase=(estado)=>{
    const e=(estado||'').toLowerCase()
    if(e==='alive') return 'vivo'
    if(e==='dead') return 'muerto'
    return 'desconocido'
  }

  const renderizarPersonajes=(personajes=[])=>{
    if(!personajes.length){
      lista.innerHTML='<p style="grid-column:1/-1;text-align:center;color:#94a3b8">Sin resultados</p>'
      return
    }
    const fragmento=document.createDocumentFragment()
    for(const p of personajes){
      const tarjeta=document.createElement('article')
      tarjeta.className='tarjeta'
      tarjeta.innerHTML=`
        <img src="${p.image}" alt="${p.name}">
        <h3 class="nombre">${p.name}</h3>
        <p class="detalle">${p.species} • ${p.gender}</p>
        <span class="estado ${estadoClase(p.status)}">${p.status}</span>
      `
      fragmento.appendChild(tarjeta)
    }
    lista.innerHTML=''
    lista.appendChild(fragmento)
  }

  const actualizarControles=()=>{
    indicador.textContent=`Página ${pagina}`
    anterior.disabled=pagina<=1
    siguiente.disabled=pagina>=totalPaginas
  }

  const cargarDatos=async()=>{
    try{
      mostrarCarga()
      const url=new URL('https://rickandmortyapi.com/api/character')
      if(termino) url.searchParams.set('name',termino)
      url.searchParams.set('page',String(pagina))
      const res=await fetch(url.toString())
      if(!res.ok) throw new Error('error')
      const datos=await res.json()
      totalPaginas=datos.info?.pages||1
      renderizarPersonajes(datos.results||[])
      actualizarControles()
    }catch{
      totalPaginas=1
      renderizarPersonajes([])
      actualizarControles()
    }finally{
      ocultarCarga()
    }
  }

  formulario.addEventListener('submit',(e)=>{
    e.preventDefault()
    termino=entrada.value.trim()
    pagina=1
    cargarDatos()
  })


  anterior.addEventListener('click',()=>{
    if(pagina>1){
      pagina-=1
      cargarDatos()
    }
  })

  siguiente.addEventListener('click',()=>{
    if(pagina<totalPaginas){
      pagina+=1
      cargarDatos()
    }
  })

  cargarDatos()
})
