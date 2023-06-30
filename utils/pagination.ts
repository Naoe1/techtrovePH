export const getPagination = (page?: number, limit = 20) => {
    const from = page ? page * limit : 0;
    const to = page ? from + limit - 1 : limit - 1


    return { from, to };
};

export default getPagination