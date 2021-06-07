export const LOGIN = () => ({ method: 'POST', url: '/login' });
export const REGISTER = () => ({ method: 'POST', url: '/register' });

export const GET_CAR_FAMILIES = () => ({ method: 'GET', url: '/models' });
export const GET_CARS = () => ({ method: 'GET', url: '/cars' });
export const GET_APPOINTMENTS = () => ({ method: 'GET', url: '/appointments' });
export const GET_HOUSE = (id) => ({ method: 'GET', url: `/houses/${id}` });
export const FAVOURITE_HOUSE = (id) => ({ method: 'POST', url: `/houses/${id}/favourite` });
export const UNFAVOURITE_HOUSE = (id) => ({ method: 'POST', url: `/houses/${id}/unfavourite` });
