let baseUrl:string;
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:8000/api';
} else {
  baseUrl = 'https://posgress-jarh.herokuapp.com/api';
}

export const fetchWithoutToken = async (endpoint:string, data?:Object, method:string = 'GET') => {
  const url = `${baseUrl}/${endpoint}`;

  if (method === 'GET') {
    return fetch(url)
      .then(res => res.json())
      .then(data => data)
      .catch(error => error.msg)
  } else {
    return fetch(url, {
      method,
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => data)
      .catch(error => error.msg);
  }
}

export const fetchWithToken = async (endpoint:string, data?:Object, method:string = 'GET') => {
  const url = `${baseUrl}/${endpoint}`;
  const token = localStorage.getItem('token') || '';

  if (method === 'GET') {
    return fetch(url, {
      headers: {
        'x-token': token
      }
    })
    .then(res => res.json())
    .then(data => data)
    .catch(error => error.msg);

  } else {
    return fetch(url, {
      method,
      headers: {
        'Content-type': 'application/json',
        'x-token': token
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => data)
    .catch(error => error.msg);
  }
}
