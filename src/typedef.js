const typedefs = `
# Type for a Product
    type Product {
        id: Int,
        name: String,
        isInStock: Boolean,
    }
    
    type Query {
        products: [Product]
    }
        
`

module.exports = typedefs