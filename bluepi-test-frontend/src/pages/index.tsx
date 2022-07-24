import Sidebar from '@components/Sidebar/Sidebar'
import ProductList from '@/components/ProductList/ProductList'

function Home(): JSX.Element {


  return (
    <>
      <div className='container mx-auto min-w-[50%]'>
        <div className="mt-10 mb-6 text-center">
          <p className="text-4xl font-bold">BluePi Vending Machine</p>
        </div>
        <div className="mt-10 mb-6 text-center">
          <div className="flex flex-row">
            <div className="basis-5/6" style={{ backgroundColor: 'white' }}>
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