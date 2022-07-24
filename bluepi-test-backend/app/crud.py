import os
from sqlalchemy.orm import Session
from app.model import Products, ProductsTest
from app.schemas import ProductsSchema

def get_all_products(db: Session):
    if os.getenv("TEST"):
        response = db.query(ProductsTest).order_by(ProductsTest.title).all()
    else:
        response = db.query(Products).order_by(Products.title).all()
        if len(response)<= 0:
            init_create_product(db=db)
            response = db.query(Products).order_by(Products.title).all()

    return response

def init_create_product(db: Session):
    products_array = []
    products_array.append(Products(title="Product 1", description="description of product 1",price=25, imgUrl="https://cdn-images-1.medium.com/max/280/1*3deOQBtPeNaYfhuVfYlW4g@2x.jpeg", total=10))
    products_array.append(Products(title="Product 2", description="description of product 2",price=30, imgUrl="https://cdn-images-1.medium.com/max/280/1*3deOQBtPeNaYfhuVfYlW4g@2x.jpeg", total=100))
    products_array.append(Products(title="Product 3", description="description of product 3",price=55, imgUrl="https://cdn-images-1.medium.com/max/280/1*3deOQBtPeNaYfhuVfYlW4g@2x.jpeg", total=10))
    products_array.append(Products(title="Product 4", description="description of product 4",price=160, imgUrl="https://cdn-images-1.medium.com/max/280/1*3deOQBtPeNaYfhuVfYlW4g@2x.jpeg", total=100))
    products_array.append(Products(title="Product 5", description="description of product 5",price=12, imgUrl="https://cdn-images-1.medium.com/max/280/1*3deOQBtPeNaYfhuVfYlW4g@2x.jpeg", total=10))
    products_array.append(Products(title="Product 6", description="description of product 6",price=39, imgUrl="https://cdn-images-1.medium.com/max/280/1*3deOQBtPeNaYfhuVfYlW4g@2x.jpeg", total=100))
    products_array.append(Products(title="Product 7", description="description of product 7",price=29, imgUrl="https://cdn-images-1.medium.com/max/280/1*3deOQBtPeNaYfhuVfYlW4g@2x.jpeg", total=100))
    products_array.append(Products(title="Product 8", description="description of product 8",price=500, imgUrl="https://cdn-images-1.medium.com/max/280/1*3deOQBtPeNaYfhuVfYlW4g@2x.jpeg", total=100))
    products_array.append(Products(title="Product 9", description="description of product 9",price=1877, imgUrl="https://cdn-images-1.medium.com/max/280/1*3deOQBtPeNaYfhuVfYlW4g@2x.jpeg", total=100))

    for product in products_array:
         db.add(product)
    db.commit()


def create_products(db: Session, product: ProductsSchema):
    if os.getenv("TEST"):
         _product = ProductsTest(title=product.title, description=product.description, price=product.price, imgUrl=product.imgUrl, total=product.total)
        
    else:
        _product = Products(title=product.title, description=product.description, price=product.price, imgUrl=product.imgUrl, total=product.total)

    db.add(_product)
    db.commit()
    db.refresh(_product)
   
    return _product

def get_product_id(db: Session, product_id: int):
    if os.getenv("TEST"):
        response = db.query(ProductsTest).filter(ProductsTest.id == product_id).first()
    else:
        response = db.query(Products).filter(Products.id == product_id).first()
    return response

def update_stock_product(db: Session, product_id: int):
    if os.getenv("TEST"):
        _product = get_product_id(db=db, product_id=product_id)
    else:
        _product = get_product_id(db=db, product_id=product_id)

    if _product.total > 0:
        _product.total = _product.total - 1
    else:
        _product.total = 0

    db.commit()
    db.refresh(_product)

    return _product

def update_product(db: Session, product: ProductsSchema):
    if os.getenv("TEST"):
        _product = get_product_id(db=db, product_id=product.id)
    else:
        _product = get_product_id(db=db, product_id=product.id)

    _product.title = product.title
    _product.description = product.description
    _product.price = product.price
    _product.imgUrl = product.imgUrl
    _product.total = product.total

    db.commit()
    db.refresh(_product)

    return _product

def remove_product(db: Session, product_id: int):
    if os.getenv("TEST"):
        _product = get_product_id(db=db, product_id=product_id)
    else:
        _product = get_product_id(db=db, product_id=product_id)

    db.delete(_product)
    db.commit()
    

