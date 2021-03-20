let API_URL;

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  // development
  API_URL = 'http://localhost:8090/php-banking-api-test-gpcuaw/api';
  console.log('development');
} else {
  // production
  API_URL = 'https://php-banking-api.herokuapp.com/api';
  console.log('production');
}

export { API_URL };

