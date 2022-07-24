from sqlalchemy import  Column, Integer, String
from app.config import Base

class Products(Base):
    __tablename__ ="products"
    
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    title = Column(String)
    description = Column(String)
    price = Column(Integer)
    imgUrl = Column(String)
    total = Column(Integer)

class ProductsTest(Base):
    __tablename__ ="products_test"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    title = Column(String)
    description = Column(String)
    price = Column(Integer)
    imgUrl = Column(String)
    total = Column(Integer)