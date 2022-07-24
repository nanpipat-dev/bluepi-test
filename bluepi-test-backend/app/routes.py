from fastapi import APIRouter, HTTPException, Path
from fastapi import Depends
from app.config import SessionLocal
from sqlalchemy.orm import Session
from app.schemas import ProductsSchema, Request, Response, RequestProducts, CreateProductsRequest,UpdateProductsRequest

import app.crud

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/get", status_code=200)
async def get_all_products(totalAmount:int = 0, db: Session = Depends(get_db)):
    try:
        _products = app.crud.get_all_products(db)
    
        for index in range(len(_products)):
            if _products[index].price > totalAmount:
                _products[index].canBuy = False
            else:
                _products[index].canBuy = True
        return Response(status="Ok", code="200", message="Success fetch all data", data=_products)

    except ValueError as ve:
        raise HTTPException(status_code=400, detail=ve)
    

@router.post("/create" ,status_code=200)
async def create_products(request: CreateProductsRequest, db: Session = Depends(get_db)):
    try:
        _product = app.crud.create_products(db, product=request)
        return Response(status="Ok",code="200",message="Product created successfully", data=_product)

    except:
        raise HTTPException(status_code=400, detail="Error create products")


@router.patch("/update",status_code=200)
async def update_stock_product(product_id: int, db: Session = Depends(get_db)):
    try:
        _product = app.crud.update_stock_product(db, product_id=product_id)
        return Response(status="Ok", code="200", message="Success update data", data=_product)

    except:
        raise HTTPException(status_code=400, detail="Error update stock")

@router.patch("/update-product",status_code=200)
async def update_product(request: UpdateProductsRequest, db: Session = Depends(get_db)):
    try:
        _product = app.crud.update_product(db, product=request)
        return Response(status="Ok", code="200", message="Success update data", data=_product)

    except:
        raise HTTPException(status_code=400, detail="Error update product")

@router.delete("/remove",status_code=200)
async def remove_product(product_id: int, db: Session = Depends(get_db)):
    try:
        app.crud.remove_product(db, product_id=product_id)
        return Response(status="Ok", code="200", message="Success remove data")

    except ValueError as ve:
        raise HTTPException(status_code=400, detail=ve)


   