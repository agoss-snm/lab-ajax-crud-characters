class APIHandler {
  constructor(baseUrl) {
    this.api = axios.create({
      baseURL: baseUrl,
    });
  }

  getFullList() {
    return this.api.get("/characters");
  }

  getOneRegister = (characterId) => {
    return this.api.get(`/characters/${characterId}`);
  };

  createOneRegister = (characterInfo) => {
    return this.api.post(`/characters`, characterInfo);
  };

  updateOneRegister = (characterInfo) => {
    return this.api.put(`/characters/${characterId}`, characterInfo);
  };

  deleteOneRegister = (characterId) => {
    return this.api.delete(`/characters/${characterId}`);
  };
}