// import axios from 'axios';

// const API_URL = 'http://localhost:3000/api/auth'; // Ensure this matches your backend

// const AuthService = {
//   register(data) {
//     return axios.post(`${API_URL}/register`, data);
//   },

//   login(data) {
//     return axios.post(`${API_URL}/login`, data, { 
//       withCredentials: true,
//       // Add this to ensure cookies are sent
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//   },

//   // Modify isAuthenticated to handle potential 404
//   async isAuthenticated() {
//     try {
//       const response = await axios.get(`${API_URL}/user`, { 
//         withCredentials: true 
//       });
//       return response.data;
//     } catch (error) {
//       console.error('Authentication check failed', error);
//       throw error;
//     }
//   },

//   logout() {
//     return axios.post(`${API_URL}/logout`, {}, { withCredentials: true })
//       .then(() => {
//         localStorage.removeItem('user');
//         window.location.href = '/login';
//       })
//       .catch(error => {
//         console.error('Logout failed', error);
//         localStorage.removeItem('user');
//         window.location.href = '/login';
//       });
//   },

//   getCurrentUser() {
//     return JSON.parse(localStorage.getItem('user'));
//   }
// };

// export default AuthService;
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth'; // Ensure this matches your backend

const AuthService = {
  register(data) {
    return axios.post(`${API_URL}/register`, data, {
      withCredentials: true
    });
  },

  login(data) {
    return axios.post(`${API_URL}/login`, data, { 
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  },

  // Simplify authentication check
  async isAuthenticated() {
    try {
      const response = await axios.get(`${API_URL}/user`, { 
        withCredentials: true 
      });
      return response.data;
    } catch (error) {
      console.error('Authentication check failed', error);
      throw error;
    }
  },

  logout() {
    return axios.post(`${API_URL}/logout`, {}, { 
      withCredentials: true 
    })
      .then(() => {
        localStorage.removeItem('user');
        window.location.href = '/login';
      })
      .catch(error => {
        console.error('Logout failed', error);
        localStorage.removeItem('user');
        window.location.href = '/login';
      });
  },

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
};

export default AuthService;