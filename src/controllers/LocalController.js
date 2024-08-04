const Locais = require("../models/Locais");
const {
  buscarMapaApi,
  gerarLinkGoogleMaps,
} = require("../services/map.service");

class LocalController {
  async criarLocal(req, res) {
    try {
      let {
        nomeLocal,
        descricaoLocal,
        cep,
        endereco,
        TipoResiduoAceito,
        latitude,
        longitude,
        linkMaps,
      } = req.body;

      if (!nomeLocal || !descricaoLocal || !TipoResiduoAceito || !cep) {
        return res
          .status(400)
          .json({ error: "Todos os campos são obrigatórios!" });
      }

      if (
        TipoResiduoAceito.toLowerCase() !== "metal" &&
        TipoResiduoAceito.toLowerCase() !== "papel" &&
        TipoResiduoAceito.toLowerCase() !== "vidro" &&
        TipoResiduoAceito.toLowerCase() !== "orgânico" &&
        TipoResiduoAceito.toLowerCase() !== "plastico" &&
        TipoResiduoAceito.toLowerCase() !== "bateria"
      ) {
        return res.status(400).json({
          error:
            "Tipo de Resíduo não Aceito! Precisa ser Metal, Papel, Vidro, Orgânico, Plastico ou Bateria",
        });
      }

      if (!latitude || !longitude || !cep) {
        const mapaData = await buscarMapaApi(cep);
        if (!mapaData) {
          return res.status(400).json({
            error: "CEP não encontrado ou com numero de digitos inválido! Favor Preencher todos os dados manualmente",
          });
        }

        const FiltrarDisplayName = mapaData.display_name.split(", ");
        const cidade = FiltrarDisplayName[1];
        const estado = FiltrarDisplayName[4];
        latitude = mapaData.lat;
        longitude = mapaData.lon;
        endereco = `Cidade:${cidade} - Estado:${estado}`;
      }

      if (!linkMaps) {
        linkMaps = await gerarLinkGoogleMaps({
          lat: latitude,
          lon: longitude,
        });
      }

      const novoLocal = await Locais.create({
        nomeLocal,
        descricaoLocal,
        cep,
        endereco,
        TipoResiduoAceito,
        latitude,
        longitude,
        linkMaps,
        usuarioId: req.usuarioId,
      });
      return res.status(201).json(novoLocal);
    } catch (error) {
      return res.status(500).json({ mensagem: " Erro ao criar local", error });
    }
  }

  async listarLocaisUsuarioLogado(req, res) {
    try {
      const locais = await Locais.findAll({
        where: { usuarioId: req.usuarioId },
      });
      return res.status(200).json(locais);
    } catch (error) {
      return res
        .status(500)
        .json({ mensagem: " Erro ao buscar locais do usuario", error });
    }
  }
  async listarLocalEspecificoUsuario(req, res) {
    try {
      const local = await Locais.findOne({
        where: { usuarioId: req.usuarioId, local_id: req.params.local_id },
      });
      if (!local) {
        return res.status(404).json({
          mensagem: "Local cadastrado pelo usuário não encontrado",
        });
      }
      return res.status(200).json(local);
    } catch (error) {
      return res.status(500).json({
        mensagem: " Erro ao buscar local do usuario",
        error,
      });
    }
  }
  async deletarLocalUsuarioLogado(req, res) {
    try {
      const resultado = await Locais.destroy({
        where: { usuarioId: req.usuarioId, local_id: req.params.local_id },
      });
      if (resultado === 0) {
        return res.status(404).json({ mensagem: "Local não encontrado ou pertence a outro usuário" });
      }
      return res.status(200).json({ mensagem: "Local deletado com sucesso" });
    } catch (error) {
      return res
        .status(500)
        .json({ mensagem: " Erro ao deletar local do usuario", error });
    }
  }
  async atualizarLocalUsuarioLogado(req, res) {
    try {
      const {
        nomeLocal,
        descricaoLocal,
        cep,
        endereco,
        latitude,
        longitude,
        linkMaps,
      } = req.body;

      const resultado = await Locais.update(
        {
          nomeLocal,
          descricaoLocal,
          cep,
          endereco,
          latitude,
          longitude,
          linkMaps,
        },
        {
          where: { usuarioId: req.usuarioId, local_id: req.params.local_id },
        }
      );

      if (resultado[0] === 0) {
        return res.status(404).json({
          mensagem: "Local não encontrado ou pertence a outro usuário",
        });
      }
      const localAtualizado = await Locais.findOne({
        where: { local_id: req.params.local_id },
      });

      return res.status(200).json(localAtualizado);
    } catch (error) {
      return res
        .status(500)
        .json({ mensagem: " Erro ao atualizar local do usuario", error });
    }
  }

  async linkGoogleMaps(req, res) {
    try {
      const local = await Locais.findOne({
        where: { local_id: req.params.local_id },
      });
      if (!local) {
        return res.status(404).json({
          mensagem: "Local não encontrado ou pertence a outro usuário",
        });
      }
      return res.status(200).json(local.linkMaps);
    } catch (error) {
      return res
        .status(500)
        .json({ mensagem: " Erro ao buscar local do usuario", error });
    }
  }
}
module.exports = new LocalController();
