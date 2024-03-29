import 'regenerator-runtime/runtime';
import { FETCH_TIMEOUT_SEC } from './config';

const timeout = waitSec => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error());
    }, waitSec * 1000);
  });
};

export const getJSON = async url => {
  try {
    const res = await Promise.race([fetch(url), timeout(FETCH_TIMEOUT_SEC)]);

    const { data } = await res.json();

    if (!res.ok) throw new Error();

    return data;
  } catch (error) {
    throw error;
  }
};

export const AJAX = async (url, uploadData = undefined) => {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);

    const res = await Promise.race([fetchPro, timeout(FETCH_TIMEOUT_SEC)]);

    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message}`);

    return data;
  } catch (err) {
    throw err;
  }
};
