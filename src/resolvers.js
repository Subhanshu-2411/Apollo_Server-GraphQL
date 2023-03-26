
const products = [
    {
        id: 1,
        name: 'Product 1',
        isInStock: true,
    },
    {
        id: 2,
        name: 'Product 2',
        isInStock: true,
    },
    {
        id: 3,
        name: 'Product 3',
        isInStock: false,
    },
    {
        id: 4,
        name: 'Product 4',
        isInStock: true,
    },
    {
        id: 5,
        name: 'Product 5',
        isInStock: true,
    },
    {
        id: 6,
        name: 'Product 6',
        isInStock: false,
    },
    {
        id: 7,
        name: 'Product 7',
        isInStock: true,
    },
    {
        id: 8,
        name: 'Product 8',
        isInStock: true,
    },
    {
        id: 9,
        name: 'Product 9',
        isInStock: false,
    },
    {
        id: 10,
        name: 'Product 10',
        isInStock: true,
    },
    {
        id: 11,
        name: 'Product 11',
        isInStock: true,
    },
    {
        id: 12,
        name: 'Product 12',
        isInStock: false,
    },
    {
        id: 13,
        name: 'Product 13',
        isInStock: true,
    },
    {
        id: 14,
        name: 'Product 14',
        isInStock: true,
    },
]

resolvers = {
    Query: {
        products: () => []
    }
}

module.exports = resolvers