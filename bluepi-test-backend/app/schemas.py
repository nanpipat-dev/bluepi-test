from typing import List, Optional, Generic, TypeVar
from pydantic import BaseModel , Field
from pydantic.generics import GenericModel

T = TypeVar('T')


class ProductsSchema(BaseModel):
    id: Optional[int] = None
    title: Optional[str] = None
    description: Optional[str] = None
    price: Optional[int] = None
    imgUrl: Optional[str] = None
    total: Optional[int] = None
    canBuy: Optional[bool] = False
    class Config:
        orm_mode = True


class Request(GenericModel, Generic[T]):
    parameter: Optional[T] = Field(...)


class RequestProducts(BaseModel):
    parameter: ProductsSchema = Field(...)


class Response(GenericModel, Generic[T]):
    code: str
    status: str
    message: str
    data: Optional[T]