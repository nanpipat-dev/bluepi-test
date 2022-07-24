import os
from fastapi.testclient import TestClient

from .main import app

client = TestClient(app)

def test_get_all_products():
    response = client.get("/products/get?totalAmount=100")
    assert response.status_code == 200
    assert response.json() != {}

def test_create_products():
    response = client.post("/products/create",json={"title":"mockTitle", "description":"mockDescription", "price":100,"imgUrl":"mockImgUrl", "total": 10})
    assert response.status_code == 200

def test_update_stock_product():
    create = client.post("/products/create",json={"title":"mockTitle", "description":"mockDescription", "price":100,"imgUrl":"mockImgUrl","total": 10})
    assert create.status_code == 200

    product_id = create.json()["data"]["id"]
    update = client.patch("/products/update?product_id=" + str(product_id))

    assert update.status_code == 200 or update.status_code == 307 

def test_update_product():
    create = client.post("/products/create",json={"title":"mockTitle", "description":"mockDescription", "price":100,"imgUrl":"mockImgUrl","total": 10})
    assert create.status_code == 200

    product_id = create.json()["data"]["id"]
    updated_product = {"id": product_id,"title":"mockTitleUpdate", "description":"mockDescriptionUpdate", "price":20,"imgUrl":"mockImgUrlUpdate", "total": 20}

    update = client.patch("/products/update-product", json=updated_product)

    assert update.status_code == 200 or update.status_code == 307 
    assert update.json()["data"]["title"] == "mockTitleUpdate"

def test_remove_product():
    create = client.post("/products/create",json={"title":"mockTitle", "description":"mockDescription", "price":100,"imgUrl":"mockImgUrl","total": 10})
    assert create.status_code == 200

    product_id = create.json()["data"]["id"]
    remove = client.delete("/products/remove?product_id=" + str(product_id))

    assert remove.status_code == 200 or remove.status_code == 307 

