interface Category {
    _id: string;
    _createdAt: string;
    _updateAt: string;
    _rev: string;
    slug: {
        _type: "slug";
        current: string;
    };
    title: string;
}

interface Image{
    _key: string;
    _type: "image";
    asset: {
        url: string;
    };
}


interface Product {
    _id: string;
    _createdAt: string;
    _updateAt: string;
    _rev: string;
    type: "product";
    title: string;
    price: number;
    slug: {
        _type: "slug";
        current: string;
    };
    description?: string;
    category: {
        _type: "reference";
        _ref: string;
    };
    image: Image[];
}