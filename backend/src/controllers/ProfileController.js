const connection = require('../database/connection')

module.exports = {
  async index(request, response) {
    const ong_id = request.headers.authorization;
    try {

      const ongs = await connection('ongs').where('id', ong_id).select('id').first()

      if (!ongs) {
        return response.status(404).json({ erro: "Ong not found" })
      }

      const incidents = await connection('incidents')
        .where('ong_id', ong_id)
        .select('*')

      if (incidents.length == 0) {
        return response.status(200).json({ erro: "No incidents registered as that ID" })
      }

      return response.status(200).json(incidents)
    } catch (err) {
      return response.status(400).json({ error: "Error listing incidents for this organization" })
    }

  }
}