import Service from '.';

export const login = (email, password) => {
  const service = new Service();
  const result = new Promise((resolve, reject) => {
    service.login(email, password).then((result) => {
      resolve(result);
    }).catch((err) => reject(err));
  });
  return result;
};

export const add = (url, values) => {
  const service = new Service();
  const result = new Promise((resolve, reject) => {
    service
      .add(url, values)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => reject(err));
  });
  return result;
};
export const get = (url) => {
  const service = new Service();
  const result = new Promise((resolve, reject) => {
    service
      .get(url)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => reject(err));
  });
  return result;
};
export const search = (url, data) => {
  const service = new Service();
  const result = new Promise((resolve, reject) => {
    service
      .search(url, data)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
  return result;
};
