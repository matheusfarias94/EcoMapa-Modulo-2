const axios = require("axios");

const linkApiMapa =
  "https://nominatim.openstreetmap.org/search?format=json&country=Brazil&limit=1";
async function buscarMapaApi(cep) {
  try {
    const padronizarCep = cep.replace(/\D/g, "");

    if (padronizarCep.length !==8) {
      console.error(" Cep com numero de digitos inválido");
      return
      
    }

    const res = await axios.get(`${linkApiMapa}&postalcode=${padronizarCep}}`);
    if (!res.data || res.data.length === 0) {
      console.error(" Cep não encontrado");
      return 
      
    }
    const { lat, lon, display_name } = res.data[0];
    if (!lat || !lon || !display_name) {
      console.error(" Informações do Cep não encontradas");
      return
    
    }
    return { lat, lon, display_name };
  } catch (error) {
    console.error("Erro ao chamar a API de mapas", error.message);
  
  }
}
async function gerarLinkGoogleMaps(local) {
  try {
    const { lat, lon } = local;
    const link = `https://www.google.com/maps?q=${lat},${lon}`;
    return link;

  } catch (error) {
    console.error("Erro ao gerar link do Google Maps",error.message);
   
  }
}
module.exports = { buscarMapaApi, gerarLinkGoogleMaps };
