export const LOGIN = () => ({ method: 'POST', url: '/login' });
export const REGISTER = () => ({ method: 'POST', url: '/register' });

export const GET_CAR_FAMILIES = () => ({ method: 'GET', url: '/models' });
export const GET_CARS = () => ({ method: 'GET', url: '/cars' });
export const GET_APPOINTMENTS = () => ({ method: 'GET', url: '/appointments' });
export const POST_APPOINTMENT = () => ({ method: 'POST', url: '/appointments' });
export const DELETE_APPOINTMENT = () => ({ method: 'DELETE', url: '/appointments' });
export const GET_DEALERSHIPS = () => ({ method: 'GET', url: '/dealerships' });
