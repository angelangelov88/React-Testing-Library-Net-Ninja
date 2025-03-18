const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: 'John',
          last: 'Doe'
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/39.jpg',
        },
        login: {
          uuid: '123',
          username: 'johndoe' 
      }
      }
    ]
  }
}

export default {
    get: jest.fn().mockResolvedValue(),
   
}