export const getPagination = (page? : number, limit = 50) => {
    const from = page ? (page - 1) * limit + 1 : 1;
    const to = page ? from + limit - 1 : limit;

    return { from, to };
};

export default getPagination