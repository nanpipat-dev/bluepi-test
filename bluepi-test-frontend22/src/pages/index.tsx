import Sidebar from '@components/Sidebar/Sidebar'
import ProductList from '@/components/ProductList/ProductList'

function Home(): JSX.Element {


  return (
    <>
      <div className='container mx-auto'>
        <div className="mb-6 mt-10 text-center">
          <p className="text-4xl font-bold">BluePi Vending Machine</p>
        </div>
        <div className="mb-6 mt-10 text-center">
          <div className="flex flex-row">
            <div className="basis-4/6" style={{ backgroundColor: 'white' }}>
              <ProductList />
            </div>
            <div className="basis-1/6" style={{ backgroundColor: 'white' }}>
              <Sidebar />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home