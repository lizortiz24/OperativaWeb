import api from "../../../modules/shared/libs/api";

const getAccount = async () => {
    const response = await api.get('/account');
    return response;
}

const updateAccount = async (body) => {
    const response = await api.post('/account', body);
    return response;
}

export {
    updateAccount, getAccount
}